<template>
  <el-container style="height: 100vh;">
    <!-- 左侧菜单 -->
    <el-aside width="200px" style="background-color: #fff; border-right: 1px solid #e6e6e6;">
      <div class="logo" v-if="logoText">
        {{ logoText }}
      </div>
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router @select="handleMenuSelect"
        background-color="#fff" text-color="#333" active-text-color="#409EFF">
        <template v-for="route in routes" :key="route.path">
          <el-sub-menu :index="route.path" v-if="route.meta.level === 0">
            <template #title>
              <el-icon v-if="route.meta.icon && iconMap[route.meta.icon]" style="margin-right: 8px;">
                <component :is="iconMap[route.meta.icon as keyof typeof iconMap]" />
              </el-icon>
              <span>{{ route.meta.title || route.name }}</span>
            </template>
            <template v-for="childRoute in route.children || []" :key="childRoute.path">
              <el-menu-item :index="childRoute.path">
                <el-icon v-if="childRoute.meta.icon && iconMap[childRoute.meta.icon]" style="margin-right: 8px;">
                  <component :is="iconMap[childRoute.meta.icon as keyof typeof iconMap]" />
                </el-icon>
                <span>{{ childRoute.meta.title || childRoute.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-aside>

    <!-- 右侧内容区域 -->
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header style="background-color: #fff; border-bottom: 1px solid #e6e6e6; padding: 0 20px;">
        <div class="header-content">
          <div class="header-title">{{ currentRouteTitle }}</div>
          <div class="header-actions">
            <el-dropdown>
              <el-button type="text" style="color: #333;">
                <el-icon>
                  <User />
                </el-icon>
                <span>用户</span>
                <el-icon class="el-icon--right">
                  <ArrowDown />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>

      <!-- 路由出口：子路由页面会渲染到这里 -->
      <el-main style="padding: 20px; background-color: #f5f5f5;">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  User,
  ArrowDown,
  HomeFilled,
  CreditCard,
  Present,
} from '@element-plus/icons-vue';

const route = useRoute();
const router = useRouter();

// 图标映射对象，将字符串名称映射到实际图标组件
const iconMap = {
  HomeFilled,
  CreditCard,
  Present,
};

// 过滤后的路由列表（排除hidden的路由）
const routes = computed(() => {

  return router.getRoutes().filter(item => {
    // 排除特殊路由
    return item.path !== '*' && item.path !== '/404' && item.path !== '/';
  });
});

// 当前激活的菜单
const activeMenu = computed(() => {
  // 处理嵌套路由，获取正确的激活菜单
  if (route.matched.length > 1) {
    return route.matched[1].path;
  }
  return route.path;
});

// 当前路由标题
const currentRouteTitle = computed(() => {
  return route.meta.title || '首页';
});

// logo文字
const logoText = ref('Vue3 Admin');

// 菜单选中事件
const handleMenuSelect = (key: string, keyPath: string[]) => {
  console.log('选中菜单：', key, keyPath);

  // 示例：如果是需要登录的路由，可在这里校验登录状态
  const targetRoute = router.getRoutes().find(item => item.path === key);
  if (targetRoute?.meta.requiresAuth) {
    // 模拟登录校验（实际项目中替换为真实登录状态判断）
    // const isLogin = localStorage.getItem('token');
    // if (!isLogin) router.push('/login');
  }
};
</script>

<style scoped>
/* 布局容器满高 */
.el-container {
  height: 100%;
}

/* 左侧菜单区域 */
.el-aside {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

/* Logo样式 */
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #409EFF;
  border-bottom: 1px solid #e6e6e6;
}

/* 菜单样式优化 */
.el-menu-vertical-demo {
  flex: 1;
  border-right: none;
  background-color: #fff;
}

/* 菜单项样式 */
:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}

/* 菜单项hover样式 */
:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
  background-color: #ecf5ff !important;
}

/* 激活菜单项样式 */
:deep(.el-menu-item.is-active) {
  color: #409EFF !important;
  background-color: #ecf5ff !important;
}

/* 子菜单激活样式 */
:deep(.el-sub-menu.is-active > .el-sub-menu__title) {
  color: #409EFF !important;
  background-color: #ecf5ff !important;
}

/* 右侧内容区域 */
.el-container {
  background-color: #f5f5f5;
}

/* 顶部导航栏样式 */
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 顶部导航栏内容 */
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

/* 顶部标题 */
.header-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

/* 顶部操作区 */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* 下拉菜单样式 */
:deep(.el-dropdown-menu) {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

/* 主内容区域 */
.el-main {
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
}
</style>