<script setup>
import {inject} from 'vue'

const abtAltTag=inject('abtalt')

const urlEmit=defineEmits(['hrefHandler'])
function imgClickHandler()
{
    urlEmit('hrefClick',"https://mvp.sitecore.com/en/Directory/Profile?id=647544991a974739358908dbd59eaf10")
}

</script>
<template>
  <img src='../../assets/aboutme.jpg'  class='thumbnail' :alt=abtAltTag @click="imgClickHandler" />
</template>

<style scoped>
.thumbnail {
  width:30px;
  height:30px;
  border-radius:5px;
  cursor:pointer;
}
</style>
