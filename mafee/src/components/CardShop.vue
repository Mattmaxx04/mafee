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
            <h6 class="name">{{ beer.type }}</h6>
            <h6 class="price">${{ beer.price }}</h6>
        </div>
        <div class="bottom">
            <div class="beer__info">
                <p>Ibu: {{ beer.ibu }}</p>
                <p>%Alc: {{ beer.alc }}</p>
            </div>
            <div v-if="user" class="beer__info2">
                <p>Ibu: {{ beer.ibu }}</p>
                <p>%Alc: {{ beer.alc }}</p>
            </div>
            <div class="cart">
                <button v-if="user" @click="addToCart(beer)"><img src="../assets/addCart-ico.png" alt=""></button>
            </div>
        </div>
        <p class="stock">Stock: {{ beer.stock }}</p>
    </div>
</template>

<style scoped>
.beers {
    max-width: 16vw;
    display: flex;
    flex-direction: column;
    flex: 25%;
    border: 12px var(--color-btn) solid;
    border-radius: 0rem 0rem 2rem 2rem;
    /* border-style: groove; */
    /* padding: 2rem; */
    /* border-radius: 10% 90% 10% 90% / 75% 15% 85% 25% ; */
    position: relative;
    border-image: url(../assets/background-color.jpg);
    border-image-width: 15rem;
}

.beer {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    width: 12vw;
    gap: 1rem;
    margin-top: 1rem;
    border-top: var(--color-btn) 0.3rem solid;
    border-bottom: var(--color-btn) 0.3rem solid;
    padding-top: 1rem;
    padding-bottom: 0.7rem;
}

.price {
    color: var(--color-primary);
}

.name{
    text-transform: uppercase;
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
    color: transparent;
    position: absolute;
}

.beer__info p{
    font-weight: bold;
}

.beer__info:hover{
    background-color: var(--color-btn);
    padding: 2.5rem 2rem 1rem 2rem;
    color: black;
    text-transform: uppercase;
    opacity: 0.8;
    font-size: 1rem;
    /* position: absolute; */
    bottom: 10rem;
}

.beer__info2 {
    color: transparent;
    position: absolute;
}

.beer__info2 p{
    font-weight: bold;
}

.beer__info2:hover{
    background-color: var(--color-btn);
    padding: 2.5rem 2rem 1rem 2rem;
    color: black;
    text-transform: uppercase;
    opacity: 0.8;
    font-size: 1rem;
    /* position: absolute; */
    bottom: 17rem;
}

button img {
    width: 2rem;
}

.stock{
    font-weight: bold;
    border: 4px var(--color-btn) solid;
    padding: 0.6rem;
    margin-top: 4rem;
    border-radius: 1rem;
    font-size: 0.75rem;
}

/* .cart{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 1rem;
} */

.cart button{
    margin: 2rem 0rem 1rem 0rem;
    border-radius: 1rem;
    border: 4px var(--color-btn) solid;
}

.cart img{
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
