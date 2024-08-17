<script setup>
const emit=defineEmits()
</script>

<template>
<img alt="LinkedIn logo" src="../../assets/li.webp" class=thumbnail v-on:click="emit('hrefClick','https://www.linkedin.com/in/navaneethakrishnansrnna/')" />

</template>

<style>
.thumbnail {
  width:25px;
  height:25px;  
  cursor:pointer;
}
</style>