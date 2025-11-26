<template>
  <div>
    <!-- 导航容器 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      :router-bridge="handleRouteBridge"
    >
      <el-sub-menu index="1">
        <template #title>react项目</template>
        <el-menu-item index="/wujieRoute" @click="handleReactAppClick">react子应用</el-menu-item>
        <el-menu-item index="/wujieRoute">react子应用2</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>vue主项目</template>
        <el-menu-item index="/">vue项目</el-menu-item>
        <el-menu-item index="/">vue项目2</el-menu-item>
      </el-sub-menu>
    </el-menu>

    <!-- 显示区域 - 使用router-view显示路由对应的页面 -->
    <div class="display-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref("/wujieRoute")
const router = useRouter()

// 路由桥接函数，用于处理菜单点击到路由跳转的逻辑
const handleRouteBridge = (index: string) => {
  console.log("路由跳转:", index)
  return index
}

// 处理React应用点击
const handleReactAppClick = () => {
  // 可以在这里添加额外的React应用加载逻辑
  console.log("加载React子应用")
}
</script>

<style scoped>
.el-menu-demo {
  margin-bottom: 20px;
}

.display-area {
  width: 100%;
  min-height: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 20px;
}
</style>
