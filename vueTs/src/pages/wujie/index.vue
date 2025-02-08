<template>
  <!--保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化 -->
  <WujieVue
    width="100%"
    height="100%"
    name="reactDemo"
    :url="vue3Url"
    :sync="true"
    :plugins="[InstanceofPlugin()]"
    alive
  ></WujieVue>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import WujieVue from "wujie-vue3";
import { InstanceofPlugin } from "wujie-polyfill";
import { useRoute, useRouter } from "vue-router";

const { bus } = WujieVue;

const domainMap = {
  dev: "http://localhost:1074",
  test: "http://localhost:1074",
  prod: "http://localhost:1074",
};

const router = useRouter();
const route = useRoute();

const vue3Url = ref(domainMap["dev"] + "#/" + route.meta.subAppPath);

// bus.$on("routerChange", (query: string) => {
//   const pathParam = JSON.parse(query);
//   router.push(pathParam);
// });

watch(
  () => route.meta.subAppPath,
  (newVal, oldVal) => {
    if (newVal === undefined) return;
    bus.$emit("routeChange", newVal);
  },
  {
    immediate: true,
  }
);

// 子应用登录失效时，通知主应用跳转登录页
bus.$on("loginInvalid", () => {
  alert("主应用执行登录失效逻辑");
});
</script>
