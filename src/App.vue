<template>
<NavBar />

<router-view />
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>
<style>
/* Ensure #app takes the full height of the viewport */
#app {
  height: 100vh; /* Full height of viewport */
  width: 100%;   /* Full width of viewport */
  display: flex; /* Use flexbox to center child components */
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
}
</style>