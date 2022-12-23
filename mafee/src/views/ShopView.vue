<script setup>
import { ref } from 'vue';
import { beers } from '../store/beers.js'

const beersF = ref('')
const beerB = ref([])

const beerFilter =() => {
    // console.log('filtrando');
    // console.log(posts.value.forEach(post => console.log(post)));
    // console.log(posts.value.filter(post => post.title.toLowerCase().includes(filtro2.value.toLowerCase())));
    let filter1 = beers.value.filter(
        (beer) =>
            beer.name.toLowerCase().includes(beersF.value));
    let filter3 = filter1.filter((beer) => categoryF.value.includes(beer.type.value))
    if (categoryF.length > 0) {
        beerB.value = filter3;
    } else {
        beerB.value = filter1;
    }


}
</script>

<template>

</template>

<style scoped>



</style>