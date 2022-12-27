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
    if (!cart.value.includes(beer.id)) {
        addCart({
            beerId: beer.id,
            date: Date.now(),
            type: beer.type,
            userId: user.value.id,
            img: beer.img,
            quantity: 1,
            price: beer.price
        })
        cart.value.forEach(beerAdded => {
            console.log(beer.id);
            if (beerAdded.beerid == beer.id) {
                // beerAdded.quantity++
                beer.stock--
            }
        })
    } else {
        cart.value.forEach(beerAdded => {
            if (beerAdded.type == beer.type) {
                if (beer.stock > 0) {
                    beerAdded.quantity++;
                    beer.stock--;
                } else {

                }

            }
        })

    }
}
</script>

<template>
    <div class="beers">

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
                <button @click="addToCart(beer)"><img src="../assets/addCart-ico.png" alt=""></button>
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