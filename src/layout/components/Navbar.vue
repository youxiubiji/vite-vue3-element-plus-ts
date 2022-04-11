<template>
  <el-header class="header-container">
    <el-switch v-model="value1" @change="change" />
  </el-header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const value1 = ref(store.state.app.slidebar);
const change = () => {
  store.dispatch('app/toggleSideBar');
};
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
}
</style>
