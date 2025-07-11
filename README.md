# federated-spa-boilerplate 🚀

Ultra‑lightweight micro‑frontend boilerplate (~50 LOC) with single‑spa, Module Federation & Chrome extension support

Start building blazing‑fast micro‑frontends in minutes – no boilerplate bloat, full performance toolkit.

---

## 🌐 Online Demo Experience

🔗 **Host Demo**: Click here to see the live demo -> [Live Demo](https://zhanghongen.github.io/module-federation-spa-boilerplate/vite-vue-app/home/) 

![](./docs/img/performance.png)
![](./docs/img/develop.gif)


## 🚀 Features

-	**Minimal Design**: Core logic written in fewer than 50 lines of JavaScript, enabling micro-frontend app loading, mounting, and unmounting ([mfe-main](https://github.com/zhangHongEn/module-federation-spa-boilerplate/tree/main/mfe-main/src/preloadPlugin.js))
-	**Lightweight Dependencies**: No additional runtime frameworks; relies only on single-spa and Module Federation
-	**High-Performance Loading**: Uses manifest + runtimePlugins to enable parallel loading of main and sub-apps on first screen, eliminating waterfall loading
-	**Flexible Development Mode**: Supports local development of any sub-app via Chrome extension proxy without modifying the main app

---

## 🧩 Single Module Development Guide

If you only want to start a single sub-module for development and debugging, you can follow these steps:
1. git clone https://github.com/zhangHongEn/module-federation-spa-boilerplate.git
2. `pnpm install && pnpm run dev`
3. open chrome plugin `module-federation`
4. vite-vue-app proxy to `http://localhost:5001/mf-manifest.json`
5. rspack-react-app proxy to `http://localhost:5002/mf-manifest.json`

---

## Add a New Application
mfe.json
```json
{
  "apps": [
    {
      "appCode": "vite-vue-app",
      "routes": ["/module-federation-spa-boilerplate/new-app"],
      "entry": "entry": "http://localhost:5003/mf-manifest.json"
    }
  ]
}