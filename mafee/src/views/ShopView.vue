<script setup>
import List from '../components/List.vue';
import { beers } from '../store/beers.js'
import { getBeers } from '../firebase/beers.js';
import { onMounted } from 'vue';

onMounted(() => {
    getBeers()
})

</script>

<template>

</template>

<style scoped>



</style>