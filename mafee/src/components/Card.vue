<script setup>

const props = defineProps({
    beer: {},
    typeof: Object
})
</script>

<template>
    <div class="beers">
    <img :src="beer.img" class="img__beer" alt="beer">
    <h6>{{beer.type}}</h6>
    </div>

    <dic class="estono" hidden>
        <img src="../assets/main-beer-img-1.jpg" alt="">
        <img src="../assets/main-beer-img-2.jpg" alt="">
        <img src="../assets/main-beer-img-3.jpg" alt="">
        <img src="../assets/main-beer-img-4.jpg" alt="">
        <img src="../assets/main-beer-img-5.jpg" alt="">
        <img src="../assets/main-beer-img-6.jpg" alt="">
        <img src="../assets/main-beer-img-7.jpg" alt="">
        <img src="../assets/main-beer-img-8.jpg" alt="">
        <img src="../assets/main-beer-img-9.jpg" alt="">
        <img src="../assets/main-beer-img-10.jpg" alt="">
        <img src="../assets/main-beer-img-11.jpg" alt="">
        <img src="../assets/main-beer-img-12.jpg" alt="">
    
    </dic>
</template>

<style scoped>
.beers{
    max-width: 16vw;
    display: flex;
    flex-direction: column;
    flex: 25%;
    position: relative;
}

.img__beer{
    width: 100%;
}

h6{
    color: transparent;
    position: absolute;
}

h6:hover{
    background-color: var(--color-btn);
    padding: 1rem 5rem;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.8;
    font-size: 3rem;
}

</style>