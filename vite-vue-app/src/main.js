

import { createApp } from 'vue'
import { RouterView } from "vue-router"
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/micro-spa-lite/vite-vue-app/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/micro-spa-lite/vite-vue-app/about',
      name: 'about',
      component: () => import('./views/AboutView.vue'),
    },
  ],
})

let app
let container
export async function mount(props) {
  container = document.createElement('div')
  document.getElementById("mfe-apps").appendChild(container)
  app = createApp(RouterView)
  app.use(router)
  app.mount(container)
}

export async function unmount() {
  app.unmount()
  container.remove()
}

export async function bootstrap() {}
