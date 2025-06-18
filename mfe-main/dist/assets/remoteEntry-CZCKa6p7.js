const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vue.runtime.esm-bundler-DotGEke7.js","assets/shared.esm-bundler-BRYTs3j7.js"])))=>i.map(i=>d[i]);
import { a as apps, i as index_cjs, m as mfe_mf_2_main__mf_v__runtimeInit__mf_v__ } from './mfe_mf_2_main__mf_v__runtimeInit__mf_v__-C9pQMqgV.js';
import exposesMap from './virtualExposes-DwA08f_D.js';
import { _ as __vitePreload } from './preload-helper-LZM-Uoqt.js';

/**
 * Preload micro-frontend applications
 * 1. Load the application matching the current route
 * 2. Delay preloading other child applications
 */
function preload() {
  const pathname = window.location.pathname;
  
  // Find the application matching the current route
  const currentApp = apps.find(item => 
    item.routes.some(route => pathname.startsWith(route.replace(/\/?$/, "/")))  
  );
  
  // Load the current application
  if (currentApp) {
    console.log('start load first child app', +new Date() - window.__mfe__startTime);
    index_cjs.loadRemote(`${currentApp.appCode}/main`);
  }

  // Prepare to preload other child applications
  const childApps = apps
    .filter(item => item.appCode !== currentApp?.appCode)
    .map(item => ({
      nameOrAlias: item.appCode,
      exposes: ["main"]
    }));

  // Delay preloading other child applications
  setTimeout(() => index_cjs.preloadRemote(childApps), 1000);
}

/**
 * Micro-frontend preloading plugin
 * Used to configure and preload micro-frontend applications
 */
function $runtimePlugin_0() {
  // Asynchronously execute preloading
  Promise.resolve().then(preload);
  
  return {
    name: "mfe-main-preload",
    beforeInit(args) {
      // Add remote configurations for all child applications
      args.options.remotes.push(
        ...apps.map(({ appCode, entry }) => ({
          name: appCode,
          entry,
          type: "module"
        }))
      );
      return args;
    },
  };
}

const importMap = {
      
        "vue": async () => {
          let pkg = await __vitePreload(() => import('./vue.runtime.esm-bundler-DotGEke7.js'),true              ?__vite__mapDeps([0,1]):void 0);
          return pkg
        }
      
    };
      const usedShared = {
      
          "vue": {
            name: "vue",
            version: "3.5.16",
            scope: ["mfe-main"],
            loaded: false,
            from: "mfe-main",
            async get () {
              usedShared["vue"].loaded = true;
              const {"vue": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.5.16"
            }
          }
        
    };
      const usedRemotes = [
      ];

const initTokens = {};
  const shareScopeName = "default";
  const mfName = "mfe-main";
  async function init(shared = {}, initScope = []) {
    const initRes = index_cjs.init({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [$runtimePlugin_0()],
      shareStrategy: 'loaded-first'
    });
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
      initToken = initTokens[shareScopeName] = { from: mfName };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    initRes.initShareScopeMap('default', shared);
    try {
      await Promise.all(await initRes.initializeSharing('default', {
        strategy: 'loaded-first',
        from: "build",
        initScope
      }));
    } catch (e) {
      console.error(e);
    }
    mfe_mf_2_main__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
