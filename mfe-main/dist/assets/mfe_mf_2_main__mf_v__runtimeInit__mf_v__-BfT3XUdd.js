var index_cjs$3 = {};

var index_cjs$2 = {};

var polyfills_cjs$1 = {};

function _extends$2() {
    _extends$2 = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends$2.apply(this, arguments);
}

function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

polyfills_cjs$1._extends = _extends$2;
polyfills_cjs$1._object_without_properties_loose = _object_without_properties_loose;

var index_cjs$1 = {};

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/browser/index.ts
var browser_exports = {};
__export(browser_exports, {
  createLogger: () => createLogger2,
  logger: () => logger$1
});
var browser = __toCommonJS(browser_exports);

// src/browser/color.ts
var supportsSubstitutions = void 0;
var supportColor = () => {
  if (typeof supportsSubstitutions !== "undefined") {
    return supportsSubstitutions;
  }
  const originalConsoleLog = console.log;
  try {
    const testString = "color test";
    const css = "color: red;";
    supportsSubstitutions = false;
    console.log = (...args) => {
      if (args[0] === `%c${testString}` && args[1] === css) {
        supportsSubstitutions = true;
      }
    };
    console.log(`%c${testString}`, css);
  } catch (e) {
    supportsSubstitutions = false;
  } finally {
    console.log = originalConsoleLog;
  }
  return supportsSubstitutions;
};
var ansiToCss = {
  "bold": "font-weight: bold;",
  "red": "color: red;",
  "green": "color: green;",
  "orange": "color: orange;",
  "dodgerblue": "color: dodgerblue;",
  "magenta": "color: magenta;",
  "gray": "color: gray;"
};
var formatter = (key) => supportColor() ? (input) => {
  if (Array.isArray(input)) {
    const [label, style] = input;
    return [`%c${label.replace("%c", "")}`, style ? `${ansiToCss[key]}${style}` : `${ansiToCss[key] || ""}`];
  }
  return [`%c${String(input).replace("%c", "")}`, ansiToCss[key] || ""];
} : (input) => [String(input)];
var bold = formatter("bold");
var red = formatter("red");
var green = formatter("green");
var orange = formatter("orange");
var dodgerblue = formatter("dodgerblue");
var magenta = formatter("magenta");
formatter("gray");

// src/browser/utils.ts
function getLabel(type, logType, labels) {
  let label = [""];
  if ("label" in logType) {
    const labelText = type !== "log" ? labels[type] : void 0;
    label = [labelText || logType.label || ""];
    if (logType.color) {
      const colorResult = logType.color(label[0]);
      if (Array.isArray(colorResult) && colorResult.length === 2) {
        label = bold([colorResult[0], colorResult[1]]);
      } else {
        label = bold(colorResult[0] || "");
      }
    } else {
      label = bold(label[0]);
    }
  }
  label = label.filter(Boolean);
  return label;
}
function finalLog(label, text, args, message) {
  if (label.length) {
    if (Array.isArray(message)) {
      console.log(...label, ...message, ...args);
    } else {
      console.log(...label, text, ...args);
    }
  } else {
    Array.isArray(message) ? console.log(...message) : console.log(text, ...args);
  }
}

// src/constants.ts
var LOG_LEVEL = {
  error: 0,
  warn: 1,
  info: 2,
  log: 3,
  verbose: 4
};

// src/utils.ts
var errorStackRegExp = /at\s.*:\d+:\d+[\s\)]*$/;
var anonymousErrorStackRegExp = /at\s.*\(<anonymous>\)$/;
var isErrorStackMessage = (message) => errorStackRegExp.test(message) || anonymousErrorStackRegExp.test(message);

// src/createLogger.ts
function validateOptions(options) {
  const validatedOptions = { ...options };
  if (options.labels && typeof options.labels !== "object") {
    throw new Error("Labels must be an object");
  }
  if (options.level && typeof options.level !== "string") {
    throw new Error("Level must be a string");
  }
  return validatedOptions;
}
var createLogger$1 = (options = {}, { getLabel: getLabel2, handleError, finalLog: finalLog2, greet, LOG_TYPES: LOG_TYPES2 }) => {
  const validatedOptions = validateOptions(options);
  let maxLevel = validatedOptions.level || "log";
  let customLabels = validatedOptions.labels || {};
  let log = (type, message, ...args) => {
    if (LOG_LEVEL[LOG_TYPES2[type].level] > LOG_LEVEL[maxLevel]) {
      return;
    }
    if (message === void 0 || message === null) {
      return console.log();
    }
    let logType = LOG_TYPES2[type];
    let text = "";
    const label = getLabel2(type, logType, customLabels);
    if (message instanceof Error) {
      if (message.stack) {
        let [name, ...rest] = message.stack.split("\n");
        if (name.startsWith("Error: ")) {
          name = name.slice(7);
        }
        text = `${name}
${handleError(rest.join("\n"))}`;
      } else {
        text = message.message;
      }
    } else if (logType.level === "error" && typeof message === "string") {
      let lines = message.split("\n");
      text = lines.map((line) => isErrorStackMessage(line) ? handleError(line) : line).join("\n");
    } else {
      text = `${message}`;
    }
    finalLog2(label, text, args, message);
  };
  let logger2 = {
    // greet
    greet: (message) => log("log", greet(message))
  };
  Object.keys(LOG_TYPES2).forEach((key) => {
    logger2[key] = (...args) => log(key, ...args);
  });
  Object.defineProperty(logger2, "level", {
    get: () => maxLevel,
    set(val) {
      maxLevel = val;
    }
  });
  Object.defineProperty(logger2, "labels", {
    get: () => customLabels,
    set(val) {
      customLabels = val;
    }
  });
  logger2.override = (customLogger) => {
    Object.assign(logger2, customLogger);
  };
  return logger2;
};

// src/browser/gradient.ts
var startColor = [189, 255, 243];
var endColor = [74, 194, 154];
var isWord = (char) => !/[\s\n]/.test(char);
function gradient(message) {
  if (!supportColor()) {
    return [message];
  }
  const chars = [...message];
  const words = chars.filter(isWord);
  const steps = words.length - 1;
  if (steps === 0) {
    console.log(`%c${message}`, `color: rgb(${startColor.join(",")}); font-weight: bold;`);
    return [message];
  }
  let output = "";
  let styles = [];
  chars.forEach((char) => {
    if (isWord(char)) {
      const progress = words.indexOf(char) / steps;
      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
      output += `%c${char}`;
      styles.push(`color: rgb(${r},${g},${b}); font-weight: bold;`);
    } else {
      output += char;
    }
  });
  return [output, ...styles];
}

// src/browser/constants.ts
var LOG_TYPES = {
  // Level error
  error: {
    label: "error",
    level: "error",
    color: red
  },
  // Level warn
  warn: {
    label: "warn",
    level: "warn",
    color: orange
  },
  // Level info
  info: {
    label: "info",
    level: "info",
    color: dodgerblue
  },
  start: {
    label: "start",
    level: "info",
    color: dodgerblue
  },
  ready: {
    label: "ready",
    level: "info",
    color: green
  },
  success: {
    label: "success",
    level: "info",
    color: green
  },
  // Level log
  log: {
    level: "log"
  },
  // Level debug
  debug: {
    label: "debug",
    level: "verbose",
    color: magenta
  }
};

// src/browser/createLogger.ts
function createLogger2(options = {}) {
  return createLogger$1(options, {
    handleError: (msg) => msg,
    getLabel,
    finalLog,
    LOG_TYPES,
    greet: (msg) => {
      return gradient(msg);
    }
  });
}

// src/browser/index.ts
var logger$1 = createLogger2();

var polyfills_cjs = {};

function _extends$1() {
    _extends$1 = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends$1.apply(this, arguments);
}

polyfills_cjs._extends = _extends$1;

var define_process_env_default = {};
var isomorphicRslog = browser;
var polyfills = polyfills_cjs;
const FederationModuleManifest = "federation-manifest.json";
const MANIFEST_EXT = ".json";
const BROWSER_LOG_KEY = "FEDERATION_DEBUG";
const BROWSER_LOG_VALUE = "1";
const NameTransformSymbol = {
  AT: "@",
  HYPHEN: "-",
  SLASH: "/"
};
const NameTransformMap = {
  [NameTransformSymbol.AT]: "scope_",
  [NameTransformSymbol.HYPHEN]: "_",
  [NameTransformSymbol.SLASH]: "__"
};
const EncodedNameTransformMap = {
  [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
  [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
  [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ":";
const ManifestFileName = "mf-manifest.json";
const StatsFileName = "mf-stats.json";
const MFModuleType = {
  NPM: "npm",
  APP: "app"
};
const MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__";
const ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX";
const TEMP_DIR = ".federation";
const MFPrefetchCommon = {
  identifier: "MFDataPrefetch",
  globalKey: "__PREFETCH__",
  library: "mf-data-prefetch",
  exportsKey: "__PREFETCH_EXPORTS__",
  fileName: "bootstrap.js"
};
var ContainerPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var ContainerReferencePlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var ModuleFederationPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var SharePlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
function isBrowserEnv() {
  return typeof window !== "undefined";
}
function isBrowserDebug() {
  try {
    if (isBrowserEnv() && window.localStorage) {
      return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
    }
  } catch (error2) {
    return false;
  }
  return false;
}
function isDebugMode() {
  if (typeof process !== "undefined" && define_process_env_default && define_process_env_default["FEDERATION_DEBUG"]) {
    return Boolean(define_process_env_default["FEDERATION_DEBUG"]);
  }
  if (typeof FEDERATION_DEBUG !== "undefined" && Boolean(FEDERATION_DEBUG)) {
    return true;
  }
  return isBrowserDebug();
}
const getProcessEnv = function() {
  return typeof process !== "undefined" && define_process_env_default ? define_process_env_default : {};
};
const PREFIX = "[ Module Federation ]";
function setDebug(loggerInstance) {
  if (isDebugMode()) {
    loggerInstance.level = "verbose";
  }
}
function setPrefix(loggerInstance, prefix) {
  loggerInstance.labels = {
    warn: `${prefix} Warn`,
    error: `${prefix} Error`,
    success: `${prefix} Success`,
    info: `${prefix} Info`,
    ready: `${prefix} Ready`,
    debug: `${prefix} Debug`
  };
}
function createLogger(prefix) {
  const loggerInstance = isomorphicRslog.createLogger({
    labels: {
      warn: `${PREFIX} Warn`,
      error: `${PREFIX} Error`,
      success: `${PREFIX} Success`,
      info: `${PREFIX} Info`,
      ready: `${PREFIX} Ready`,
      debug: `${PREFIX} Debug`
    }
  });
  setDebug(loggerInstance);
  setPrefix(loggerInstance, prefix);
  return loggerInstance;
}
const logger = createLogger(PREFIX);
const LOG_CATEGORY = "[ Federation Runtime ]";
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR) => {
  const strSplit = str.split(separator);
  const devVersionOrUrl = getProcessEnv()["NODE_ENV"] === "development" && devVerOrUrl;
  const defaultVersion = "*";
  const isEntry = (s) => s.startsWith("http") || s.includes(MANIFEST_EXT);
  if (strSplit.length >= 2) {
    let [name, ...versionOrEntryArr] = strSplit;
    if (str.startsWith(separator)) {
      versionOrEntryArr = [
        devVersionOrUrl || strSplit.slice(-1)[0]
      ];
      name = strSplit.slice(0, -1).join(separator);
    }
    let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
    if (isEntry(versionOrEntry)) {
      return {
        name,
        entry: versionOrEntry
      };
    } else {
      return {
        name,
        version: versionOrEntry || defaultVersion
      };
    }
  } else if (strSplit.length === 1) {
    const [name] = strSplit;
    if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
      return {
        name,
        entry: devVersionOrUrl
      };
    }
    return {
      name,
      version: devVersionOrUrl || defaultVersion
    };
  } else {
    throw `Invalid entry value: ${str}`;
  }
};
const composeKeyWithSeparator = function(...args) {
  if (!args.length) {
    return "";
  }
  return args.reduce((sum, cur) => {
    if (!cur) {
      return sum;
    }
    if (!sum) {
      return cur;
    }
    return `${sum}${SEPARATOR}${cur}`;
  }, "");
};
const encodeName = function(name, prefix = "", withExt = false) {
  try {
    const ext = withExt ? ".js" : "";
    return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, "g"), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, "g"), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, "g"), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
  } catch (err) {
    throw err;
  }
};
const decodeName = function(name, prefix, withExt) {
  try {
    let decodedName = name;
    if (prefix) {
      if (!decodedName.startsWith(prefix)) {
        return decodedName;
      }
      decodedName = decodedName.replace(new RegExp(prefix, "g"), "");
    }
    decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
    if (withExt) {
      decodedName = decodedName.replace(".js", "");
    }
    return decodedName;
  } catch (err) {
    throw err;
  }
};
const generateExposeFilename = (exposeName, withExt) => {
  if (!exposeName) {
    return "";
  }
  let expose = exposeName;
  if (expose === ".") {
    expose = "default_export";
  }
  if (expose.startsWith("./")) {
    expose = expose.replace("./", "");
  }
  return encodeName(expose, "__federation_expose_", withExt);
};
const generateShareFilename = (pkgName, withExt) => {
  if (!pkgName) {
    return "";
  }
  return encodeName(pkgName, "__federation_shared_", withExt);
};
const getResourceUrl = (module, sourceUrl) => {
  if ("getPublicPath" in module) {
    let publicPath;
    if (!module.getPublicPath.startsWith("function")) {
      publicPath = new Function(module.getPublicPath)();
    } else {
      publicPath = new Function("return " + module.getPublicPath)()();
    }
    return `${publicPath}${sourceUrl}`;
  } else if ("publicPath" in module) {
    return `${module.publicPath}${sourceUrl}`;
  } else {
    console.warn("Cannot get resource URL. If in debug mode, please ignore.", module, sourceUrl);
    return "";
  }
};
const assert = (condition, msg) => {
  if (!condition) {
    error(msg);
  }
};
const error = (msg) => {
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = (msg) => {
  console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return "";
  }
}
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
  return VERSION_PATTERN_REGEXP.test(str);
}
const simpleJoinRemoteEntry = (rPath, rName) => {
  if (!rPath) {
    return rName;
  }
  const transformPath = (str) => {
    if (str === ".") {
      return "";
    }
    if (str.startsWith("./")) {
      return str.replace("./", "");
    }
    if (str.startsWith("/")) {
      const strWithoutSlash = str.slice(1);
      if (strWithoutSlash.endsWith("/")) {
        return strWithoutSlash.slice(0, -1);
      }
      return strWithoutSlash;
    }
    return str;
  };
  const transformedPath = transformPath(rPath);
  if (!transformedPath) {
    return rName;
  }
  if (transformedPath.endsWith("/")) {
    return `${transformedPath}${rName}`;
  }
  return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url2) {
  return url2.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
}
function generateSnapshotFromManifest(manifest, options = {}) {
  var _manifest_metaData, _manifest_metaData1;
  const { remotes = {}, overrides = {}, version } = options;
  let remoteSnapshot;
  const getPublicPath = () => {
    if ("publicPath" in manifest.metaData) {
      if (manifest.metaData.publicPath === "auto" && version) {
        return inferAutoPublicPath(version);
      }
      return manifest.metaData.publicPath;
    } else {
      return manifest.metaData.getPublicPath;
    }
  };
  const overridesKeys = Object.keys(overrides);
  let remotesInfo = {};
  if (!Object.keys(remotes).length) {
    var _manifest_remotes;
    remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res2, next) => {
      let matchedVersion;
      const name = next.federationContainerName;
      if (overridesKeys.includes(name)) {
        matchedVersion = overrides[name];
      } else {
        if ("version" in next) {
          matchedVersion = next.version;
        } else {
          matchedVersion = next.entry;
        }
      }
      res2[name] = {
        matchedVersion
      };
      return res2;
    }, {})) || {};
  }
  Object.keys(remotes).forEach((key) => remotesInfo[key] = {
    // overrides will override dependencies
    matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
  });
  const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;
  const { exposes } = manifest;
  let basicRemoteSnapshot = {
    version: version ? version : "",
    buildVersion,
    globalName,
    remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
    remoteEntryType,
    remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
    remoteTypesZip: remoteTypes.zip || "",
    remoteTypesAPI: remoteTypes.api || "",
    remotesInfo,
    shared: manifest == null ? void 0 : manifest.shared.map((item) => ({
      assets: item.assets,
      sharedName: item.name,
      version: item.version
    })),
    modules: exposes == null ? void 0 : exposes.map((expose) => ({
      moduleName: expose.name,
      modulePath: expose.path,
      assets: expose.assets
    }))
  };
  if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
    const prefetchInterface = manifest.metaData.prefetchInterface;
    basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      prefetchInterface
    });
  }
  if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
    const { path: path2, name, type } = manifest.metaData.prefetchEntry;
    basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      prefetchEntry: simpleJoinRemoteEntry(path2, name),
      prefetchEntryType: type
    });
  }
  if ("publicPath" in manifest.metaData) {
    remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      publicPath: getPublicPath()
    });
  } else {
    remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      getPublicPath: getPublicPath()
    });
  }
  if (ssrRemoteEntry) {
    const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
    remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
    remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || "commonjs-module";
  }
  return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
  if ("remoteEntry" in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
    return true;
  } else {
    return false;
  }
}
async function safeWrapper(callback, disableWarn) {
  try {
    const res2 = await callback();
    return res2;
  } catch (e) {
    !disableWarn && warn(e);
    return;
  }
}
function isStaticResourcesEqual(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  const relativeUrl1 = url1.replace(REG_EXP, "").replace(/\/$/, "");
  const relativeUrl2 = url2.replace(REG_EXP, "").replace(/\/$/, "");
  return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
  let script2 = null;
  let needAttach = true;
  let timeout = 2e4;
  let timeoutId;
  const scripts = document.getElementsByTagName("script");
  for (let i = 0; i < scripts.length; i++) {
    const s = scripts[i];
    const scriptSrc = s.getAttribute("src");
    if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
      script2 = s;
      needAttach = false;
      break;
    }
  }
  if (!script2) {
    const attrs2 = info.attrs;
    script2 = document.createElement("script");
    script2.type = (attrs2 == null ? void 0 : attrs2["type"]) === "module" ? "module" : "text/javascript";
    let createScriptRes = void 0;
    if (info.createScriptHook) {
      createScriptRes = info.createScriptHook(info.url, info.attrs);
      if (createScriptRes instanceof HTMLScriptElement) {
        script2 = createScriptRes;
      } else if (typeof createScriptRes === "object") {
        if ("script" in createScriptRes && createScriptRes.script) {
          script2 = createScriptRes.script;
        }
        if ("timeout" in createScriptRes && createScriptRes.timeout) {
          timeout = createScriptRes.timeout;
        }
      }
    }
    if (!script2.src) {
      script2.src = info.url;
    }
    if (attrs2 && !createScriptRes) {
      Object.keys(attrs2).forEach((name) => {
        if (script2) {
          if (name === "async" || name === "defer") {
            script2[name] = attrs2[name];
          } else if (!script2.getAttribute(name)) {
            script2.setAttribute(name, attrs2[name]);
          }
        }
      });
    }
  }
  const onScriptComplete = async (prev, event) => {
    clearTimeout(timeoutId);
    const onScriptCompleteCallback = () => {
      if ((event == null ? void 0 : event.type) === "error") {
        (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
      } else {
        (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
      }
    };
    if (script2) {
      script2.onerror = null;
      script2.onload = null;
      safeWrapper(() => {
        const { needDeleteScript = true } = info;
        if (needDeleteScript) {
          (script2 == null ? void 0 : script2.parentNode) && script2.parentNode.removeChild(script2);
        }
      });
      if (prev && typeof prev === "function") {
        const result = prev(event);
        if (result instanceof Promise) {
          const res2 = await result;
          onScriptCompleteCallback();
          return res2;
        }
        onScriptCompleteCallback();
        return result;
      }
    }
    onScriptCompleteCallback();
  };
  script2.onerror = onScriptComplete.bind(null, script2.onerror);
  script2.onload = onScriptComplete.bind(null, script2.onload);
  timeoutId = setTimeout(() => {
    onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
  }, timeout);
  return {
    script: script2,
    needAttach
  };
}
function createLink(info) {
  let link = null;
  let needAttach = true;
  const links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    const l = links[i];
    const linkHref = l.getAttribute("href");
    const linkRef = l.getAttribute("ref");
    if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRef === info.attrs["ref"]) {
      link = l;
      needAttach = false;
      break;
    }
  }
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("href", info.url);
    let createLinkRes = void 0;
    const attrs2 = info.attrs;
    if (info.createLinkHook) {
      createLinkRes = info.createLinkHook(info.url, attrs2);
      if (createLinkRes instanceof HTMLLinkElement) {
        link = createLinkRes;
      }
    }
    if (attrs2 && !createLinkRes) {
      Object.keys(attrs2).forEach((name) => {
        if (link && !link.getAttribute(name)) {
          link.setAttribute(name, attrs2[name]);
        }
      });
    }
  }
  const onLinkComplete = (prev, event) => {
    const onLinkCompleteCallback = () => {
      if ((event == null ? void 0 : event.type) === "error") {
        (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
      } else {
        (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
      }
    };
    if (link) {
      link.onerror = null;
      link.onload = null;
      safeWrapper(() => {
        const { needDeleteLink = true } = info;
        if (needDeleteLink) {
          (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
        }
      });
      if (prev) {
        const res2 = prev(event);
        onLinkCompleteCallback();
        return res2;
      }
    }
    onLinkCompleteCallback();
  };
  link.onerror = onLinkComplete.bind(null, link.onerror);
  link.onload = onLinkComplete.bind(null, link.onload);
  return {
    link,
    needAttach
  };
}
function loadScript(url2, info) {
  const { attrs: attrs2 = {}, createScriptHook } = info;
  return new Promise((resolve, reject) => {
    const { script: script2, needAttach } = createScript({
      url: url2,
      cb: resolve,
      onErrorCallback: reject,
      attrs: polyfills._extends({
        fetchpriority: "high"
      }, attrs2),
      createScriptHook,
      needDeleteScript: true
    });
    needAttach && document.head.appendChild(script2);
  });
}
function importNodeModule(name) {
  if (!name) {
    throw new Error("import specifier is required");
  }
  const importModule = new Function("name", `return import(name)`);
  return importModule(name).then((res2) => res2).catch((error2) => {
    console.error(`Error importing module ${name}:`, error2);
    throw error2;
  });
}
const loadNodeFetch = async () => {
  const fetchModule = await importNodeModule("node-fetch");
  return fetchModule.default || fetchModule;
};
const lazyLoaderHookFetch = async (input, init, loaderHook2) => {
  const hook = (url2, init2) => {
    return loaderHook2.lifecycle.fetch.emit(url2, init2);
  };
  const res2 = await hook(input, init || {});
  if (!res2 || !(res2 instanceof Response)) {
    const fetchFunction = typeof fetch === "undefined" ? await loadNodeFetch() : fetch;
    return fetchFunction(input, init || {});
  }
  return res2;
};
function createScriptNode(url, cb, attrs, loaderHook) {
  if (loaderHook == null ? void 0 : loaderHook.createScriptHook) {
    const hookResult = loaderHook.createScriptHook(url);
    if (hookResult && typeof hookResult === "object" && "url" in hookResult) {
      url = hookResult.url;
    }
  }
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch (e) {
    console.error("Error constructing URL:", e);
    cb(new Error(`Invalid URL: ${e}`));
    return;
  }
  const getFetch = async () => {
    if (loaderHook == null ? void 0 : loaderHook.fetch) {
      return (input, init) => lazyLoaderHookFetch(input, init, loaderHook);
    }
    return typeof fetch === "undefined" ? loadNodeFetch() : fetch;
  };
  const handleScriptFetch = async (f, urlObj) => {
    try {
      var _vm_constants;
      const res = await f(urlObj.href);
      const data = await res.text();
      const [path, vm] = await Promise.all([
        importNodeModule("path"),
        importNodeModule("vm")
      ]);
      const scriptContext = {
        exports: {},
        module: {
          exports: {}
        }
      };
      const urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/");
      const filename = path.basename(urlObj.pathname);
      var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
      const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}
})`, {
        filename,
        importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
      });
      script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
      const exportedInterface = scriptContext.module.exports || scriptContext.exports;
      if (attrs && exportedInterface && attrs["globalName"]) {
        const container = exportedInterface[attrs["globalName"]] || exportedInterface;
        cb(void 0, container);
        return;
      }
      cb(void 0, exportedInterface);
    } catch (e) {
      cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
    }
  };
  getFetch().then(async (f2) => {
    if ((attrs == null ? void 0 : attrs["type"]) === "esm" || (attrs == null ? void 0 : attrs["type"]) === "module") {
      return loadModule(urlObj.href, {
        fetch: f2,
        vm: await importNodeModule("vm")
      }).then(async (module) => {
        await module.evaluate();
        cb(void 0, module.namespace);
      }).catch((e) => {
        cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
      });
    }
    handleScriptFetch(f2, urlObj);
  }).catch((err) => {
    cb(err);
  });
}
function loadScriptNode(url2, info) {
  return new Promise((resolve, reject) => {
    createScriptNode(url2, (error2, scriptContext2) => {
      if (error2) {
        reject(error2);
      } else {
        var _info_attrs, _info_attrs1;
        const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs["globalName"]) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1["name"]}:custom__`;
        const entryExports = globalThis[remoteEntryKey] = scriptContext2;
        resolve(entryExports);
      }
    }, info.attrs, info.loaderHook);
  });
}
async function loadModule(url2, options) {
  const { fetch: fetch1, vm: vm2 } = options;
  const response = await fetch1(url2);
  const code = await response.text();
  const module = new vm2.SourceTextModule(code, {
    // @ts-ignore
    importModuleDynamically: async (specifier, script2) => {
      const resolvedUrl = new URL(specifier, url2).href;
      return loadModule(resolvedUrl, options);
    }
  });
  await module.link(async (specifier) => {
    const resolvedUrl = new URL(specifier, url2).href;
    const module2 = await loadModule(resolvedUrl, options);
    return module2;
  });
  return module;
}
function normalizeOptions(enableDefault, defaultOptions, key) {
  return function(options) {
    if (options === false) {
      return false;
    }
    if (typeof options === "undefined") {
      if (enableDefault) {
        return defaultOptions;
      } else {
        return false;
      }
    }
    if (options === true) {
      return defaultOptions;
    }
    if (options && typeof options === "object") {
      return polyfills._extends({}, defaultOptions, options);
    }
    throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
  };
}
index_cjs$1.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
index_cjs$1.BROWSER_LOG_VALUE = BROWSER_LOG_VALUE;
index_cjs$1.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
index_cjs$1.EncodedNameTransformMap = EncodedNameTransformMap;
index_cjs$1.FederationModuleManifest = FederationModuleManifest;
index_cjs$1.MANIFEST_EXT = MANIFEST_EXT;
index_cjs$1.MFModuleType = MFModuleType;
index_cjs$1.MFPrefetchCommon = MFPrefetchCommon;
index_cjs$1.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
index_cjs$1.ManifestFileName = ManifestFileName;
index_cjs$1.NameTransformMap = NameTransformMap;
index_cjs$1.NameTransformSymbol = NameTransformSymbol;
index_cjs$1.SEPARATOR = SEPARATOR;
index_cjs$1.StatsFileName = StatsFileName;
index_cjs$1.TEMP_DIR = TEMP_DIR;
index_cjs$1.assert = assert;
index_cjs$1.composeKeyWithSeparator = composeKeyWithSeparator;
index_cjs$1.containerPlugin = ContainerPlugin;
index_cjs$1.containerReferencePlugin = ContainerReferencePlugin;
index_cjs$1.createLink = createLink;
index_cjs$1.createLogger = createLogger;
index_cjs$1.createScript = createScript;
index_cjs$1.createScriptNode = createScriptNode;
index_cjs$1.decodeName = decodeName;
index_cjs$1.encodeName = encodeName;
index_cjs$1.error = error;
index_cjs$1.generateExposeFilename = generateExposeFilename;
index_cjs$1.generateShareFilename = generateShareFilename;
index_cjs$1.generateSnapshotFromManifest = generateSnapshotFromManifest;
index_cjs$1.getProcessEnv = getProcessEnv;
index_cjs$1.getResourceUrl = getResourceUrl;
index_cjs$1.inferAutoPublicPath = inferAutoPublicPath;
index_cjs$1.isBrowserEnv = isBrowserEnv;
index_cjs$1.isDebugMode = isDebugMode;
index_cjs$1.isManifestProvider = isManifestProvider;
index_cjs$1.isRequiredVersion = isRequiredVersion;
index_cjs$1.isStaticResourcesEqual = isStaticResourcesEqual;
index_cjs$1.loadScript = loadScript;
index_cjs$1.loadScriptNode = loadScriptNode;
index_cjs$1.logger = logger;
index_cjs$1.moduleFederationPlugin = ModuleFederationPlugin;
index_cjs$1.normalizeOptions = normalizeOptions;
index_cjs$1.parseEntry = parseEntry;
index_cjs$1.safeToString = safeToString;
index_cjs$1.safeWrapper = safeWrapper;
index_cjs$1.sharePlugin = SharePlugin;
index_cjs$1.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
index_cjs$1.warn = warn;

var index_cjs = {};

const RUNTIME_001 = 'RUNTIME-001';
const RUNTIME_002 = 'RUNTIME-002';
const RUNTIME_003 = 'RUNTIME-003';
const RUNTIME_004 = 'RUNTIME-004';
const RUNTIME_005 = 'RUNTIME-005';
const RUNTIME_006 = 'RUNTIME-006';
const RUNTIME_007 = 'RUNTIME-007';
const RUNTIME_008 = 'RUNTIME-008';
const TYPE_001 = 'TYPE-001';
const BUILD_001 = 'BUILD-001';

const getDocsUrl = (errorCode)=>{
    const type = errorCode.split('-')[0].toLowerCase();
    return `https://module-federation.io/guide/troubleshooting/${type}/${errorCode}`;
};
const getShortErrorMsg = (errorCode, errorDescMap, args, originalErrorMsg)=>{
    const msg = [
        `${[
            errorDescMap[errorCode]
        ]} #${errorCode}`
    ];
    args && msg.push(`args: ${JSON.stringify(args)}`);
    msg.push(getDocsUrl(errorCode));
    originalErrorMsg && msg.push(`Original Error Message:\n ${originalErrorMsg}`);
    return msg.join('\n');
};

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

const runtimeDescMap = {
    [RUNTIME_001]: 'Failed to get remoteEntry exports.',
    [RUNTIME_002]: 'The remote entry interface does not contain "init"',
    [RUNTIME_003]: 'Failed to get manifest.',
    [RUNTIME_004]: 'Failed to locate remote.',
    [RUNTIME_005]: 'Invalid loadShareSync function call from bundler runtime',
    [RUNTIME_006]: 'Invalid loadShareSync function call from runtime',
    [RUNTIME_007]: 'Failed to get remote snapshot.',
    [RUNTIME_008]: 'Failed to load script resources.'
};
const typeDescMap = {
    [TYPE_001]: 'Failed to generate type declaration.'
};
const buildDescMap = {
    [BUILD_001]: 'Failed to find expose module.'
};
const errorDescMap = _extends({}, runtimeDescMap, typeDescMap, buildDescMap);

index_cjs.BUILD_001 = BUILD_001;
index_cjs.RUNTIME_001 = RUNTIME_001;
index_cjs.RUNTIME_002 = RUNTIME_002;
index_cjs.RUNTIME_003 = RUNTIME_003;
index_cjs.RUNTIME_004 = RUNTIME_004;
index_cjs.RUNTIME_005 = RUNTIME_005;
index_cjs.RUNTIME_006 = RUNTIME_006;
index_cjs.RUNTIME_007 = RUNTIME_007;
index_cjs.RUNTIME_008 = RUNTIME_008;
index_cjs.TYPE_001 = TYPE_001;
index_cjs.buildDescMap = buildDescMap;
index_cjs.errorDescMap = errorDescMap;
index_cjs.getShortErrorMsg = getShortErrorMsg;
index_cjs.runtimeDescMap = runtimeDescMap;
index_cjs.typeDescMap = typeDescMap;

(function (exports) {

	var polyfills = polyfills_cjs$1;
	var sdk = index_cjs$1;
	var errorCodes = index_cjs;

	const LOG_CATEGORY = '[ Federation Runtime ]';
	// FIXME: pre-bundle ?
	const logger = sdk.createLogger(LOG_CATEGORY);
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	function assert(condition, msg) {
	    if (!condition) {
	        error(msg);
	    }
	}
	function error(msg) {
	    if (msg instanceof Error) {
	        msg.message = `${LOG_CATEGORY}: ${msg.message}`;
	        throw msg;
	    }
	    throw new Error(`${LOG_CATEGORY}: ${msg}`);
	}
	function warn(msg) {
	    if (msg instanceof Error) {
	        msg.message = `${LOG_CATEGORY}: ${msg.message}`;
	        logger.warn(msg);
	    } else {
	        logger.warn(msg);
	    }
	}

	function addUniqueItem(arr, item) {
	    if (arr.findIndex((name)=>name === item) === -1) {
	        arr.push(item);
	    }
	    return arr;
	}
	function getFMId(remoteInfo) {
	    if ('version' in remoteInfo && remoteInfo.version) {
	        return `${remoteInfo.name}:${remoteInfo.version}`;
	    } else if ('entry' in remoteInfo && remoteInfo.entry) {
	        return `${remoteInfo.name}:${remoteInfo.entry}`;
	    } else {
	        return `${remoteInfo.name}`;
	    }
	}
	function isRemoteInfoWithEntry(remote) {
	    return typeof remote.entry !== 'undefined';
	}
	function isPureRemoteEntry(remote) {
	    return !remote.entry.includes('.json') && remote.entry.includes('.js');
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async function safeWrapper(callback, disableWarn) {
	    try {
	        const res = await callback();
	        return res;
	    } catch (e) {
	        !disableWarn && warn(e);
	        return;
	    }
	}
	function isObject(val) {
	    return val && typeof val === 'object';
	}
	const objectToString = Object.prototype.toString;
	// eslint-disable-next-line @typescript-eslint/ban-types
	function isPlainObject(val) {
	    return objectToString.call(val) === '[object Object]';
	}
	function isStaticResourcesEqual(url1, url2) {
	    const REG_EXP = /^(https?:)?\/\//i;
	    // Transform url1 and url2 into relative paths
	    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
	    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
	    // Check if the relative paths are identical
	    return relativeUrl1 === relativeUrl2;
	}
	function arrayOptions(options) {
	    return Array.isArray(options) ? options : [
	        options
	    ];
	}
	function getRemoteEntryInfoFromSnapshot(snapshot) {
	    const defaultRemoteEntryInfo = {
	        url: '',
	        type: 'global',
	        globalName: ''
	    };
	    if (sdk.isBrowserEnv()) {
	        return 'remoteEntry' in snapshot ? {
	            url: snapshot.remoteEntry,
	            type: snapshot.remoteEntryType,
	            globalName: snapshot.globalName
	        } : defaultRemoteEntryInfo;
	    }
	    if ('ssrRemoteEntry' in snapshot) {
	        return {
	            url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
	            type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
	            globalName: snapshot.globalName
	        };
	    }
	    return defaultRemoteEntryInfo;
	}
	const processModuleAlias = (name, subPath)=>{
	    // @host/ ./button -> @host/button
	    let moduleName;
	    if (name.endsWith('/')) {
	        moduleName = name.slice(0, -1);
	    } else {
	        moduleName = name;
	    }
	    if (subPath.startsWith('.')) {
	        subPath = subPath.slice(1);
	    }
	    moduleName = moduleName + subPath;
	    return moduleName;
	};

	const CurrentGlobal = typeof globalThis === 'object' ? globalThis : window;
	const nativeGlobal = (()=>{
	    try {
	        // get real window (incase of sandbox)
	        return document.defaultView;
	    } catch (e) {
	        // node env
	        return CurrentGlobal;
	    }
	})();
	const Global = nativeGlobal;
	function definePropertyGlobalVal(target, key, val) {
	    Object.defineProperty(target, key, {
	        value: val,
	        configurable: false,
	        writable: true
	    });
	}
	function includeOwnProperty(target, key) {
	    return Object.hasOwnProperty.call(target, key);
	}
	// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
	// The sandbox in the microfrontend does not replicate the value of 'configurable'.
	// If there is no loading content on the global object, this section defines the loading object.
	if (!includeOwnProperty(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
	    definePropertyGlobalVal(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
	}
	const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
	function setGlobalDefaultVal(target) {
	    var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
	    if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
	        definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
	    }
	    if (!includeOwnProperty(target, '__FEDERATION__')) {
	        definePropertyGlobalVal(target, '__FEDERATION__', {
	            __GLOBAL_PLUGIN__: [],
	            __INSTANCES__: [],
	            moduleInfo: {},
	            __SHARE__: {},
	            __MANIFEST_LOADING__: {},
	            __PRELOADED_MAP__: new Map()
	        });
	        definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
	    }
	    var ___GLOBAL_PLUGIN__;
	    (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
	    var ___INSTANCES__;
	    (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
	    var _moduleInfo;
	    (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
	    var ___SHARE__;
	    (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
	    var ___MANIFEST_LOADING__;
	    (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
	    var ___PRELOADED_MAP__;
	    (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();
	}
	setGlobalDefaultVal(CurrentGlobal);
	setGlobalDefaultVal(nativeGlobal);
	function resetFederationGlobalInfo() {
	    CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
	    CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
	    CurrentGlobal.__FEDERATION__.moduleInfo = {};
	    CurrentGlobal.__FEDERATION__.__SHARE__ = {};
	    CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
	    Object.keys(globalLoading).forEach((key)=>{
	        delete globalLoading[key];
	    });
	}
	function setGlobalFederationInstance(FederationInstance) {
	    CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance);
	}
	function getGlobalFederationConstructor() {
	    return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
	}
	function setGlobalFederationConstructor(FederationConstructor, isDebug = sdk.isDebugMode()) {
	    if (isDebug) {
	        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
	        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.6.20";
	    }
	}
	// eslint-disable-next-line @typescript-eslint/ban-types
	function getInfoWithoutType(target, key) {
	    if (typeof key === 'string') {
	        const keyRes = target[key];
	        if (keyRes) {
	            return {
	                value: target[key],
	                key: key
	            };
	        } else {
	            const targetKeys = Object.keys(target);
	            for (const targetKey of targetKeys){
	                const [targetTypeOrName, _] = targetKey.split(':');
	                const nKey = `${targetTypeOrName}:${key}`;
	                const typeWithKeyRes = target[nKey];
	                if (typeWithKeyRes) {
	                    return {
	                        value: typeWithKeyRes,
	                        key: nKey
	                    };
	                }
	            }
	            return {
	                value: undefined,
	                key: key
	            };
	        }
	    } else {
	        throw new Error('key must be string');
	    }
	}
	const getGlobalSnapshot = ()=>nativeGlobal.__FEDERATION__.moduleInfo;
	const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot)=>{
	    // Check if the remote is included in the hostSnapshot
	    const moduleKey = getFMId(moduleInfo);
	    const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
	    // The remoteSnapshot might not include a version
	    if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
	        getModuleInfo.version = moduleInfo['version'];
	    }
	    if (getModuleInfo) {
	        return getModuleInfo;
	    }
	    // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
	    if ('version' in moduleInfo && moduleInfo['version']) {
	        const { version } = moduleInfo, resModuleInfo = polyfills._object_without_properties_loose(moduleInfo, [
	            "version"
	        ]);
	        const moduleKeyWithoutVersion = getFMId(resModuleInfo);
	        const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
	        if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
	            return getModuleInfoWithoutVersion;
	        }
	    }
	    return;
	};
	const getGlobalSnapshotInfoByModuleInfo = (moduleInfo)=>getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
	const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo)=>{
	    const moduleKey = getFMId(remoteInfo);
	    nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
	    return nativeGlobal.__FEDERATION__.moduleInfo;
	};
	const addGlobalSnapshot = (moduleInfos)=>{
	    nativeGlobal.__FEDERATION__.moduleInfo = polyfills._extends({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
	    return ()=>{
	        const keys = Object.keys(moduleInfos);
	        for (const key of keys){
	            delete nativeGlobal.__FEDERATION__.moduleInfo[key];
	        }
	    };
	};
	const getRemoteEntryExports = (name, globalName)=>{
	    const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
	    const entryExports = CurrentGlobal[remoteEntryKey];
	    return {
	        remoteEntryKey,
	        entryExports
	    };
	};
	// This function is used to register global plugins.
	// It iterates over the provided plugins and checks if they are already registered.
	// If a plugin is not registered, it is added to the global plugins.
	// If a plugin is already registered, a warning message is logged.
	const registerGlobalPlugins = (plugins)=>{
	    const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;
	    plugins.forEach((plugin)=>{
	        if (__GLOBAL_PLUGIN__.findIndex((p)=>p.name === plugin.name) === -1) {
	            __GLOBAL_PLUGIN__.push(plugin);
	        } else {
	            warn(`The plugin ${plugin.name} has been registered.`);
	        }
	    });
	};
	const getGlobalHostPlugins = ()=>nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
	const getPreloaded = (id)=>CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
	const setPreloaded = (id)=>CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);

	const DEFAULT_SCOPE = 'default';
	const DEFAULT_REMOTE_TYPE = 'global';

	// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
	// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
	// Copyright (c)
	// vite-plugin-federation is licensed under Mulan PSL v2.
	// You can use this software according to the terms and conditions of the Mulan PSL v2.
	// You may obtain a copy of Mulan PSL v2 at:
	//      http://license.coscl.org.cn/MulanPSL2
	// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
	// See the Mulan PSL v2 for more details.
	const buildIdentifier = '[0-9A-Za-z-]+';
	const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
	const numericIdentifier = '0|[1-9]\\d*';
	const numericIdentifierLoose = '[0-9]+';
	const nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
	const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
	const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
	const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
	const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
	const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
	const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
	const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
	const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
	const gtlt = '((?:<|>)?=?)';
	const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
	const loneTilde = '(?:~>?)';
	const tildeTrim = `(\\s*)${loneTilde}\\s+`;
	const loneCaret = '(?:\\^)';
	const caretTrim = `(\\s*)${loneCaret}\\s+`;
	const star = '(<|>)?=?\\s*\\*';
	const caret = `^${loneCaret}${xRangePlain}$`;
	const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
	const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
	const tilde = `^${loneTilde}${xRangePlain}$`;
	const xRange = `^${gtlt}\\s*${xRangePlain}$`;
	const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
	// copy from semver package
	const gte0 = '^\\s*>=\\s*0.0.0\\s*$';

	// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
	// Copyright (c)
	// vite-plugin-federation is licensed under Mulan PSL v2.
	// You can use this software according to the terms and conditions of the Mulan PSL v2.
	// You may obtain a copy of Mulan PSL v2 at:
	//      http://license.coscl.org.cn/MulanPSL2
	// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
	// See the Mulan PSL v2 for more details.
	function parseRegex(source) {
	    return new RegExp(source);
	}
	function isXVersion(version) {
	    return !version || version.toLowerCase() === 'x' || version === '*';
	}
	function pipe(...fns) {
	    return (x)=>fns.reduce((v, f)=>f(v), x);
	}
	function extractComparator(comparatorString) {
	    return comparatorString.match(parseRegex(comparator));
	}
	function combineVersion(major, minor, patch, preRelease) {
	    const mainVersion = `${major}.${minor}.${patch}`;
	    if (preRelease) {
	        return `${mainVersion}-${preRelease}`;
	    }
	    return mainVersion;
	}

	// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
	// Copyright (c)
	// vite-plugin-federation is licensed under Mulan PSL v2.
	// You can use this software according to the terms and conditions of the Mulan PSL v2.
	// You may obtain a copy of Mulan PSL v2 at:
	//      http://license.coscl.org.cn/MulanPSL2
	// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
	// See the Mulan PSL v2 for more details.
	function parseHyphen(range) {
	    return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease)=>{
	        if (isXVersion(fromMajor)) {
	            from = '';
	        } else if (isXVersion(fromMinor)) {
	            from = `>=${fromMajor}.0.0`;
	        } else if (isXVersion(fromPatch)) {
	            from = `>=${fromMajor}.${fromMinor}.0`;
	        } else {
	            from = `>=${from}`;
	        }
	        if (isXVersion(toMajor)) {
	            to = '';
	        } else if (isXVersion(toMinor)) {
	            to = `<${Number(toMajor) + 1}.0.0-0`;
	        } else if (isXVersion(toPatch)) {
	            to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
	        } else if (toPreRelease) {
	            to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
	        } else {
	            to = `<=${to}`;
	        }
	        return `${from} ${to}`.trim();
	    });
	}
	function parseComparatorTrim(range) {
	    return range.replace(parseRegex(comparatorTrim), '$1$2$3');
	}
	function parseTildeTrim(range) {
	    return range.replace(parseRegex(tildeTrim), '$1~');
	}
	function parseCaretTrim(range) {
	    return range.replace(parseRegex(caretTrim), '$1^');
	}
	function parseCarets(range) {
	    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease)=>{
	            if (isXVersion(major)) {
	                return '';
	            } else if (isXVersion(minor)) {
	                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
	            } else if (isXVersion(patch)) {
	                if (major === '0') {
	                    return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
	                } else {
	                    return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
	                }
	            } else if (preRelease) {
	                if (major === '0') {
	                    if (minor === '0') {
	                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
	                    } else {
	                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
	                    }
	                } else {
	                    return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
	                }
	            } else {
	                if (major === '0') {
	                    if (minor === '0') {
	                        return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
	                    } else {
	                        return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
	                    }
	                }
	                return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
	            }
	        })).join(' ');
	}
	function parseTildes(range) {
	    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease)=>{
	            if (isXVersion(major)) {
	                return '';
	            } else if (isXVersion(minor)) {
	                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
	            } else if (isXVersion(patch)) {
	                return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
	            } else if (preRelease) {
	                return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
	            }
	            return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
	        })).join(' ');
	}
	function parseXRanges(range) {
	    return range.split(/\s+/).map((rangeVersion)=>rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease)=>{
	            const isXMajor = isXVersion(major);
	            const isXMinor = isXMajor || isXVersion(minor);
	            const isXPatch = isXMinor || isXVersion(patch);
	            if (gtlt === '=' && isXPatch) {
	                gtlt = '';
	            }
	            preRelease = '';
	            if (isXMajor) {
	                if (gtlt === '>' || gtlt === '<') {
	                    // nothing is allowed
	                    return '<0.0.0-0';
	                } else {
	                    // nothing is forbidden
	                    return '*';
	                }
	            } else if (gtlt && isXPatch) {
	                // replace X with 0
	                if (isXMinor) {
	                    minor = 0;
	                }
	                patch = 0;
	                if (gtlt === '>') {
	                    // >1 => >=2.0.0
	                    // >1.2 => >=1.3.0
	                    gtlt = '>=';
	                    if (isXMinor) {
	                        major = Number(major) + 1;
	                        minor = 0;
	                        patch = 0;
	                    } else {
	                        minor = Number(minor) + 1;
	                        patch = 0;
	                    }
	                } else if (gtlt === '<=') {
	                    // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
	                    // Similarly, <=7.x is actually <8.0.0, etc.
	                    gtlt = '<';
	                    if (isXMinor) {
	                        major = Number(major) + 1;
	                    } else {
	                        minor = Number(minor) + 1;
	                    }
	                }
	                if (gtlt === '<') {
	                    preRelease = '-0';
	                }
	                return `${gtlt + major}.${minor}.${patch}${preRelease}`;
	            } else if (isXMinor) {
	                return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
	            } else if (isXPatch) {
	                return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
	            }
	            return ret;
	        })).join(' ');
	}
	function parseStar(range) {
	    return range.trim().replace(parseRegex(star), '');
	}
	function parseGTE0(comparatorString) {
	    return comparatorString.trim().replace(parseRegex(gte0), '');
	}

	// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
	// Copyright (c)
	// vite-plugin-federation is licensed under Mulan PSL v2.
	// You can use this software according to the terms and conditions of the Mulan PSL v2.
	// You may obtain a copy of Mulan PSL v2 at:
	//      http://license.coscl.org.cn/MulanPSL2
	// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
	// See the Mulan PSL v2 for more details.
	function compareAtom(rangeAtom, versionAtom) {
	    rangeAtom = Number(rangeAtom) || rangeAtom;
	    versionAtom = Number(versionAtom) || versionAtom;
	    if (rangeAtom > versionAtom) {
	        return 1;
	    }
	    if (rangeAtom === versionAtom) {
	        return 0;
	    }
	    return -1;
	}
	function comparePreRelease(rangeAtom, versionAtom) {
	    const { preRelease: rangePreRelease } = rangeAtom;
	    const { preRelease: versionPreRelease } = versionAtom;
	    if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
	        return 1;
	    }
	    if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
	        return -1;
	    }
	    if (rangePreRelease === undefined && versionPreRelease === undefined) {
	        return 0;
	    }
	    for(let i = 0, n = rangePreRelease.length; i <= n; i++){
	        const rangeElement = rangePreRelease[i];
	        const versionElement = versionPreRelease[i];
	        if (rangeElement === versionElement) {
	            continue;
	        }
	        if (rangeElement === undefined && versionElement === undefined) {
	            return 0;
	        }
	        if (!rangeElement) {
	            return 1;
	        }
	        if (!versionElement) {
	            return -1;
	        }
	        return compareAtom(rangeElement, versionElement);
	    }
	    return 0;
	}
	function compareVersion(rangeAtom, versionAtom) {
	    return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
	}
	function eq(rangeAtom, versionAtom) {
	    return rangeAtom.version === versionAtom.version;
	}
	function compare(rangeAtom, versionAtom) {
	    switch(rangeAtom.operator){
	        case '':
	        case '=':
	            return eq(rangeAtom, versionAtom);
	        case '>':
	            return compareVersion(rangeAtom, versionAtom) < 0;
	        case '>=':
	            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
	        case '<':
	            return compareVersion(rangeAtom, versionAtom) > 0;
	        case '<=':
	            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
	        case undefined:
	            {
	                // mean * or x -> all versions
	                return true;
	            }
	        default:
	            return false;
	    }
	}

	// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
	// Copyright (c)
	// vite-plugin-federation is licensed under Mulan PSL v2.
	// You can use this software according to the terms and conditions of the Mulan PSL v2.
	// You may obtain a copy of Mulan PSL v2 at:
	//      http://license.coscl.org.cn/MulanPSL2
	// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
	// See the Mulan PSL v2 for more details.
	function parseComparatorString(range) {
	    return pipe(// handle caret
	    // ^ --> * (any, kinda silly)
	    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
	    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
	    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
	    // ^1.2.3 --> >=1.2.3 <2.0.0-0
	    // ^1.2.0 --> >=1.2.0 <2.0.0-0
	    parseCarets, // handle tilde
	    // ~, ~> --> * (any, kinda silly)
	    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
	    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
	    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
	    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
	    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
	    parseTildes, parseXRanges, parseStar)(range);
	}
	function parseRange(range) {
	    return pipe(// handle hyphenRange
	    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	    parseHyphen, // handle trim comparator
	    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	    parseComparatorTrim, // handle trim tilde
	    // `~ 1.2.3` => `~1.2.3`
	    parseTildeTrim, // handle trim caret
	    // `^ 1.2.3` => `^1.2.3`
	    parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
	}
	function satisfy(version, range) {
	    if (!version) {
	        return false;
	    }
	    const parsedRange = parseRange(range);
	    const parsedComparator = parsedRange.split(' ').map((rangeVersion)=>parseComparatorString(rangeVersion)).join(' ');
	    const comparators = parsedComparator.split(/\s+/).map((comparator)=>parseGTE0(comparator));
	    const extractedVersion = extractComparator(version);
	    if (!extractedVersion) {
	        return false;
	    }
	    const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
	    const versionAtom = {
	        version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
	        major: versionMajor,
	        minor: versionMinor,
	        patch: versionPatch,
	        preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')
	    };
	    for (const comparator of comparators){
	        const extractedComparator = extractComparator(comparator);
	        if (!extractedComparator) {
	            return false;
	        }
	        const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
	        const rangeAtom = {
	            operator: rangeOperator,
	            version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
	            major: rangeMajor,
	            minor: rangeMinor,
	            patch: rangePatch,
	            preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')
	        };
	        if (!compare(rangeAtom, versionAtom)) {
	            return false; // early return
	        }
	    }
	    return true;
	}

	function formatShare(shareArgs, from, name, shareStrategy) {
	    let get;
	    if ('get' in shareArgs) {
	        // eslint-disable-next-line prefer-destructuring
	        get = shareArgs.get;
	    } else if ('lib' in shareArgs) {
	        get = ()=>Promise.resolve(shareArgs.lib);
	    } else {
	        get = ()=>Promise.resolve(()=>{
	                throw new Error(`Can not get shared '${name}'!`);
	            });
	    }
	    if (shareArgs.strategy) {
	        warn(`"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"`);
	    }
	    var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
	    return polyfills._extends({
	        deps: [],
	        useIn: [],
	        from,
	        loading: null
	    }, shareArgs, {
	        shareConfig: polyfills._extends({
	            requiredVersion: `^${shareArgs.version}`,
	            singleton: false,
	            eager: false,
	            strictVersion: false
	        }, shareArgs.shareConfig),
	        get,
	        loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,
	        version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',
	        scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
	            (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'
	        ],
	        strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'
	    });
	}
	function formatShareConfigs(globalOptions, userOptions) {
	    const shareArgs = userOptions.shared || {};
	    const from = userOptions.name;
	    const shareInfos = Object.keys(shareArgs).reduce((res, pkgName)=>{
	        const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
	        res[pkgName] = res[pkgName] || [];
	        arrayShareArgs.forEach((shareConfig)=>{
	            res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
	        });
	        return res;
	    }, {});
	    const shared = polyfills._extends({}, globalOptions.shared);
	    Object.keys(shareInfos).forEach((shareKey)=>{
	        if (!shared[shareKey]) {
	            shared[shareKey] = shareInfos[shareKey];
	        } else {
	            shareInfos[shareKey].forEach((newUserSharedOptions)=>{
	                const isSameVersion = shared[shareKey].find((sharedVal)=>sharedVal.version === newUserSharedOptions.version);
	                if (!isSameVersion) {
	                    shared[shareKey].push(newUserSharedOptions);
	                }
	            });
	        }
	    });
	    return {
	        shared,
	        shareInfos
	    };
	}
	function versionLt(a, b) {
	    const transformInvalidVersion = (version)=>{
	        const isNumberVersion = !Number.isNaN(Number(version));
	        if (isNumberVersion) {
	            const splitArr = version.split('.');
	            let validVersion = version;
	            for(let i = 0; i < 3 - splitArr.length; i++){
	                validVersion += '.0';
	            }
	            return validVersion;
	        }
	        return version;
	    };
	    if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
	        return true;
	    } else {
	        return false;
	    }
	}
	const findVersion = (shareVersionMap, cb)=>{
	    const callback = cb || function(prev, cur) {
	        return versionLt(prev, cur);
	    };
	    return Object.keys(shareVersionMap).reduce((prev, cur)=>{
	        if (!prev) {
	            return cur;
	        }
	        if (callback(prev, cur)) {
	            return cur;
	        }
	        // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
	        if (prev === '0') {
	            return cur;
	        }
	        return prev;
	    }, 0);
	};
	const isLoaded = (shared)=>{
	    return Boolean(shared.loaded) || typeof shared.lib === 'function';
	};
	const isLoading = (shared)=>{
	    return Boolean(shared.loading);
	};
	function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
	    const versions = shareScopeMap[scope][pkgName];
	    const callback = function(prev, cur) {
	        return !isLoaded(versions[prev]) && versionLt(prev, cur);
	    };
	    return findVersion(shareScopeMap[scope][pkgName], callback);
	}
	function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
	    const versions = shareScopeMap[scope][pkgName];
	    const callback = function(prev, cur) {
	        const isLoadingOrLoaded = (shared)=>{
	            return isLoaded(shared) || isLoading(shared);
	        };
	        if (isLoadingOrLoaded(versions[cur])) {
	            if (isLoadingOrLoaded(versions[prev])) {
	                return Boolean(versionLt(prev, cur));
	            } else {
	                return true;
	            }
	        }
	        if (isLoadingOrLoaded(versions[prev])) {
	            return false;
	        }
	        return versionLt(prev, cur);
	    };
	    return findVersion(shareScopeMap[scope][pkgName], callback);
	}
	function getFindShareFunction(strategy) {
	    if (strategy === 'loaded-first') {
	        return findSingletonVersionOrderByLoaded;
	    }
	    return findSingletonVersionOrderByVersion;
	}
	function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
	    if (!localShareScopeMap) {
	        return;
	    }
	    const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;
	    const scopes = Array.isArray(scope) ? scope : [
	        scope
	    ];
	    for (const sc of scopes){
	        if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
	            const { requiredVersion } = shareConfig;
	            const findShareFunction = getFindShareFunction(strategy);
	            const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
	            //@ts-ignore
	            const defaultResolver = ()=>{
	                if (shareConfig.singleton) {
	                    if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
	                        const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
	                        if (shareConfig.strictVersion) {
	                            error(msg);
	                        } else {
	                            warn(msg);
	                        }
	                    }
	                    return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
	                } else {
	                    if (requiredVersion === false || requiredVersion === '*') {
	                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
	                    }
	                    if (satisfy(maxOrSingletonVersion, requiredVersion)) {
	                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
	                    }
	                    for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])){
	                        if (satisfy(versionKey, requiredVersion)) {
	                            return versionValue;
	                        }
	                    }
	                }
	            };
	            const params = {
	                shareScopeMap: localShareScopeMap,
	                scope: sc,
	                pkgName,
	                version: maxOrSingletonVersion,
	                GlobalFederation: Global.__FEDERATION__,
	                resolver: defaultResolver
	            };
	            const resolveShared = resolveShare.emit(params) || params;
	            return resolveShared.resolver();
	        }
	    }
	}
	function getGlobalShareScope() {
	    return Global.__FEDERATION__.__SHARE__;
	}
	function getTargetSharedOptions(options) {
	    const { pkgName, extraOptions, shareInfos } = options;
	    const defaultResolver = (sharedOptions)=>{
	        if (!sharedOptions) {
	            return undefined;
	        }
	        const shareVersionMap = {};
	        sharedOptions.forEach((shared)=>{
	            shareVersionMap[shared.version] = shared;
	        });
	        const callback = function(prev, cur) {
	            return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
	        };
	        const maxVersion = findVersion(shareVersionMap, callback);
	        return shareVersionMap[maxVersion];
	    };
	    var _extraOptions_resolver;
	    const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
	    return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
	}

	const ShareUtils = {
	    getRegisteredShare,
	    getGlobalShareScope
	};
	const GlobalUtils = {
	    Global,
	    nativeGlobal,
	    resetFederationGlobalInfo,
	    setGlobalFederationInstance,
	    getGlobalFederationConstructor,
	    setGlobalFederationConstructor,
	    getInfoWithoutType,
	    getGlobalSnapshot,
	    getTargetSnapshotInfoByModuleInfo,
	    getGlobalSnapshotInfoByModuleInfo,
	    setGlobalSnapshotInfoByModuleInfo,
	    addGlobalSnapshot,
	    getRemoteEntryExports,
	    registerGlobalPlugins,
	    getGlobalHostPlugins,
	    getPreloaded,
	    setPreloaded
	};
	var helpers = {
	    global: GlobalUtils,
	    share: ShareUtils
	};

	function getBuilderId() {
	    //@ts-ignore
	    return typeof FEDERATION_BUILD_IDENTIFIER !== 'undefined' ? FEDERATION_BUILD_IDENTIFIER : '';
	}

	// Function to match a remote with its name and expose
	// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
	// id: alias(app1) + expose(button) = app1/button
	// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
	function matchRemoteWithNameAndExpose(remotes, id) {
	    for (const remote of remotes){
	        // match pkgName
	        const isNameMatched = id.startsWith(remote.name);
	        let expose = id.replace(remote.name, '');
	        if (isNameMatched) {
	            if (expose.startsWith('/')) {
	                const pkgNameOrAlias = remote.name;
	                expose = `.${expose}`;
	                return {
	                    pkgNameOrAlias,
	                    expose,
	                    remote
	                };
	            } else if (expose === '') {
	                return {
	                    pkgNameOrAlias: remote.name,
	                    expose: '.',
	                    remote
	                };
	            }
	        }
	        // match alias
	        const isAliasMatched = remote.alias && id.startsWith(remote.alias);
	        let exposeWithAlias = remote.alias && id.replace(remote.alias, '');
	        if (remote.alias && isAliasMatched) {
	            if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
	                const pkgNameOrAlias = remote.alias;
	                exposeWithAlias = `.${exposeWithAlias}`;
	                return {
	                    pkgNameOrAlias,
	                    expose: exposeWithAlias,
	                    remote
	                };
	            } else if (exposeWithAlias === '') {
	                return {
	                    pkgNameOrAlias: remote.alias,
	                    expose: '.',
	                    remote
	                };
	            }
	        }
	    }
	    return;
	}
	// Function to match a remote with its name or alias
	function matchRemote(remotes, nameOrAlias) {
	    for (const remote of remotes){
	        const isNameMatched = nameOrAlias === remote.name;
	        if (isNameMatched) {
	            return remote;
	        }
	        const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
	        if (isAliasMatched) {
	            return remote;
	        }
	    }
	    return;
	}

	function registerPlugins(plugins, hookInstances) {
	    const globalPlugins = getGlobalHostPlugins();
	    // Incorporate global plugins
	    if (globalPlugins.length > 0) {
	        globalPlugins.forEach((plugin)=>{
	            if (plugins == null ? void 0 : plugins.find((item)=>item.name !== plugin.name)) {
	                plugins.push(plugin);
	            }
	        });
	    }
	    if (plugins && plugins.length > 0) {
	        plugins.forEach((plugin)=>{
	            hookInstances.forEach((hookInstance)=>{
	                hookInstance.applyPlugin(plugin);
	            });
	        });
	    }
	    return plugins;
	}

	async function loadEsmEntry({ entry, remoteEntryExports }) {
	    return new Promise((resolve, reject)=>{
	        try {
	            if (!remoteEntryExports) {
	                if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== 'undefined') {
	                    new Function('callbacks', `import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
	                        resolve,
	                        reject
	                    ]);
	                } else {
	                    import(/* webpackIgnore: true */ /* @vite-ignore */ entry).then(resolve).catch(reject);
	                }
	            } else {
	                resolve(remoteEntryExports);
	            }
	        } catch (e) {
	            reject(e);
	        }
	    });
	}
	async function loadSystemJsEntry({ entry, remoteEntryExports }) {
	    return new Promise((resolve, reject)=>{
	        try {
	            if (!remoteEntryExports) {
	                //@ts-ignore
	                if (typeof __system_context__ === 'undefined') {
	                    //@ts-ignore
	                    System.import(entry).then(resolve).catch(reject);
	                } else {
	                    new Function('callbacks', `System.import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
	                        resolve,
	                        reject
	                    ]);
	                }
	            } else {
	                resolve(remoteEntryExports);
	            }
	        } catch (e) {
	            reject(e);
	        }
	    });
	}
	async function loadEntryScript({ name, globalName, entry, loaderHook }) {
	    const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
	    if (remoteEntryExports) {
	        return remoteEntryExports;
	    }
	    return sdk.loadScript(entry, {
	        attrs: {},
	        createScriptHook: (url, attrs)=>{
	            const res = loaderHook.lifecycle.createScript.emit({
	                url,
	                attrs
	            });
	            if (!res) return;
	            if (res instanceof HTMLScriptElement) {
	                return res;
	            }
	            if ('script' in res || 'timeout' in res) {
	                return res;
	            }
	            return;
	        }
	    }).then(()=>{
	        const { remoteEntryKey, entryExports } = getRemoteEntryExports(name, globalName);
	        assert(entryExports, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
	            remoteName: name,
	            remoteEntryUrl: entry,
	            remoteEntryKey
	        }));
	        return entryExports;
	    }).catch((e)=>{
	        assert(undefined, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_008, errorCodes.runtimeDescMap, {
	            remoteName: name,
	            resourceUrl: entry
	        }));
	        throw e;
	    });
	}
	async function loadEntryDom({ remoteInfo, remoteEntryExports, loaderHook }) {
	    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
	    switch(type){
	        case 'esm':
	        case 'module':
	            return loadEsmEntry({
	                entry,
	                remoteEntryExports
	            });
	        case 'system':
	            return loadSystemJsEntry({
	                entry,
	                remoteEntryExports
	            });
	        default:
	            return loadEntryScript({
	                entry,
	                globalName,
	                name,
	                loaderHook
	            });
	    }
	}
	async function loadEntryNode({ remoteInfo, loaderHook }) {
	    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
	    const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
	    if (remoteEntryExports) {
	        return remoteEntryExports;
	    }
	    return sdk.loadScriptNode(entry, {
	        attrs: {
	            name,
	            globalName,
	            type
	        },
	        loaderHook: {
	            createScriptHook: (url, attrs = {})=>{
	                const res = loaderHook.lifecycle.createScript.emit({
	                    url,
	                    attrs
	                });
	                if (!res) return;
	                if ('url' in res) {
	                    return res;
	                }
	                return;
	            }
	        }
	    }).then(()=>{
	        const { remoteEntryKey, entryExports } = getRemoteEntryExports(name, globalName);
	        assert(entryExports, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
	            remoteName: name,
	            remoteEntryUrl: entry,
	            remoteEntryKey
	        }));
	        return entryExports;
	    }).catch((e)=>{
	        throw e;
	    });
	}
	function getRemoteEntryUniqueKey(remoteInfo) {
	    const { entry, name } = remoteInfo;
	    return sdk.composeKeyWithSeparator(name, entry);
	}
	async function getRemoteEntry({ origin, remoteEntryExports, remoteInfo }) {
	    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
	    if (remoteEntryExports) {
	        return remoteEntryExports;
	    }
	    if (!globalLoading[uniqueKey]) {
	        const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
	        const loaderHook = origin.loaderHook;
	        globalLoading[uniqueKey] = loadEntryHook.emit({
	            loaderHook,
	            remoteInfo,
	            remoteEntryExports
	        }).then((res)=>{
	            if (res) {
	                return res;
	            }
	            return sdk.isBrowserEnv() ? loadEntryDom({
	                remoteInfo,
	                remoteEntryExports,
	                loaderHook
	            }) : loadEntryNode({
	                remoteInfo,
	                loaderHook
	            });
	        });
	    }
	    return globalLoading[uniqueKey];
	}
	function getRemoteInfo(remote) {
	    return polyfills._extends({}, remote, {
	        entry: 'entry' in remote ? remote.entry : '',
	        type: remote.type || DEFAULT_REMOTE_TYPE,
	        entryGlobalName: remote.entryGlobalName || remote.name,
	        shareScope: remote.shareScope || DEFAULT_SCOPE
	    });
	}

	let Module = class Module {
	    async getEntry() {
	        if (this.remoteEntryExports) {
	            return this.remoteEntryExports;
	        }
	        let remoteEntryExports;
	        try {
	            remoteEntryExports = await getRemoteEntry({
	                origin: this.host,
	                remoteInfo: this.remoteInfo,
	                remoteEntryExports: this.remoteEntryExports
	            });
	        } catch (err) {
	            const uniqueKey = getRemoteEntryUniqueKey(this.remoteInfo);
	            remoteEntryExports = await this.host.loaderHook.lifecycle.loadEntryError.emit({
	                getRemoteEntry,
	                origin: this.host,
	                remoteInfo: this.remoteInfo,
	                remoteEntryExports: this.remoteEntryExports,
	                globalLoading,
	                uniqueKey
	            });
	        }
	        assert(remoteEntryExports, `remoteEntryExports is undefined \n ${sdk.safeToString(this.remoteInfo)}`);
	        this.remoteEntryExports = remoteEntryExports;
	        return this.remoteEntryExports;
	    }
	    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	    async get(id, expose, options, remoteSnapshot) {
	        const { loadFactory = true } = options || {
	            loadFactory: true
	        };
	        // Get remoteEntry.js
	        const remoteEntryExports = await this.getEntry();
	        if (!this.inited) {
	            const localShareScopeMap = this.host.shareScopeMap;
	            const remoteShareScope = this.remoteInfo.shareScope || 'default';
	            if (!localShareScopeMap[remoteShareScope]) {
	                localShareScopeMap[remoteShareScope] = {};
	            }
	            const shareScope = localShareScopeMap[remoteShareScope];
	            const initScope = [];
	            const remoteEntryInitOptions = {
	                version: this.remoteInfo.version || ''
	            };
	            // Help to find host instance
	            Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
	                value: localShareScopeMap,
	                // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
	                enumerable: false
	            });
	            const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
	                shareScope,
	                // @ts-ignore shareScopeMap will be set by Object.defineProperty
	                remoteEntryInitOptions,
	                initScope,
	                remoteInfo: this.remoteInfo,
	                origin: this.host
	            });
	            if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {
	                error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_002, errorCodes.runtimeDescMap, {
	                    remoteName: name,
	                    remoteEntryUrl: this.remoteInfo.entry,
	                    remoteEntryKey: this.remoteInfo.entryGlobalName
	                }));
	            }
	            await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
	            await this.host.hooks.lifecycle.initContainer.emit(polyfills._extends({}, initContainerOptions, {
	                id,
	                remoteSnapshot,
	                remoteEntryExports
	            }));
	        }
	        this.lib = remoteEntryExports;
	        this.inited = true;
	        let moduleFactory;
	        moduleFactory = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
	            remoteEntryExports,
	            expose,
	            moduleInfo: this.remoteInfo
	        });
	        // get exposeGetter
	        if (!moduleFactory) {
	            moduleFactory = await remoteEntryExports.get(expose);
	        }
	        assert(moduleFactory, `${getFMId(this.remoteInfo)} remote don't export ${expose}.`);
	        // keep symbol for module name always one format
	        const symbolName = processModuleAlias(this.remoteInfo.name, expose);
	        const wrapModuleFactory = this.wraperFactory(moduleFactory, symbolName);
	        if (!loadFactory) {
	            return wrapModuleFactory;
	        }
	        const exposeContent = await wrapModuleFactory();
	        return exposeContent;
	    }
	    wraperFactory(moduleFactory, id) {
	        function defineModuleId(res, id) {
	            if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
	                Object.defineProperty(res, Symbol.for('mf_module_id'), {
	                    value: id,
	                    enumerable: false
	                });
	            }
	        }
	        if (moduleFactory instanceof Promise) {
	            return async ()=>{
	                const res = await moduleFactory();
	                // This parameter is used for bridge debugging
	                defineModuleId(res, id);
	                return res;
	            };
	        } else {
	            return ()=>{
	                const res = moduleFactory();
	                // This parameter is used for bridge debugging
	                defineModuleId(res, id);
	                return res;
	            };
	        }
	    }
	    constructor({ remoteInfo, host }){
	        this.inited = false;
	        this.lib = undefined;
	        this.remoteInfo = remoteInfo;
	        this.host = host;
	    }
	};

	class SyncHook {
	    on(fn) {
	        if (typeof fn === 'function') {
	            this.listeners.add(fn);
	        }
	    }
	    once(fn) {
	        // eslint-disable-next-line @typescript-eslint/no-this-alias
	        const self = this;
	        this.on(function wrapper(...args) {
	            self.remove(wrapper);
	            // eslint-disable-next-line prefer-spread
	            return fn.apply(null, args);
	        });
	    }
	    emit(...data) {
	        let result;
	        if (this.listeners.size > 0) {
	            // eslint-disable-next-line prefer-spread
	            this.listeners.forEach((fn)=>{
	                result = fn(...data);
	            });
	        }
	        return result;
	    }
	    remove(fn) {
	        this.listeners.delete(fn);
	    }
	    removeAll() {
	        this.listeners.clear();
	    }
	    constructor(type){
	        this.type = '';
	        this.listeners = new Set();
	        if (type) {
	            this.type = type;
	        }
	    }
	}

	class AsyncHook extends SyncHook {
	    emit(...data) {
	        let result;
	        const ls = Array.from(this.listeners);
	        if (ls.length > 0) {
	            let i = 0;
	            const call = (prev)=>{
	                if (prev === false) {
	                    return false; // Abort process
	                } else if (i < ls.length) {
	                    return Promise.resolve(ls[i++].apply(null, data)).then(call);
	                } else {
	                    return prev;
	                }
	            };
	            result = call();
	        }
	        return Promise.resolve(result);
	    }
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	function checkReturnData(originalData, returnedData) {
	    if (!isObject(returnedData)) {
	        return false;
	    }
	    if (originalData !== returnedData) {
	        // eslint-disable-next-line no-restricted-syntax
	        for(const key in originalData){
	            if (!(key in returnedData)) {
	                return false;
	            }
	        }
	    }
	    return true;
	}
	class SyncWaterfallHook extends SyncHook {
	    emit(data) {
	        if (!isObject(data)) {
	            error(`The data for the "${this.type}" hook should be an object.`);
	        }
	        for (const fn of this.listeners){
	            try {
	                const tempData = fn(data);
	                if (checkReturnData(data, tempData)) {
	                    data = tempData;
	                } else {
	                    this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
	                    break;
	                }
	            } catch (e) {
	                warn(e);
	                this.onerror(e);
	            }
	        }
	        return data;
	    }
	    constructor(type){
	        super(), this.onerror = error;
	        this.type = type;
	    }
	}

	class AsyncWaterfallHook extends SyncHook {
	    emit(data) {
	        if (!isObject(data)) {
	            error(`The response data for the "${this.type}" hook must be an object.`);
	        }
	        const ls = Array.from(this.listeners);
	        if (ls.length > 0) {
	            let i = 0;
	            const processError = (e)=>{
	                warn(e);
	                this.onerror(e);
	                return data;
	            };
	            const call = (prevData)=>{
	                if (checkReturnData(data, prevData)) {
	                    data = prevData;
	                    if (i < ls.length) {
	                        try {
	                            return Promise.resolve(ls[i++](data)).then(call, processError);
	                        } catch (e) {
	                            return processError(e);
	                        }
	                    }
	                } else {
	                    this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
	                }
	                return data;
	            };
	            return Promise.resolve(call(data));
	        }
	        return Promise.resolve(data);
	    }
	    constructor(type){
	        super(), this.onerror = error;
	        this.type = type;
	    }
	}

	class PluginSystem {
	    applyPlugin(plugin) {
	        assert(isPlainObject(plugin), 'Plugin configuration is invalid.');
	        // The plugin's name is mandatory and must be unique
	        const pluginName = plugin.name;
	        assert(pluginName, 'A name must be provided by the plugin.');
	        if (!this.registerPlugins[pluginName]) {
	            this.registerPlugins[pluginName] = plugin;
	            Object.keys(this.lifecycle).forEach((key)=>{
	                const pluginLife = plugin[key];
	                if (pluginLife) {
	                    this.lifecycle[key].on(pluginLife);
	                }
	            });
	        }
	    }
	    removePlugin(pluginName) {
	        assert(pluginName, 'A name is required.');
	        const plugin = this.registerPlugins[pluginName];
	        assert(plugin, `The plugin "${pluginName}" is not registered.`);
	        Object.keys(plugin).forEach((key)=>{
	            if (key !== 'name') {
	                this.lifecycle[key].remove(plugin[key]);
	            }
	        });
	    }
	    // eslint-disable-next-line @typescript-eslint/no-shadow
	    inherit({ lifecycle, registerPlugins }) {
	        Object.keys(lifecycle).forEach((hookName)=>{
	            assert(!this.lifecycle[hookName], `The hook "${hookName}" has a conflict and cannot be inherited.`);
	            this.lifecycle[hookName] = lifecycle[hookName];
	        });
	        Object.keys(registerPlugins).forEach((pluginName)=>{
	            assert(!this.registerPlugins[pluginName], `The plugin "${pluginName}" has a conflict and cannot be inherited.`);
	            this.applyPlugin(registerPlugins[pluginName]);
	        });
	    }
	    constructor(lifecycle){
	        this.registerPlugins = {};
	        this.lifecycle = lifecycle;
	        this.lifecycleKeys = Object.keys(lifecycle);
	    }
	}

	function defaultPreloadArgs(preloadConfig) {
	    return polyfills._extends({
	        resourceCategory: 'sync',
	        share: true,
	        depsRemote: true,
	        prefetchInterface: false
	    }, preloadConfig);
	}
	function formatPreloadArgs(remotes, preloadArgs) {
	    return preloadArgs.map((args)=>{
	        const remoteInfo = matchRemote(remotes, args.nameOrAlias);
	        assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && sdk.safeToString({
	            remoteInfo,
	            remotes
	        })}`);
	        return {
	            remote: remoteInfo,
	            preloadConfig: defaultPreloadArgs(args)
	        };
	    });
	}
	function normalizePreloadExposes(exposes) {
	    if (!exposes) {
	        return [];
	    }
	    return exposes.map((expose)=>{
	        if (expose === '.') {
	            return expose;
	        }
	        if (expose.startsWith('./')) {
	            return expose.replace('./', '');
	        }
	        return expose;
	    });
	}
	function preloadAssets(remoteInfo, host, assets, // It is used to distinguish preload from load remote parallel loading
	useLinkPreload = true) {
	    const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
	    if (host.options.inBrowser) {
	        entryAssets.forEach((asset)=>{
	            const { moduleInfo } = asset;
	            const module = host.moduleCache.get(remoteInfo.name);
	            if (module) {
	                getRemoteEntry({
	                    origin: host,
	                    remoteInfo: moduleInfo,
	                    remoteEntryExports: module.remoteEntryExports
	                });
	            } else {
	                getRemoteEntry({
	                    origin: host,
	                    remoteInfo: moduleInfo,
	                    remoteEntryExports: undefined
	                });
	            }
	        });
	        if (useLinkPreload) {
	            const defaultAttrs = {
	                rel: 'preload',
	                as: 'style'
	            };
	            cssAssets.forEach((cssUrl)=>{
	                const { link: cssEl, needAttach } = sdk.createLink({
	                    url: cssUrl,
	                    cb: ()=>{
	                    // noop
	                    },
	                    attrs: defaultAttrs,
	                    createLinkHook: (url, attrs)=>{
	                        const res = host.loaderHook.lifecycle.createLink.emit({
	                            url,
	                            attrs
	                        });
	                        if (res instanceof HTMLLinkElement) {
	                            return res;
	                        }
	                        return;
	                    }
	                });
	                needAttach && document.head.appendChild(cssEl);
	            });
	        } else {
	            const defaultAttrs = {
	                rel: 'stylesheet',
	                type: 'text/css'
	            };
	            cssAssets.forEach((cssUrl)=>{
	                const { link: cssEl, needAttach } = sdk.createLink({
	                    url: cssUrl,
	                    cb: ()=>{
	                    // noop
	                    },
	                    attrs: defaultAttrs,
	                    createLinkHook: (url, attrs)=>{
	                        const res = host.loaderHook.lifecycle.createLink.emit({
	                            url,
	                            attrs
	                        });
	                        if (res instanceof HTMLLinkElement) {
	                            return res;
	                        }
	                        return;
	                    },
	                    needDeleteLink: false
	                });
	                needAttach && document.head.appendChild(cssEl);
	            });
	        }
	        if (useLinkPreload) {
	            const defaultAttrs = {
	                rel: 'preload',
	                as: 'script'
	            };
	            jsAssetsWithoutEntry.forEach((jsUrl)=>{
	                const { link: linkEl, needAttach } = sdk.createLink({
	                    url: jsUrl,
	                    cb: ()=>{
	                    // noop
	                    },
	                    attrs: defaultAttrs,
	                    createLinkHook: (url, attrs)=>{
	                        const res = host.loaderHook.lifecycle.createLink.emit({
	                            url,
	                            attrs
	                        });
	                        if (res instanceof HTMLLinkElement) {
	                            return res;
	                        }
	                        return;
	                    }
	                });
	                needAttach && document.head.appendChild(linkEl);
	            });
	        } else {
	            const defaultAttrs = {
	                fetchpriority: 'high',
	                type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'
	            };
	            jsAssetsWithoutEntry.forEach((jsUrl)=>{
	                const { script: scriptEl, needAttach } = sdk.createScript({
	                    url: jsUrl,
	                    cb: ()=>{
	                    // noop
	                    },
	                    attrs: defaultAttrs,
	                    createScriptHook: (url, attrs)=>{
	                        const res = host.loaderHook.lifecycle.createScript.emit({
	                            url,
	                            attrs
	                        });
	                        if (res instanceof HTMLScriptElement) {
	                            return res;
	                        }
	                        return;
	                    },
	                    needDeleteScript: true
	                });
	                needAttach && document.head.appendChild(scriptEl);
	            });
	        }
	    }
	}

	function assignRemoteInfo(remoteInfo, remoteSnapshot) {
	    const remoteEntryInfo = getRemoteEntryInfoFromSnapshot(remoteSnapshot);
	    if (!remoteEntryInfo.url) {
	        error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
	    }
	    let entryUrl = sdk.getResourceUrl(remoteSnapshot, remoteEntryInfo.url);
	    if (!sdk.isBrowserEnv() && !entryUrl.startsWith('http')) {
	        entryUrl = `https:${entryUrl}`;
	    }
	    remoteInfo.type = remoteEntryInfo.type;
	    remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
	    remoteInfo.entry = entryUrl;
	    remoteInfo.version = remoteSnapshot.version;
	    remoteInfo.buildVersion = remoteSnapshot.buildVersion;
	}
	function snapshotPlugin() {
	    return {
	        name: 'snapshot-plugin',
	        async afterResolve (args) {
	            const { remote, pkgNameOrAlias, expose, origin, remoteInfo } = args;
	            if (!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote)) {
	                const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo(remote);
	                assignRemoteInfo(remoteInfo, remoteSnapshot);
	                // preloading assets
	                const preloadOptions = {
	                    remote,
	                    preloadConfig: {
	                        nameOrAlias: pkgNameOrAlias,
	                        exposes: [
	                            expose
	                        ],
	                        resourceCategory: 'sync',
	                        share: false,
	                        depsRemote: false
	                    }
	                };
	                const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
	                    origin,
	                    preloadOptions,
	                    remoteInfo,
	                    remote,
	                    remoteSnapshot,
	                    globalSnapshot
	                });
	                if (assets) {
	                    preloadAssets(remoteInfo, origin, assets, false);
	                }
	                return polyfills._extends({}, args, {
	                    remoteSnapshot
	                });
	            }
	            return args;
	        }
	    };
	}

	// name
	// name:version
	function splitId(id) {
	    const splitInfo = id.split(':');
	    if (splitInfo.length === 1) {
	        return {
	            name: splitInfo[0],
	            version: undefined
	        };
	    } else if (splitInfo.length === 2) {
	        return {
	            name: splitInfo[0],
	            version: splitInfo[1]
	        };
	    } else {
	        return {
	            name: splitInfo[1],
	            version: splitInfo[2]
	        };
	    }
	}
	// Traverse all nodes in moduleInfo and traverse the entire snapshot
	function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
	    const id = getFMId(remoteInfo);
	    const { value: snapshotValue } = getInfoWithoutType(globalSnapshot, id);
	    const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
	    if (effectiveRemoteSnapshot && !sdk.isManifestProvider(effectiveRemoteSnapshot)) {
	        traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
	        if (effectiveRemoteSnapshot.remotesInfo) {
	            const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
	            for (const key of remoteKeys){
	                if (memo[key]) {
	                    continue;
	                }
	                memo[key] = true;
	                const subRemoteInfo = splitId(key);
	                const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
	                traverseModuleInfo(globalSnapshot, {
	                    name: subRemoteInfo.name,
	                    version: remoteValue.matchedVersion
	                }, traverse, false, memo, undefined);
	            }
	        }
	    }
	}
	// eslint-disable-next-line max-lines-per-function
	function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
	    const cssAssets = [];
	    const jsAssets = [];
	    const entryAssets = [];
	    const loadedSharedJsAssets = new Set();
	    const loadedSharedCssAssets = new Set();
	    const { options } = origin;
	    const { preloadConfig: rootPreloadConfig } = preloadOptions;
	    const { depsRemote } = rootPreloadConfig;
	    const memo = {};
	    traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot)=>{
	        let preloadConfig;
	        if (isRoot) {
	            preloadConfig = rootPreloadConfig;
	        } else {
	            if (Array.isArray(depsRemote)) {
	                // eslint-disable-next-line array-callback-return
	                const findPreloadConfig = depsRemote.find((remoteConfig)=>{
	                    if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
	                        return true;
	                    }
	                    return false;
	                });
	                if (!findPreloadConfig) {
	                    return;
	                }
	                preloadConfig = defaultPreloadArgs(findPreloadConfig);
	            } else if (depsRemote === true) {
	                preloadConfig = rootPreloadConfig;
	            } else {
	                return;
	            }
	        }
	        const remoteEntryUrl = sdk.getResourceUrl(moduleInfoSnapshot, getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
	        if (remoteEntryUrl) {
	            entryAssets.push({
	                name: remoteInfo.name,
	                moduleInfo: {
	                    name: remoteInfo.name,
	                    entry: remoteEntryUrl,
	                    type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
	                    entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
	                    shareScope: '',
	                    version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
	                },
	                url: remoteEntryUrl
	            });
	        }
	        let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
	        const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
	        if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
	            var _moduleInfoSnapshot_modules;
	            moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo)=>{
	                if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
	                    assets.push(moduleAssetInfo);
	                }
	                return assets;
	            }, []);
	        }
	        function handleAssets(assets) {
	            const assetsRes = assets.map((asset)=>sdk.getResourceUrl(moduleInfoSnapshot, asset));
	            if (preloadConfig.filter) {
	                return assetsRes.filter(preloadConfig.filter);
	            }
	            return assetsRes;
	        }
	        if (moduleAssetsInfo) {
	            const assetsLength = moduleAssetsInfo.length;
	            for(let index = 0; index < assetsLength; index++){
	                const assetsInfo = moduleAssetsInfo[index];
	                const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
	                origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
	                    id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
	                    name: remoteInfo.name,
	                    remoteSnapshot: moduleInfoSnapshot,
	                    preloadConfig,
	                    remote: remoteInfo,
	                    origin
	                });
	                const preloaded = getPreloaded(exposeFullPath);
	                if (preloaded) {
	                    continue;
	                }
	                if (preloadConfig.resourceCategory === 'all') {
	                    cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
	                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
	                    jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
	                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
	                // eslint-disable-next-line no-constant-condition
	                } else if (preloadConfig.resourceCategory = 'sync') {
	                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
	                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
	                }
	                setPreloaded(exposeFullPath);
	            }
	        }
	    }, true, memo, remoteSnapshot);
	    if (remoteSnapshot.shared) {
	        const collectSharedAssets = (shareInfo, snapshotShared)=>{
	            const registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
	            // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
	            if (registeredShared && typeof registeredShared.lib === 'function') {
	                snapshotShared.assets.js.sync.forEach((asset)=>{
	                    loadedSharedJsAssets.add(asset);
	                });
	                snapshotShared.assets.css.sync.forEach((asset)=>{
	                    loadedSharedCssAssets.add(asset);
	                });
	            }
	        };
	        remoteSnapshot.shared.forEach((shared)=>{
	            var _options_shared;
	            const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
	            if (!shareInfos) {
	                return;
	            }
	            // if no version, preload all shared
	            const sharedOptions = shared.version ? shareInfos.find((s)=>s.version === shared.version) : shareInfos;
	            if (!sharedOptions) {
	                return;
	            }
	            const arrayShareInfo = arrayOptions(sharedOptions);
	            arrayShareInfo.forEach((s)=>{
	                collectSharedAssets(s, shared);
	            });
	        });
	    }
	    const needPreloadJsAssets = jsAssets.filter((asset)=>!loadedSharedJsAssets.has(asset));
	    const needPreloadCssAssets = cssAssets.filter((asset)=>!loadedSharedCssAssets.has(asset));
	    return {
	        cssAssets: needPreloadCssAssets,
	        jsAssetsWithoutEntry: needPreloadJsAssets,
	        entryAssets
	    };
	}
	const generatePreloadAssetsPlugin = function() {
	    return {
	        name: 'generate-preload-assets-plugin',
	        async generatePreloadAssets (args) {
	            const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
	            if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
	                return {
	                    cssAssets: [],
	                    jsAssetsWithoutEntry: [],
	                    entryAssets: [
	                        {
	                            name: remote.name,
	                            url: remote.entry,
	                            moduleInfo: {
	                                name: remoteInfo.name,
	                                entry: remote.entry,
	                                type: remoteInfo.type || 'global',
	                                entryGlobalName: '',
	                                shareScope: ''
	                            }
	                        }
	                    ]
	                };
	            }
	            assignRemoteInfo(remoteInfo, remoteSnapshot);
	            const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
	            return assets;
	        }
	    };
	};

	function getGlobalRemoteInfo(moduleInfo, origin) {
	    const hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
	        name: origin.options.name,
	        version: origin.options.version
	    });
	    // get remote detail info from global
	    const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
	    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
	        return {
	            hostGlobalSnapshot,
	            globalSnapshot: getGlobalSnapshot(),
	            remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
	                name: moduleInfo.name,
	                version: globalRemoteInfo.matchedVersion
	            })
	        };
	    }
	    return {
	        hostGlobalSnapshot: undefined,
	        globalSnapshot: getGlobalSnapshot(),
	        remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
	            name: moduleInfo.name,
	            version: 'version' in moduleInfo ? moduleInfo.version : undefined
	        })
	    };
	}
	class SnapshotHandler {
	    async loadSnapshot(moduleInfo) {
	        const { options } = this.HostInstance;
	        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
	        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
	            options,
	            moduleInfo,
	            hostGlobalSnapshot,
	            remoteSnapshot,
	            globalSnapshot
	        });
	        return {
	            remoteSnapshot: globalRemoteSnapshot,
	            globalSnapshot: globalSnapshotRes
	        };
	    }
	    // eslint-disable-next-line max-lines-per-function
	    async loadRemoteSnapshotInfo(moduleInfo) {
	        const { options } = this.HostInstance;
	        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
	            options,
	            moduleInfo
	        });
	        let hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
	            name: this.HostInstance.options.name,
	            version: this.HostInstance.options.version
	        });
	        if (!hostSnapshot) {
	            hostSnapshot = {
	                version: this.HostInstance.options.version || '',
	                remoteEntry: '',
	                remotesInfo: {}
	            };
	            addGlobalSnapshot({
	                [this.HostInstance.options.name]: hostSnapshot
	            });
	        }
	        // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
	        // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
	        if (hostSnapshot && 'remotesInfo' in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
	            if ('version' in moduleInfo || 'entry' in moduleInfo) {
	                hostSnapshot.remotesInfo = polyfills._extends({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
	                    [moduleInfo.name]: {
	                        matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
	                    }
	                });
	            }
	        }
	        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
	        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
	            options,
	            moduleInfo,
	            hostGlobalSnapshot,
	            remoteSnapshot,
	            globalSnapshot
	        });
	        let mSnapshot;
	        let gSnapshot;
	        // global snapshot includes manifest or module info includes manifest
	        if (globalRemoteSnapshot) {
	            if (sdk.isManifestProvider(globalRemoteSnapshot)) {
	                const remoteEntry = sdk.isBrowserEnv() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
	                const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});
	                // eslint-disable-next-line @typescript-eslint/no-shadow
	                const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo(polyfills._extends({}, moduleInfo, {
	                    // The global remote may be overridden
	                    // Therefore, set the snapshot key to the global address of the actual request
	                    entry: remoteEntry
	                }), moduleSnapshot);
	                mSnapshot = moduleSnapshot;
	                gSnapshot = globalSnapshotRes;
	            } else {
	                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
	                    options: this.HostInstance.options,
	                    moduleInfo,
	                    remoteSnapshot: globalRemoteSnapshot,
	                    from: 'global'
	                });
	                mSnapshot = remoteSnapshotRes;
	                gSnapshot = globalSnapshotRes;
	            }
	        } else {
	            if (isRemoteInfoWithEntry(moduleInfo)) {
	                // get from manifest.json and merge remote info from remote server
	                const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
	                // eslint-disable-next-line @typescript-eslint/no-shadow
	                const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
	                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
	                    options: this.HostInstance.options,
	                    moduleInfo,
	                    remoteSnapshot: moduleSnapshot,
	                    from: 'global'
	                });
	                mSnapshot = remoteSnapshotRes;
	                gSnapshot = globalSnapshotRes;
	            } else {
	                error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_007, errorCodes.runtimeDescMap, {
	                    hostName: moduleInfo.name,
	                    hostVersion: moduleInfo.version,
	                    globalSnapshot: JSON.stringify(globalSnapshotRes)
	                }));
	            }
	        }
	        await this.hooks.lifecycle.afterLoadSnapshot.emit({
	            options,
	            moduleInfo,
	            remoteSnapshot: mSnapshot
	        });
	        return {
	            remoteSnapshot: mSnapshot,
	            globalSnapshot: gSnapshot
	        };
	    }
	    getGlobalRemoteInfo(moduleInfo) {
	        return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
	    }
	    async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
	        const getManifest = async ()=>{
	            let manifestJson = this.manifestCache.get(manifestUrl);
	            if (manifestJson) {
	                return manifestJson;
	            }
	            try {
	                let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
	                if (!res || !(res instanceof Response)) {
	                    res = await fetch(manifestUrl, {});
	                }
	                manifestJson = await res.json();
	            } catch (err) {
	                manifestJson = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
	                    id: manifestUrl,
	                    error,
	                    from: 'runtime',
	                    lifecycle: 'afterResolve',
	                    origin: this.HostInstance
	                });
	                if (!manifestJson) {
	                    delete this.manifestLoading[manifestUrl];
	                    error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_003, errorCodes.runtimeDescMap, {
	                        manifestUrl,
	                        moduleName: moduleInfo.name
	                    }, `${err}`));
	                }
	            }
	            assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
	            this.manifestCache.set(manifestUrl, manifestJson);
	            return manifestJson;
	        };
	        const asyncLoadProcess = async ()=>{
	            const manifestJson = await getManifest();
	            const remoteSnapshot = sdk.generateSnapshotFromManifest(manifestJson, {
	                version: manifestUrl
	            });
	            const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
	                options: this.HostInstance.options,
	                moduleInfo,
	                manifestJson,
	                remoteSnapshot,
	                manifestUrl,
	                from: 'manifest'
	            });
	            return remoteSnapshotRes;
	        };
	        if (!this.manifestLoading[manifestUrl]) {
	            this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res)=>res);
	        }
	        return this.manifestLoading[manifestUrl];
	    }
	    constructor(HostInstance){
	        this.loadingHostSnapshot = null;
	        this.manifestCache = new Map();
	        this.hooks = new PluginSystem({
	            beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
	            loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
	            loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot'),
	            afterLoadSnapshot: new AsyncWaterfallHook('afterLoadSnapshot')
	        });
	        this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
	        this.HostInstance = HostInstance;
	        this.loaderHook = HostInstance.loaderHook;
	    }
	}

	class SharedHandler {
	    // register shared in shareScopeMap
	    registerShared(globalOptions, userOptions) {
	        const { shareInfos, shared } = formatShareConfigs(globalOptions, userOptions);
	        const sharedKeys = Object.keys(shareInfos);
	        sharedKeys.forEach((sharedKey)=>{
	            const sharedVals = shareInfos[sharedKey];
	            sharedVals.forEach((sharedVal)=>{
	                const registeredShared = getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
	                if (!registeredShared && sharedVal && sharedVal.lib) {
	                    this.setShared({
	                        pkgName: sharedKey,
	                        lib: sharedVal.lib,
	                        get: sharedVal.get,
	                        loaded: true,
	                        shared: sharedVal,
	                        from: userOptions.name
	                    });
	                }
	            });
	        });
	        return {
	            shareInfos,
	            shared
	        };
	    }
	    async loadShare(pkgName, extraOptions) {
	        const { host } = this;
	        // This function performs the following steps:
	        // 1. Checks if the currently loaded share already exists, if not, it throws an error
	        // 2. Searches globally for a matching share, if found, it uses it directly
	        // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
	        const shareInfo = getTargetSharedOptions({
	            pkgName,
	            extraOptions,
	            shareInfos: host.options.shared
	        });
	        if (shareInfo == null ? void 0 : shareInfo.scope) {
	            await Promise.all(shareInfo.scope.map(async (shareScope)=>{
	                await Promise.all(this.initializeSharing(shareScope, {
	                    strategy: shareInfo.strategy
	                }));
	                return;
	            }));
	        }
	        const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({
	            pkgName,
	            shareInfo,
	            shared: host.options.shared,
	            origin: host
	        });
	        const { shareInfo: shareInfoRes } = loadShareRes;
	        // Assert that shareInfoRes exists, if not, throw an error
	        assert(shareInfoRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
	        // Retrieve from cache
	        const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
	        const addUseIn = (shared)=>{
	            if (!shared.useIn) {
	                shared.useIn = [];
	            }
	            addUniqueItem(shared.useIn, host.options.name);
	        };
	        if (registeredShared && registeredShared.lib) {
	            addUseIn(registeredShared);
	            return registeredShared.lib;
	        } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
	            const factory = await registeredShared.loading;
	            registeredShared.loaded = true;
	            if (!registeredShared.lib) {
	                registeredShared.lib = factory;
	            }
	            addUseIn(registeredShared);
	            return factory;
	        } else if (registeredShared) {
	            const asyncLoadProcess = async ()=>{
	                const factory = await registeredShared.get();
	                shareInfoRes.lib = factory;
	                shareInfoRes.loaded = true;
	                addUseIn(shareInfoRes);
	                const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
	                if (gShared) {
	                    gShared.lib = factory;
	                    gShared.loaded = true;
	                }
	                return factory;
	            };
	            const loading = asyncLoadProcess();
	            this.setShared({
	                pkgName,
	                loaded: false,
	                shared: registeredShared,
	                from: host.options.name,
	                lib: null,
	                loading
	            });
	            return loading;
	        } else {
	            if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
	                return false;
	            }
	            const asyncLoadProcess = async ()=>{
	                const factory = await shareInfoRes.get();
	                shareInfoRes.lib = factory;
	                shareInfoRes.loaded = true;
	                addUseIn(shareInfoRes);
	                const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
	                if (gShared) {
	                    gShared.lib = factory;
	                    gShared.loaded = true;
	                }
	                return factory;
	            };
	            const loading = asyncLoadProcess();
	            this.setShared({
	                pkgName,
	                loaded: false,
	                shared: shareInfoRes,
	                from: host.options.name,
	                lib: null,
	                loading
	            });
	            return loading;
	        }
	    }
	    /**
	   * This function initializes the sharing sequence (executed only once per share scope).
	   * It accepts one argument, the name of the share scope.
	   * If the share scope does not exist, it creates one.
	   */ // eslint-disable-next-line @typescript-eslint/member-ordering
	    initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
	        const { host } = this;
	        const from = extraOptions == null ? void 0 : extraOptions.from;
	        const strategy = extraOptions == null ? void 0 : extraOptions.strategy;
	        let initScope = extraOptions == null ? void 0 : extraOptions.initScope;
	        const promises = [];
	        if (from !== 'build') {
	            const { initTokens } = this;
	            if (!initScope) initScope = [];
	            let initToken = initTokens[shareScopeName];
	            if (!initToken) initToken = initTokens[shareScopeName] = {
	                from: this.host.name
	            };
	            if (initScope.indexOf(initToken) >= 0) return promises;
	            initScope.push(initToken);
	        }
	        const shareScope = this.shareScopeMap;
	        const hostName = host.options.name;
	        // Creates a new share scope if necessary
	        if (!shareScope[shareScopeName]) {
	            shareScope[shareScopeName] = {};
	        }
	        // Executes all initialization snippets from all accessible modules
	        const scope = shareScope[shareScopeName];
	        const register = (name, shared)=>{
	            var _activeVersion_shareConfig;
	            const { version, eager } = shared;
	            scope[name] = scope[name] || {};
	            const versions = scope[name];
	            const activeVersion = versions[version];
	            const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
	            if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
	                versions[version] = shared;
	            }
	        };
	        const initFn = (mod)=>mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
	        const initRemoteModule = async (key)=>{
	            const { module } = await host.remoteHandler.getRemoteModuleAndOptions({
	                id: key
	            });
	            if (module.getEntry) {
	                let remoteEntryExports;
	                try {
	                    remoteEntryExports = await module.getEntry();
	                } catch (error) {
	                    remoteEntryExports = await host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
	                        id: key,
	                        error,
	                        from: 'runtime',
	                        lifecycle: 'beforeLoadShare',
	                        origin: host
	                    });
	                }
	                if (!module.inited) {
	                    await initFn(remoteEntryExports);
	                    module.inited = true;
	                }
	            }
	        };
	        Object.keys(host.options.shared).forEach((shareName)=>{
	            const sharedArr = host.options.shared[shareName];
	            sharedArr.forEach((shared)=>{
	                if (shared.scope.includes(shareScopeName)) {
	                    register(shareName, shared);
	                }
	            });
	        });
	        // TODO: strategy==='version-first' need to be removed in the future
	        if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
	            host.options.remotes.forEach((remote)=>{
	                if (remote.shareScope === shareScopeName) {
	                    promises.push(initRemoteModule(remote.name));
	                }
	            });
	        }
	        return promises;
	    }
	    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
	    // 1. If the loaded shared already exists globally, then it will be reused
	    // 2. If lib exists in local shared, it will be used directly
	    // 3. If the local get returns something other than Promise, then it will be used directly
	    loadShareSync(pkgName, extraOptions) {
	        const { host } = this;
	        const shareInfo = getTargetSharedOptions({
	            pkgName,
	            extraOptions,
	            shareInfos: host.options.shared
	        });
	        if (shareInfo == null ? void 0 : shareInfo.scope) {
	            shareInfo.scope.forEach((shareScope)=>{
	                this.initializeSharing(shareScope, {
	                    strategy: shareInfo.strategy
	                });
	            });
	        }
	        const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
	        const addUseIn = (shared)=>{
	            if (!shared.useIn) {
	                shared.useIn = [];
	            }
	            addUniqueItem(shared.useIn, host.options.name);
	        };
	        if (registeredShared) {
	            if (typeof registeredShared.lib === 'function') {
	                addUseIn(registeredShared);
	                if (!registeredShared.loaded) {
	                    registeredShared.loaded = true;
	                    if (registeredShared.from === host.options.name) {
	                        shareInfo.loaded = true;
	                    }
	                }
	                return registeredShared.lib;
	            }
	            if (typeof registeredShared.get === 'function') {
	                const module = registeredShared.get();
	                if (!(module instanceof Promise)) {
	                    addUseIn(registeredShared);
	                    this.setShared({
	                        pkgName,
	                        loaded: true,
	                        from: host.options.name,
	                        lib: module,
	                        shared: registeredShared
	                    });
	                    return module;
	                }
	            }
	        }
	        if (shareInfo.lib) {
	            if (!shareInfo.loaded) {
	                shareInfo.loaded = true;
	            }
	            return shareInfo.lib;
	        }
	        if (shareInfo.get) {
	            const module = shareInfo.get();
	            if (module instanceof Promise) {
	                const errorCode = (extraOptions == null ? void 0 : extraOptions.from) === 'build' ? errorCodes.RUNTIME_005 : errorCodes.RUNTIME_006;
	                throw new Error(errorCodes.getShortErrorMsg(errorCode, errorCodes.runtimeDescMap, {
	                    hostName: host.options.name,
	                    sharedPkgName: pkgName
	                }));
	            }
	            shareInfo.lib = module;
	            this.setShared({
	                pkgName,
	                loaded: true,
	                from: host.options.name,
	                lib: shareInfo.lib,
	                shared: shareInfo
	            });
	            return shareInfo.lib;
	        }
	        throw new Error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_006, errorCodes.runtimeDescMap, {
	            hostName: host.options.name,
	            sharedPkgName: pkgName
	        }));
	    }
	    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
	        const { host } = this;
	        this.shareScopeMap[scopeName] = shareScope;
	        this.hooks.lifecycle.initContainerShareScopeMap.emit({
	            shareScope,
	            options: host.options,
	            origin: host,
	            scopeName,
	            hostShareScopeMap: extraOptions.hostShareScopeMap
	        });
	    }
	    setShared({ pkgName, shared, from, lib, loading, loaded, get }) {
	        const { version, scope = 'default' } = shared, shareInfo = polyfills._object_without_properties_loose(shared, [
	            "version",
	            "scope"
	        ]);
	        const scopes = Array.isArray(scope) ? scope : [
	            scope
	        ];
	        scopes.forEach((sc)=>{
	            if (!this.shareScopeMap[sc]) {
	                this.shareScopeMap[sc] = {};
	            }
	            if (!this.shareScopeMap[sc][pkgName]) {
	                this.shareScopeMap[sc][pkgName] = {};
	            }
	            if (!this.shareScopeMap[sc][pkgName][version]) {
	                this.shareScopeMap[sc][pkgName][version] = polyfills._extends({
	                    version,
	                    scope: [
	                        'default'
	                    ]
	                }, shareInfo, {
	                    lib,
	                    loaded,
	                    loading
	                });
	                if (get) {
	                    this.shareScopeMap[sc][pkgName][version].get = get;
	                }
	                return;
	            }
	            const registeredShared = this.shareScopeMap[sc][pkgName][version];
	            if (loading && !registeredShared.loading) {
	                registeredShared.loading = loading;
	            }
	        });
	    }
	    _setGlobalShareScopeMap(hostOptions) {
	        const globalShareScopeMap = getGlobalShareScope();
	        const identifier = hostOptions.id || hostOptions.name;
	        if (identifier && !globalShareScopeMap[identifier]) {
	            globalShareScopeMap[identifier] = this.shareScopeMap;
	        }
	    }
	    constructor(host){
	        this.hooks = new PluginSystem({
	            afterResolve: new AsyncWaterfallHook('afterResolve'),
	            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
	            // not used yet
	            loadShare: new AsyncHook(),
	            resolveShare: new SyncWaterfallHook('resolveShare'),
	            // maybe will change, temporarily for internal use only
	            initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
	        });
	        this.host = host;
	        this.shareScopeMap = {};
	        this.initTokens = {};
	        this._setGlobalShareScopeMap(host.options);
	    }
	}

	class RemoteHandler {
	    formatAndRegisterRemote(globalOptions, userOptions) {
	        const userRemotes = userOptions.remotes || [];
	        return userRemotes.reduce((res, remote)=>{
	            this.registerRemote(remote, res, {
	                force: false
	            });
	            return res;
	        }, globalOptions.remotes);
	    }
	    setIdToRemoteMap(id, remoteMatchInfo) {
	        const { remote, expose } = remoteMatchInfo;
	        const { name, alias } = remote;
	        this.idToRemoteMap[id] = {
	            name: remote.name,
	            expose
	        };
	        if (alias && id.startsWith(name)) {
	            const idWithAlias = id.replace(name, alias);
	            this.idToRemoteMap[idWithAlias] = {
	                name: remote.name,
	                expose
	            };
	            return;
	        }
	        if (alias && id.startsWith(alias)) {
	            const idWithName = id.replace(alias, name);
	            this.idToRemoteMap[idWithName] = {
	                name: remote.name,
	                expose
	            };
	        }
	    }
	    // eslint-disable-next-line max-lines-per-function
	    // eslint-disable-next-line @typescript-eslint/member-ordering
	    async loadRemote(id, options) {
	        const { host } = this;
	        try {
	            const { loadFactory = true } = options || {
	                loadFactory: true
	            };
	            // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.
	            // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.
	            // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)
	            // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get
	            // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
	            // id: alias(app1) + expose(button) = app1/button
	            // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
	            const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({
	                id
	            });
	            const { pkgNameOrAlias, remote, expose, id: idRes, remoteSnapshot } = remoteMatchInfo;
	            const moduleOrFactory = await module.get(idRes, expose, options, remoteSnapshot);
	            const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
	                id: idRes,
	                pkgNameOrAlias,
	                expose,
	                exposeModule: loadFactory ? moduleOrFactory : undefined,
	                exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
	                remote,
	                options: moduleOptions,
	                moduleInstance: module,
	                origin: host
	            });
	            this.setIdToRemoteMap(id, remoteMatchInfo);
	            if (typeof moduleWrapper === 'function') {
	                return moduleWrapper;
	            }
	            return moduleOrFactory;
	        } catch (error) {
	            const { from = 'runtime' } = options || {
	                from: 'runtime'
	            };
	            const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
	                id,
	                error,
	                from,
	                lifecycle: 'onLoad',
	                origin: host
	            });
	            if (!failOver) {
	                throw error;
	            }
	            return failOver;
	        }
	    }
	    // eslint-disable-next-line @typescript-eslint/member-ordering
	    async preloadRemote(preloadOptions) {
	        const { host } = this;
	        await this.hooks.lifecycle.beforePreloadRemote.emit({
	            preloadOps: preloadOptions,
	            options: host.options,
	            origin: host
	        });
	        const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
	        await Promise.all(preloadOps.map(async (ops)=>{
	            const { remote } = ops;
	            const remoteInfo = getRemoteInfo(remote);
	            const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo(remote);
	            const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
	                origin: host,
	                preloadOptions: ops,
	                remote,
	                remoteInfo,
	                globalSnapshot,
	                remoteSnapshot
	            });
	            if (!assets) {
	                return;
	            }
	            preloadAssets(remoteInfo, host, assets);
	        }));
	    }
	    registerRemotes(remotes, options) {
	        const { host } = this;
	        remotes.forEach((remote)=>{
	            this.registerRemote(remote, host.options.remotes, {
	                force: options == null ? void 0 : options.force
	            });
	        });
	    }
	    async getRemoteModuleAndOptions(options) {
	        const { host } = this;
	        const { id } = options;
	        let loadRemoteArgs;
	        try {
	            loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
	                id,
	                options: host.options,
	                origin: host
	            });
	        } catch (error) {
	            loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({
	                id,
	                options: host.options,
	                origin: host,
	                from: 'runtime',
	                error,
	                lifecycle: 'beforeRequest'
	            });
	            if (!loadRemoteArgs) {
	                throw error;
	            }
	        }
	        const { id: idRes } = loadRemoteArgs;
	        const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
	        assert(remoteSplitInfo, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_004, errorCodes.runtimeDescMap, {
	            hostName: host.options.name,
	            requestId: idRes
	        }));
	        const { remote: rawRemote } = remoteSplitInfo;
	        const remoteInfo = getRemoteInfo(rawRemote);
	        const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit(polyfills._extends({
	            id: idRes
	        }, remoteSplitInfo, {
	            options: host.options,
	            origin: host,
	            remoteInfo
	        }));
	        const { remote, expose } = matchInfo;
	        assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
	        let module = host.moduleCache.get(remote.name);
	        const moduleOptions = {
	            host: host,
	            remoteInfo
	        };
	        if (!module) {
	            module = new Module(moduleOptions);
	            host.moduleCache.set(remote.name, module);
	        }
	        return {
	            module,
	            moduleOptions,
	            remoteMatchInfo: matchInfo
	        };
	    }
	    registerRemote(remote, targetRemotes, options) {
	        const { host } = this;
	        const normalizeRemote = ()=>{
	            if (remote.alias) {
	                // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
	                // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
	                const findEqual = targetRemotes.find((item)=>{
	                    var _item_alias;
	                    return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
	                });
	                assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
	            }
	            // Set the remote entry to a complete path
	            if ('entry' in remote) {
	                if (sdk.isBrowserEnv() && !remote.entry.startsWith('http')) {
	                    remote.entry = new URL(remote.entry, window.location.origin).href;
	                }
	            }
	            if (!remote.shareScope) {
	                remote.shareScope = DEFAULT_SCOPE;
	            }
	            if (!remote.type) {
	                remote.type = DEFAULT_REMOTE_TYPE;
	            }
	        };
	        this.hooks.lifecycle.beforeRegisterRemote.emit({
	            remote,
	            origin: host
	        });
	        const registeredRemote = targetRemotes.find((item)=>item.name === remote.name);
	        if (!registeredRemote) {
	            normalizeRemote();
	            targetRemotes.push(remote);
	            this.hooks.lifecycle.registerRemote.emit({
	                remote,
	                origin: host
	            });
	        } else {
	            const messages = [
	                `The remote "${remote.name}" is already registered.`,
	                'Please note that overriding it may cause unexpected errors.'
	            ];
	            if (options == null ? void 0 : options.force) {
	                // remove registered remote
	                this.removeRemote(registeredRemote);
	                normalizeRemote();
	                targetRemotes.push(remote);
	                this.hooks.lifecycle.registerRemote.emit({
	                    remote,
	                    origin: host
	                });
	                sdk.warn(messages.join(' '));
	            }
	        }
	    }
	    removeRemote(remote) {
	        try {
	            const { host } = this;
	            const { name } = remote;
	            const remoteIndex = host.options.remotes.findIndex((item)=>item.name === name);
	            if (remoteIndex !== -1) {
	                host.options.remotes.splice(remoteIndex, 1);
	            }
	            const loadedModule = host.moduleCache.get(remote.name);
	            if (loadedModule) {
	                const remoteInfo = loadedModule.remoteInfo;
	                const key = remoteInfo.entryGlobalName;
	                if (CurrentGlobal[key]) {
	                    var _Object_getOwnPropertyDescriptor;
	                    if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(CurrentGlobal, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
	                        delete CurrentGlobal[key];
	                    } else {
	                        // @ts-ignore
	                        CurrentGlobal[key] = undefined;
	                    }
	                }
	                const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
	                if (globalLoading[remoteEntryUniqueKey]) {
	                    delete globalLoading[remoteEntryUniqueKey];
	                }
	                host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
	                // delete unloaded shared and instance
	                let remoteInsId = remoteInfo.buildVersion ? sdk.composeKeyWithSeparator(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
	                const remoteInsIndex = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((ins)=>{
	                    if (remoteInfo.buildVersion) {
	                        return ins.options.id === remoteInsId;
	                    } else {
	                        return ins.name === remoteInsId;
	                    }
	                });
	                if (remoteInsIndex !== -1) {
	                    const remoteIns = CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
	                    remoteInsId = remoteIns.options.id || remoteInsId;
	                    const globalShareScopeMap = getGlobalShareScope();
	                    let isAllSharedNotUsed = true;
	                    const needDeleteKeys = [];
	                    Object.keys(globalShareScopeMap).forEach((instId)=>{
	                        const shareScopeMap = globalShareScopeMap[instId];
	                        shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope)=>{
	                            const shareScopeVal = shareScopeMap[shareScope];
	                            shareScopeVal && Object.keys(shareScopeVal).forEach((shareName)=>{
	                                const sharedPkgs = shareScopeVal[shareName];
	                                sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion)=>{
	                                    const shared = sharedPkgs[shareVersion];
	                                    if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {
	                                        if (shared.loaded || shared.loading) {
	                                            shared.useIn = shared.useIn.filter((usedHostName)=>usedHostName !== remoteInfo.name);
	                                            if (shared.useIn.length) {
	                                                isAllSharedNotUsed = false;
	                                            } else {
	                                                needDeleteKeys.push([
	                                                    instId,
	                                                    shareScope,
	                                                    shareName,
	                                                    shareVersion
	                                                ]);
	                                            }
	                                        } else {
	                                            needDeleteKeys.push([
	                                                instId,
	                                                shareScope,
	                                                shareName,
	                                                shareVersion
	                                            ]);
	                                        }
	                                    }
	                                });
	                            });
	                        });
	                    });
	                    if (isAllSharedNotUsed) {
	                        remoteIns.shareScopeMap = {};
	                        delete globalShareScopeMap[remoteInsId];
	                    }
	                    needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion])=>{
	                        var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
	                        (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
	                    });
	                    CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
	                }
	                const { hostGlobalSnapshot } = getGlobalRemoteInfo(remote, host);
	                if (hostGlobalSnapshot) {
	                    const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
	                    if (remoteKey) {
	                        delete hostGlobalSnapshot.remotesInfo[remoteKey];
	                        if (//eslint-disable-next-line no-extra-boolean-cast
	                        Boolean(Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
	                            delete Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
	                        }
	                    }
	                }
	                host.moduleCache.delete(remote.name);
	            }
	        } catch (err) {
	            logger.log('removeRemote fail: ', err);
	        }
	    }
	    constructor(host){
	        this.hooks = new PluginSystem({
	            beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
	            registerRemote: new SyncWaterfallHook('registerRemote'),
	            beforeRequest: new AsyncWaterfallHook('beforeRequest'),
	            onLoad: new AsyncHook('onLoad'),
	            handlePreloadModule: new SyncHook('handlePreloadModule'),
	            errorLoadRemote: new AsyncHook('errorLoadRemote'),
	            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
	            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
	            // not used yet
	            afterPreloadRemote: new AsyncHook(),
	            loadEntry: new AsyncHook()
	        });
	        this.host = host;
	        this.idToRemoteMap = {};
	    }
	}

	class FederationHost {
	    initOptions(userOptions) {
	        this.registerPlugins(userOptions.plugins);
	        const options = this.formatOptions(this.options, userOptions);
	        this.options = options;
	        return options;
	    }
	    async loadShare(pkgName, extraOptions) {
	        return this.sharedHandler.loadShare(pkgName, extraOptions);
	    }
	    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
	    // 1. If the loaded shared already exists globally, then it will be reused
	    // 2. If lib exists in local shared, it will be used directly
	    // 3. If the local get returns something other than Promise, then it will be used directly
	    loadShareSync(pkgName, extraOptions) {
	        return this.sharedHandler.loadShareSync(pkgName, extraOptions);
	    }
	    initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
	        return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
	    }
	    initRawContainer(name, url, container) {
	        const remoteInfo = getRemoteInfo({
	            name,
	            entry: url
	        });
	        const module = new Module({
	            host: this,
	            remoteInfo
	        });
	        module.remoteEntryExports = container;
	        this.moduleCache.set(name, module);
	        return module;
	    }
	    // eslint-disable-next-line max-lines-per-function
	    // eslint-disable-next-line @typescript-eslint/member-ordering
	    async loadRemote(id, options) {
	        return this.remoteHandler.loadRemote(id, options);
	    }
	    // eslint-disable-next-line @typescript-eslint/member-ordering
	    async preloadRemote(preloadOptions) {
	        return this.remoteHandler.preloadRemote(preloadOptions);
	    }
	    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
	        this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
	    }
	    formatOptions(globalOptions, userOptions) {
	        const { shared } = formatShareConfigs(globalOptions, userOptions);
	        const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
	            origin: this,
	            userOptions,
	            options: globalOptions,
	            shareInfo: shared
	        });
	        const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
	        const { shared: handledShared } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
	        const plugins = [
	            ...globalOptionsRes.plugins
	        ];
	        if (userOptionsRes.plugins) {
	            userOptionsRes.plugins.forEach((plugin)=>{
	                if (!plugins.includes(plugin)) {
	                    plugins.push(plugin);
	                }
	            });
	        }
	        const optionsRes = polyfills._extends({}, globalOptions, userOptions, {
	            plugins,
	            remotes,
	            shared: handledShared
	        });
	        this.hooks.lifecycle.init.emit({
	            origin: this,
	            options: optionsRes
	        });
	        return optionsRes;
	    }
	    registerPlugins(plugins) {
	        const pluginRes = registerPlugins(plugins, [
	            this.hooks,
	            this.remoteHandler.hooks,
	            this.sharedHandler.hooks,
	            this.snapshotHandler.hooks,
	            this.loaderHook,
	            this.bridgeHook
	        ]);
	        // Merge plugin
	        this.options.plugins = this.options.plugins.reduce((res, plugin)=>{
	            if (!plugin) return res;
	            if (res && !res.find((item)=>item.name === plugin.name)) {
	                res.push(plugin);
	            }
	            return res;
	        }, pluginRes || []);
	    }
	    registerRemotes(remotes, options) {
	        return this.remoteHandler.registerRemotes(remotes, options);
	    }
	    constructor(userOptions){
	        this.hooks = new PluginSystem({
	            beforeInit: new SyncWaterfallHook('beforeInit'),
	            init: new SyncHook(),
	            // maybe will change, temporarily for internal use only
	            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
	            // maybe will change, temporarily for internal use only
	            initContainer: new AsyncWaterfallHook('initContainer')
	        });
	        this.version = "0.6.20";
	        this.moduleCache = new Map();
	        this.loaderHook = new PluginSystem({
	            // FIXME: may not be suitable , not open to the public yet
	            getModuleInfo: new SyncHook(),
	            createScript: new SyncHook(),
	            createLink: new SyncHook(),
	            fetch: new AsyncHook(),
	            loadEntryError: new AsyncHook(),
	            getModuleFactory: new AsyncHook()
	        });
	        this.bridgeHook = new PluginSystem({
	            beforeBridgeRender: new SyncHook(),
	            afterBridgeRender: new SyncHook(),
	            beforeBridgeDestroy: new SyncHook(),
	            afterBridgeDestroy: new SyncHook()
	        });
	        // TODO: Validate the details of the options
	        // Initialize options with default values
	        const defaultOptions = {
	            id: getBuilderId(),
	            name: userOptions.name,
	            plugins: [
	                snapshotPlugin(),
	                generatePreloadAssetsPlugin()
	            ],
	            remotes: [],
	            shared: {},
	            inBrowser: sdk.isBrowserEnv()
	        };
	        this.name = userOptions.name;
	        this.options = defaultOptions;
	        this.snapshotHandler = new SnapshotHandler(this);
	        this.sharedHandler = new SharedHandler(this);
	        this.remoteHandler = new RemoteHandler(this);
	        this.shareScopeMap = this.sharedHandler.shareScopeMap;
	        this.registerPlugins([
	            ...defaultOptions.plugins,
	            ...userOptions.plugins || []
	        ]);
	        this.options = this.formatOptions(defaultOptions, userOptions);
	    }
	}

	var index = /*#__PURE__*/Object.freeze({
	  __proto__: null
	});

	Object.defineProperty(exports, "loadScript", {
	  enumerable: true,
	  get: function () { return sdk.loadScript; }
	});
	Object.defineProperty(exports, "loadScriptNode", {
	  enumerable: true,
	  get: function () { return sdk.loadScriptNode; }
	});
	exports.CurrentGlobal = CurrentGlobal;
	exports.FederationHost = FederationHost;
	exports.Global = Global;
	exports.Module = Module;
	exports.addGlobalSnapshot = addGlobalSnapshot;
	exports.assert = assert;
	exports.getGlobalFederationConstructor = getGlobalFederationConstructor;
	exports.getGlobalSnapshot = getGlobalSnapshot;
	exports.getInfoWithoutType = getInfoWithoutType;
	exports.getRegisteredShare = getRegisteredShare;
	exports.getRemoteEntry = getRemoteEntry;
	exports.getRemoteInfo = getRemoteInfo;
	exports.helpers = helpers;
	exports.isStaticResourcesEqual = isStaticResourcesEqual;
	exports.matchRemoteWithNameAndExpose = matchRemoteWithNameAndExpose;
	exports.registerGlobalPlugins = registerGlobalPlugins;
	exports.resetFederationGlobalInfo = resetFederationGlobalInfo;
	exports.safeWrapper = safeWrapper;
	exports.satisfy = satisfy;
	exports.setGlobalFederationConstructor = setGlobalFederationConstructor;
	exports.setGlobalFederationInstance = setGlobalFederationInstance;
	exports.types = index; 
} (index_cjs$2));

var utils_cjs = {};

var runtimeCore = index_cjs$2;

// injected by bundler, so it can not use runtime-core stuff
function getBuilderId() {
    //@ts-ignore
    return typeof FEDERATION_BUILD_IDENTIFIER !== 'undefined' ? FEDERATION_BUILD_IDENTIFIER : '';
}
function getGlobalFederationInstance(name, version) {
    const buildId = getBuilderId();
    return runtimeCore.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((GMInstance)=>{
        if (buildId && GMInstance.options.id === getBuilderId()) {
            return true;
        }
        if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
            return true;
        }
        if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
            return true;
        }
        return false;
    });
}

utils_cjs.getGlobalFederationInstance = getGlobalFederationInstance;

(function (exports) {

	var runtimeCore = index_cjs$2;
	var utils = utils_cjs;

	let FederationInstance = null;
	function init(options) {
	    // Retrieve the same instance with the same name
	    const instance = utils.getGlobalFederationInstance(options.name, options.version);
	    if (!instance) {
	        // Retrieve debug constructor
	        const FederationConstructor = runtimeCore.getGlobalFederationConstructor() || runtimeCore.FederationHost;
	        FederationInstance = new FederationConstructor(options);
	        runtimeCore.setGlobalFederationInstance(FederationInstance);
	        return FederationInstance;
	    } else {
	        // Merge options
	        instance.initOptions(options);
	        if (!FederationInstance) {
	            FederationInstance = instance;
	        }
	        return instance;
	    }
	}
	function loadRemote(...args) {
	    runtimeCore.assert(FederationInstance, 'Please call init first');
	    const loadRemote1 = FederationInstance.loadRemote;
	    // eslint-disable-next-line prefer-spread
	    return loadRemote1.apply(FederationInstance, args);
	}
	function loadShare(...args) {
	    runtimeCore.assert(FederationInstance, 'Please call init first');
	    // eslint-disable-next-line prefer-spread
	    const loadShare1 = FederationInstance.loadShare;
	    return loadShare1.apply(FederationInstance, args);
	}
	function loadShareSync(...args) {
	    runtimeCore.assert(FederationInstance, 'Please call init first');
	    const loadShareSync1 = FederationInstance.loadShareSync;
	    // eslint-disable-next-line prefer-spread
	    return loadShareSync1.apply(FederationInstance, args);
	}
	function preloadRemote(...args) {
	    runtimeCore.assert(FederationInstance, 'Please call init first');
	    // eslint-disable-next-line prefer-spread
	    return FederationInstance.preloadRemote.apply(FederationInstance, args);
	}
	function registerRemotes(...args) {
	    runtimeCore.assert(FederationInstance, 'Please call init first');
	    // eslint-disable-next-line prefer-spread
	    return FederationInstance.registerRemotes.apply(FederationInstance, args);
	}
	function registerPlugins(...args) {
	    runtimeCore.assert(FederationInstance, 'Please call init first');
	    // eslint-disable-next-line prefer-spread
	    return FederationInstance.registerPlugins.apply(FederationInstance, args);
	}
	function getInstance() {
	    return FederationInstance;
	}
	// Inject for debug
	runtimeCore.setGlobalFederationConstructor(runtimeCore.FederationHost);

	Object.defineProperty(exports, "FederationHost", {
	  enumerable: true,
	  get: function () { return runtimeCore.FederationHost; }
	});
	Object.defineProperty(exports, "Module", {
	  enumerable: true,
	  get: function () { return runtimeCore.Module; }
	});
	Object.defineProperty(exports, "getRemoteEntry", {
	  enumerable: true,
	  get: function () { return runtimeCore.getRemoteEntry; }
	});
	Object.defineProperty(exports, "getRemoteInfo", {
	  enumerable: true,
	  get: function () { return runtimeCore.getRemoteInfo; }
	});
	Object.defineProperty(exports, "loadScript", {
	  enumerable: true,
	  get: function () { return runtimeCore.loadScript; }
	});
	Object.defineProperty(exports, "loadScriptNode", {
	  enumerable: true,
	  get: function () { return runtimeCore.loadScriptNode; }
	});
	Object.defineProperty(exports, "registerGlobalPlugins", {
	  enumerable: true,
	  get: function () { return runtimeCore.registerGlobalPlugins; }
	});
	exports.getInstance = getInstance;
	exports.init = init;
	exports.loadRemote = loadRemote;
	exports.loadShare = loadShare;
	exports.loadShareSync = loadShareSync;
	exports.preloadRemote = preloadRemote;
	exports.registerPlugins = registerPlugins;
	exports.registerRemotes = registerRemotes; 
} (index_cjs$3));

const apps = [{"appCode":"vite-vue-app","routes":["/vite-vue-app"],"entry":"https://zhanghongen.github.io/micro-spa-lite/vite-vue-app/dist/mf-manifest.json"},{"appCode":"rspack_react_app","routes":["/rspack_react_app"],"entry":"https://zhanghongen.github.io/micro-spa-lite/rspack_react_app/dist/mf-manifest.json"}];

let initResolve, initReject;
    const initPromise = new Promise((re, rj) => {
      initResolve = re;
      initReject = rj;
    });
    var mfe_mf_2_main__mf_v__runtimeInit__mf_v__ = {
      initPromise,
      initResolve,
      initReject
    };

export { apps as a, index_cjs$3 as i, mfe_mf_2_main__mf_v__runtimeInit__mf_v__ as m };
