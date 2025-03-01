<template>
  <div id="app" class="flex items-center justify-center min-h-screen">
    <main class="container p-4">
      <router-view />
    </main>
  </div>
</template>

<style>
/* 若你不想在 template 裡直接寫 Tailwind class，也可以用 CSS 定義 */
#app {
  display: flex;
  align-items: center;      /* 垂直置中 */
  justify-content: center;  /* 水平置中 */
  min-height: 100vh;        /* 最小高度為視窗高度 */
}
</style>
