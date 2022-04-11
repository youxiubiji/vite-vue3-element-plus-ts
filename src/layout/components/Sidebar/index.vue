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
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isCollapse = computed(() => store.state.app.slidebar);
const permissions = store.state.permission.routes;
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
