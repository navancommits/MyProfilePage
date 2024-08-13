<script setup>
import PersonalDetails from "./components/PersonalDetails.vue"
import ProfileDetails from "./components/ProfileDetails.vue"
import {provide} from 'vue'

provide('abtalt',"About navan")
</script>

<template>
  <header>
   <img alt="navan logo" class="logo" src="./assets/navan.jpg" />

    <div class="wrapper">
      <PersonalDetails name="Navan Sundarrajan" blurb="This is my page" />
    </div>
  </header>

  <main>
    <ProfileDetails />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width:125px;
  height:125px;
  border-radius:10px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    width:125px;
    height:125px;
    border-radius:10px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
