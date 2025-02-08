<template>
  <el-select
    v-model="value"
    placeholder="子应用跳转"
    size="large"
    style="width: 240px"
    @change="handleChange"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();

const value = ref("");
const options = [
  {
    value: "wujieDemo1",
    label: "跳到子应用的wujieDemo1",
  },
  {
    value: "wujieDemo2",
    label: "跳到子应用的wujieDemo2",
  },
];

const handleChange = () => {
  router.replace({ path: value.value });
};
</script>
