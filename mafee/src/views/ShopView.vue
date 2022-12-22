<script setup>
import { beers } from '../store/beers.js'
import { getBeers } from '../firebase/beers.js';
import { onMounted } from 'vue';
import Card from '../components/Card.vue';

onMounted(()=>{
    getBeers()
})

</script>

<template>
<div class="beers">
<Card v-for="beer in beers" :beer="beer" :key="beer.id" />
</div>
</template>

<style scoped>
.beers{
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    justify-content: center;
    align-items: center;
}

</style>