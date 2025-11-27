<template>
  <div class="main-app">
    <h1>Vue3 主应用</h1>
    <!-- 嵌入 React 子应用 -->
    <WujieVue
      width="100%"
      height="600px"
      :url="subAppUrl"
      :name="subAppName"
      :props="subAppProps"
      @onLoad="handleSubAppLoad"
      @onError="handleSubAppError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { watch } from "vue";
import WujieVue from "wujie-vue3";

const { bus } = WujieVue;

// 子应用配置（React 子应用的运行地址，后续启动子应用后会用到）
const subAppName = ref("react-sub-app"); // 子应用唯一标识（必须唯一）
const subAppUrl = ref("http://localhost:1074"); // 子应用端口（后续配置 React 子应用为 3001）

// 主应用向子应用传递的 props（可选）
const subAppProps = ref({
  mainAppName: "Vue3 主应用",
  token: "main-app-token-123",
});

const router = useRouter();
/** 监听子应用的数据 */
bus.$on("subAppData", (data: string) => {
  console.log('data: ', data);
});
/** 监听子应用的数据 */

watch(
  () => router.currentRoute.value.meta.subAppPath,
  (newVal) => {
    if (newVal === undefined) return;
    bus.$emit("routeChange", newVal);
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.main-app {
  padding: 20px;
}
</style>
