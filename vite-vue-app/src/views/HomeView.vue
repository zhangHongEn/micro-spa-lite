<template>
  <div class="home">
    <a href="https://github.com/zhanghongen/micro-spa-lite" target="_blank" aria-label="GitHub">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577v-2.022c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.833 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.006.403 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.874.118 3.176.77.84 1.232 1.911 1.232 3.221 0 4.609-2.807 5.624-5.48 5.921.43.371.823 1.103.823 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
        />
      </svg>
    </a>
    <h1>Vue Home</h1>
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