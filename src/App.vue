<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'

import About from './about.vue'

const routes = {
  '/': Home,
  '/about': About
  
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>  
  <component :is="currentView" />
</template>
