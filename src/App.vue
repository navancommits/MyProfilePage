<script setup>
import PersonalDetails from './components/PersonalDetails.vue'
import ProfessionalInfo from './components/ProfileDetails.vue'

</script>

<template>
  <header>
    <img alt="navan logo" class="logo" src="./assets/navan.jpg" />

    <div class="wrapper">
      <PersonalDetails name="Navan Sundarrajan" blurb="This is navan's page" />
    </div>
  </header>

  <main>
    <ProfessionalInfo name="Navan's Profile" />
  </main>

  <footer>
    
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius:80px;
  height: 8rem;
  width:8rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    border-radius:80px;
    height: 8rem;
    width:8rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
