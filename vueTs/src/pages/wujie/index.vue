<template>
  <div class="main-app">
    <h1>Vue3 主应用</h1>
    <!-- 嵌入 React 子应用 -->
    <WujieVue width="100%" height="600px" :url="subAppUrl" :name="subAppName" :props="subAppProps"
      @onLoad="handleSubAppLoad" @onError="handleSubAppError" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 子应用配置（React 子应用的运行地址，后续启动子应用后会用到）
const subAppName = ref('react-sub-app'); // 子应用唯一标识（必须唯一）
const subAppUrl = ref('http://localhost:3001'); // 子应用端口（后续配置 React 子应用为 3001）

// 主应用向子应用传递的 props（可选）
const subAppProps = ref({
  mainAppName: 'Vue3 主应用',
  token: 'main-app-token-123',
});

// 子应用加载成功回调
const handleSubAppLoad = () => {
  console.log('React 子应用加载成功');
};

// 子应用加载失败回调
const handleSubAppError = (err: Error) => {
  console.error('React 子应用加载失败：', err);
};
</script>

<style scoped>
.main-app {
  padding: 20px;
}
</style>