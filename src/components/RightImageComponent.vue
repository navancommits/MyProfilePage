<script setup>
import PersonalDetails from "./PersonalDetails.vue"
import ProfileDetails from "./ProfileDetails.vue"
import {provide} from 'vue'

provide('abtalt',"About navan")
const htmlString="<center><img alt='navan logo' src='https://www.kaisercraft.com.au/cdn/shop/products/N_8b5d93b1-fda7-48c8-81b1-c35ab5983aee.jpg?v=1653445681&width=200' /></center>"
</script>

<template>
  <main>
    <ProfileDetails />
  </main>
  <personal>
    <div v-html="htmlString" />

    <div class="wrapper">
      <PersonalDetails name="Navan Sundarrajan" blurb="Welcome to my page" />
    </div>
  </personal> 
</template>

<style scoped>
personal {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width:125px;
  height:125px;
  border-radius:80px;
}

@media (min-width: 1024px) {
  personal {
    display: flex;
    place-items: center;
    padding-left: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    width:125px;
    height:125px;
    border-radius:80px;
  }

  personal .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
