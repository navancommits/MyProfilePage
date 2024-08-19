<script setup>

import PersonalDetails from "./PersonalDetails.vue"
//import ProfileDetails from "./ProfileDetails.vue"
import {provide,defineAsyncComponent,ref,onMounted,onBeforeMount} from 'vue'
import LoadingComponent from "./LoadingComponent.vue"
import ErrorComponent from "./ErrorComponent.vue"
import MyAgeTicker from './MyAgeTicker.vue'

provide('abtalt',"About navan")

const ProfileDetailsAsync=defineAsyncComponent({
  loader: ()=>import("./ProfileDetails.vue"),

  loadingComponent: LoadingComponent,

  delay: 0,

  errorComponent: ErrorComponent,

  timeout: 2000
})

const child=ref(null)
onMounted(()=> {
  child.value.nickName="Navan"
  child.value.welcomeMsg="Howdy! "
})
</script>

<template>
  <div>
    <MyAgeTicker />
    <personal>
    
      <img alt="navan logo" class="logo" src="../assets/navan.jpg" />

      <div class="wrapper">
        <PersonalDetails name="Navan Sundarrajan" blurb="This is my page" ref="child" />        
      </div>
      
    </personal>
  </div>
  <main>
    <ProfileDetailsAsync />
  </main>
  
</template>

<style scoped>
personal {
  line-height: 1.5;  
}

.logo {
  display: block;
  margin: 2rem auto 2rem;
  width:125px;
  height:125px;
  border-radius:10px;
}

@media (min-width: 1024px) {
  personal {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 20rem 2rem 0 0;
    width:125px;
    height:125px;
    border-radius:10px;
  }

  personal .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin: 20rem 2rem 0 0;
  }
}
</style>
