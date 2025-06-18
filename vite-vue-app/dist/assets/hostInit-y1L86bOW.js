const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/remoteEntry-DRTurfnr.js","assets/vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__-DAs6oBq8.js","assets/virtualExposes-BSAdDwy8.js","assets/preload-helper-DH9EAith.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-DH9EAith.js';

const remoteEntryPromise = __vitePreload(() => import('./remoteEntry-DRTurfnr.js'),true              ?__vite__mapDeps([0,1,2,3]):void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
