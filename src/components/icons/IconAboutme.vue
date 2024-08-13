<script setup>
import {inject} from 'vue'

const abtAltTag=inject('abtalt')
</script>
<template>
  <img src='../../assets/aboutme.jpg'  class='thumbnail' :alt=abtAltTag />
</template>

<style scoped>
.thumbnail {
  width:30px;
  height:30px;
  border-radius:5px;
}
</style>
