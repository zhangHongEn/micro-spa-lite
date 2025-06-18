const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./remoteEntry-C9d5aERx.js","./mfe_mf_2_main__mf_v__runtimeInit__mf_v__-C9pQMqgV.js","./virtualExposes-DwA08f_D.js","./preload-helper-CKlQz3_F.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-CKlQz3_F.js';

const remoteEntryPromise = __vitePreload(() => import('./remoteEntry-C9d5aERx.js'),true              ?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
