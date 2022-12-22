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
}

.img__beer{
    width: 100%;
}

</style>