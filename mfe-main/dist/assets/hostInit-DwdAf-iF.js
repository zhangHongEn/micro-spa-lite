const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/remoteEntry-M-7kxLe8.js","assets/mfe_mf_2_main__mf_v__runtimeInit__mf_v__-ChqWbBKw.js","assets/virtualExposes-DwA08f_D.js","assets/preload-helper-Bnnv1QbC.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-Bnnv1QbC.js';

const remoteEntryPromise = __vitePreload(() => import('./remoteEntry-M-7kxLe8.js'),true              ?__vite__mapDeps([0,1,2,3]):void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
