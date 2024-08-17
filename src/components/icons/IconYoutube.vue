<script setup>
const eventEmit=defineEmits()
</script>

<template>
  <img src='../../assets/youtube.png' class=thumbnail @click="eventEmit('hrefClick','https://www.youtube.com/@navan1725')">
</template>

