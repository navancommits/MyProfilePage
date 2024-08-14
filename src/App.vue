<script setup>
import LeftImageComponent from "./components/LeftImageComponent.vue"
import RightImageComponent from "./components/RightImageComponent.vue"
</script>

<template>
  <component :is="Math.random()>0.5?LeftImageComponent:RightImageComponent" />
</template>

<style scoped>

</style>
