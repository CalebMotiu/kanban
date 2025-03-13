<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="mt-18">
    <RouterView />
  </div>
</template>

<style>
@import "tailwindcss";
</style>
