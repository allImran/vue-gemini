<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="max-w-7xl mx-auto">
    <MainNav />
    <div class="mt-20">
      <RouterView />
    </div>
  </main>
</template>

<style>
.router-link-active{
  color: green;
}
</style>
