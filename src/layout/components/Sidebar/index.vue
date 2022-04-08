<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical"
        background-color="transparent"
        text-color="#fff"
        :collapse="isCollapse"
      >
        <el-menu-item
          v-for="(item, index) in permissions"
          :key="index"
          :index="index + 1"
        >
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import { useStore } from 'vuex';

const store = useStore();

const isCollapse = computed(() => store.state.app.slidebar);
const permissions = store.state.permission.routes;
const aa = 1221;
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  background: linear-gradient(0deg, #3150dc, #252ca8);
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
  min-height: 100%;
}
</style>
