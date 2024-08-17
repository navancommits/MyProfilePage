<script setup>
const emitDef=defineEmits()
</script>

<template>
 <img src="../../assets/Github.png" alt="Github logo" class=thumbnail v-on:click="emitDef('hrefClick','https://github.com/navancommits')" />
</template>

