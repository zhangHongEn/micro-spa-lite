const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DvoXuk2q.js","assets/preload-helper-DH9EAith.js","assets/vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__-DAs6oBq8.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-DH9EAith.js';

const exposesMap = {
    
        "./main": async () => {
          const importModule = await __vitePreload(() => import('./main-DvoXuk2q.js').then(n => n.m),true              ?__vite__mapDeps([0,1,2]):void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      
  };

export { exposesMap as default };
