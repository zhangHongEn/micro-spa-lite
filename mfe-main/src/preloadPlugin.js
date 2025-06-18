import { apps } from "../../mfe.json"
import { loadRemote, preloadRemote } from '@module-federation/runtime';


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
    loadRemote(`${currentApp.appCode}/main`);
  }

  // Prepare to preload other child applications
  const childApps = apps
    .filter(item => item.appCode !== currentApp?.appCode)
    .map(item => ({
      nameOrAlias: item.appCode,
      exposes: ["main"]
    }));

  // Delay preloading other child applications
  setTimeout(() => preloadRemote(childApps), 1000);
}

/**
 * Micro-frontend preloading plugin
 * Used to configure and preload micro-frontend applications
 */
export default function() {
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

