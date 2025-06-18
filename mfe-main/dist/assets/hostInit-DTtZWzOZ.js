const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/remoteEntry-Ck56L7k5.js","assets/mfe_mf_2_main__mf_v__runtimeInit__mf_v__-BfT3XUdd.js","assets/virtualExposes-DwA08f_D.js","assets/preload-helper-LZM-Uoqt.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-LZM-Uoqt.js';

const remoteEntryPromise = __vitePreload(() => import('./remoteEntry-Ck56L7k5.js'),true              ?__vite__mapDeps([0,1,2,3]):void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
