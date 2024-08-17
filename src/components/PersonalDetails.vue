<script setup>
import {ref,reactive} from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  blurb: {
    type: String
  }
})

const nickName=ref(null)
const welcomeMsg=ref(null)

defineExpose({
  nickName,
  welcomeMsg
})

const styledFallbackValue=reactive({color:"purple", text: "No blurb present", style:"italic"})
</script>

<template>  
  <div class="personalinfo">
    <h1 class="blue" v-if="nickName">{{ nickName }}</h1>
    <h1 class="blue" v-else>{{ name }}</h1>
    <h3 v-if="blurb">
      {{welcomeMsg}} {{blurb}}
    </h3>
    <h3 v-else>
      <div v-styledfallback=styledFallbackValue></div>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: 0px;
}


h3 {
  font-size: 1.2rem;
  padding-left: 10px;
  
}

.personalinfo h1,
.personalinfo h3 {
  text-align: center;
}

@media (min-width: 1024px) {  
  .personalinfo h1,
  .personalinfo h3 {
    text-align: left;
  }
}
</style>
