<script setup>
import { onMounted } from 'vue';
import cart from '../store/cart.js'
import { addCart, getCart } from '../firebase/cart.js'
import user from '../store/user.js'

onMounted(() => {
    getCart()
})

const props = defineProps({
    beer: {},
    typeof: Object
})

const addToCart = (beer) => {
    let index = cart.value.findIndex(beerI => beerI.id == beer.id)
    if (beer.stock > 0) {
        if (index == -1) {
            cart.value.push({
                id: beer.id,
                date: Date.now(),
                type: beer.type,
                userId: user.value.id,
                img: beer.img,
                quantity: 1,
                price: beer.price
            })
        } else {
            cart.value[index].quantity++
        }
        beer.stock--
    }
    console.log(cart);
}
</script>

<template>
    <div class="beers">
        <img v-if="beer.stock==0" class="img__beer__out" src="../assets/outstock.png" alt="">
        <img :src="beer.img" class="img__beer" alt="beer">

        <div class="beer">
            <h6>{{ beer.type }}</h6>
            <h6 class="price">${{ beer.price }}</h6>
        </div>
        <div class="bottom">
            <div class="beer__info">
                <p>Ibu: {{ beer.ibu }}</p>
                <p>%Alc: {{ beer.alc }}</p>
            </div>
            <div>
                <button v-if="user" @click="addToCart(beer)"><img src="../assets/addCart-ico.png" alt=""></button>
            </div>
        </div>
        <p>Stock: {{ beer.stock }}</p>
    </div>
</template>

<style scoped>
.beers {
    max-width: 12vw;
    display: flex;
    flex-direction: column;
    flex: 25%;
    border: 0.5px black solid;
}

.beer {
    display: flex;
    justify-content: space-around;
    width: 12vw;
}

.price {
    color: var(--color-primary);
}

.beer h6 {
    font-weight: bold;
}

.img__beer {
    width: 99%;
}

.img__beer__out {
    width: 99%;
    position: absolute;
    top: 4rem;
    z-index: 10;
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 12vw;
}

.beer__info {
    color: var(--color-text-main);
}

button img {
    width: 2rem;
}
</style>