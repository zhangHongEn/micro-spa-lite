<template>
<div style="display: flex;">
  <el-menu
    :default-active="pathname"
    class="el-menu-vertical-demo"
  >
    mfe-main {{startTime}}
    <el-sub-menu index="vite-vue-app">
      <template #title>
        <span>vite-vue-app</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/micro-spa-lite/vite-vue-app/home/" @click="navigateToUrl('/micro-spa-lite/vite-vue-app/home/')">home</el-menu-item>
        <el-menu-item index="/micro-spa-lite/vite-vue-app/about" @click="navigateToUrl('/micro-spa-lite/vite-vue-app/about')">about</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="vite-vue-app">
      <template #title>
        <span>rspack_react_app</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/micro-spa-lite/rspack_react_app/home" @click="navigateToUrl('/micro-spa-lite/rspack_react_app/home')">home</el-menu-item>
        <el-menu-item index="/micro-spa-lite/rspack_react_app/about" @click="navigateToUrl('/micro-spa-lite/rspack_react_app/about')">about</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
  <div id="mfe-apps" />
</div>
</template>
<script setup lang="ts">
const startTime = new Date(Date.now()).toLocaleTimeString()
import { ref } from "vue";
const location = window.location
import {navigateToUrl} from "single-spa"
const pathname = ref(location.pathname)
window.addEventListener("popstate", () => {
  pathname.value = location.pathname
})
</script>

