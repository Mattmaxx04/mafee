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