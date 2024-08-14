<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  blurb: {
    type: String
  }
})

let styledFallbackValue={color:"purple", text: "No blurb present", style:"italic"}
</script>

<template>
  <div class="personalinfo">
    <h1 class="blue">{{ name }}</h1>
    <h3 v-if="blurb">
      {{blurb}}
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
