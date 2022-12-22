<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  
<Header />
<main>
  <RouterView />
</main>
<Footer />
</template>

<style scoped>
#Footer{
  bottom: 0;
}
main{
  min-height: 90vh;
}
</style>
