<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

import { ref } from "vue";
const helloText = ref("")
function onHelloText(response) {

  helloText.value = response;
}
</script>

<template>
  <NavBar @on-hello-text="onHelloText" />

  <pre class="mt-18">
    {{ helloText.message }}

  </pre>
  <div class="mt-5">
    <RouterView />
  </div>
</template>

<style>
@import "tailwindcss";
</style>
