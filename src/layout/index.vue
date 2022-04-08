<template>
  <div class="layout-container">
    <Sidebar></Sidebar>
    <div class="main-container">
      <Navbar></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';
</script>

<style scoped lang="scss">
.layout-container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.main-container {
  display: flex;
  flex-direction: column;
}
</style>
