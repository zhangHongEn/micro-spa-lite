import { registerApplication, start } from 'single-spa';
import { createApp } from 'vue';
import { loadRemote, getInstance } from '@module-federation/runtime';
import App from './App.vue';
import { apps } from "../../mfe.json";

console.log('render main', +new Date() - window.__mfe__startTime);
function printRenderChildAppTime() {
  console.log('render child app', +new Date() - window.__mfe__startTime);
}

const app = createApp(App);

app.mount('#app');

apps.forEach((item) => {
  const appCode = item.appCode;
  registerApplication(
    appCode,
    () => loadRemote(`${appCode}/main`).finally(printRenderChildAppTime),
    ({ pathname }) => item.routes.some(route => pathname.startsWith(route.replace(/\/?$/, "/")))  ,
  );
});
start();