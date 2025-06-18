<template>
  <div class="home">
    <h1>local333 Vue Home</h1>
    <p>This is the main landing page of your Vue 3 app.</p>
    <router-link to="/micro-spa-lite/vite-vue-app/about">Go to About</router-link>
  </div>
</template>

<script setup>
// 无需逻辑，仅展示静态内容
</script>

<style scoped>
.home {
  padding: 20px;
}
a {
  color: #409eff;
  text-decoration: underline;
}
</style>