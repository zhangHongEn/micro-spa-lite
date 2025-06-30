const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/remoteEntry-CTC34y8w.js","assets/vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__-DAs6oBq8.js","assets/virtualExposes-BeZzJ_qy.js","assets/preload-helper-IPTOQvaJ.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-IPTOQvaJ.js';

const remoteEntryPromise = __vitePreload(() => import('./remoteEntry-CTC34y8w.js'),true              ?__vite__mapDeps([0,1,2,3]):void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
