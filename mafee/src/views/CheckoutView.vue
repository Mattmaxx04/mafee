<script setup>
import Cart from '../components/Cart.vue'
import cart from '../store/cart';
import user from '../store/user';
import DataUser from '../components/DataUser.vue'
import UserInfo from '../components/UserInfo.vue'
import { computed } from '@vue/reactivity'

const Swal = SweetAlert;
const where = () => {
    Swal.fire({
        title: 'Thank you for your purchase',
        icon: 'success',
        imageAlt: 'Custom image',
    });
    cart.value=[]
}

let total = computed(() => cart.value.map(beer => beer.quantity * beer.price).reduce((beer1, beer2) => beer1 + beer2, 0))

</script>
<template>
    <div class="checkout__banner">
        <h2>CHECKOUT</h2>
    </div>
    <div class="d-flex container_main">
        <div class="cart">
            <div class="head__list">
                <h6>Product</h6>
                <h6>Quantity</h6>
                <h6>Price</h6>
                <h6>Sub-Total</h6>
            </div>
            <Cart v-for="beer in cart" :beer="beer" :key="beer.id" />
            <div class="d-flex justify-content-end">
                <h3>Total $</h3>
                <input type="text" readonly class="form-control-plaintext" :value='total'>
            </div>
            <UserInfo :user="user" />
            <DataUser :user="user" />
            <div class="d-flex justify-content-center">
                <router-link @click.prevent="where" class="m-3 btn__buy" to="/">BUY
                    <!-- <button >BUY</button> -->
                </router-link>
            </div>
        </div>

        <div class="bar-right">
            <div class="two d-flex flex-column justfy-content-center align-items-center">
                <h4>TOP RATED PRODUCTS</h4>
                <div class="d-flex justify-content-center align-items-center">
                    <img class="beers__img" src="../assets/main-beer-img-4.jpg" alt="">
                    <div class="p-3">
                        <h6>IPA</h6>
                        <p>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                        </p>
                        <p>$390</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img class="beers__img" src="../assets/main-beer-img-11.jpg" alt="">
                    <div class="p-3">
                        <h6>HONEY</h6>
                        <p>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                        </p>
                        <p>$390</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img class="beers__img" src="../assets/main-beer-img-5.jpg" alt="">
                    <div class="p-3">
                        <h6>IPA</h6>
                        <p>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                        </p>
                        <p>$420</p>
                    </div>
                </div>
            </div>
            <div class="one">
                <h4>FOLLOW US</h4>
                <div class="icons">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-vimeo"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>


            <img :class="banner__end" src="../assets/blog-banner.jpg" class="pt-4" alt="">
        </div>
    </div>

</template>
<style scoped>
.checkout__banner {
    background-image: url(../assets/main-home-slider-12.jpg);
    background-size: cover;
    background-position: 0% 37%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15rem;
    padding: 1.5rem;
    margin: 4rem 2.5rem;
}

.checkout__banner h2 {
    color: var(--color-text-ligth);
}

.cart {
    width: 78%;
    padding: 2rem;
    margin-left: 2.5rem;
    background-image: url('../assets/background-img-icon.jpg');
    background-size: cover;
}

.head__list {
    display: flex;
    justify-content: space-between;
}

.head__list h6 {
    color: var(--color-text-dark);
    font-weight: bold;
}

input {
    width: 5rem;
    color: var(--color-primary);
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000000;
    padding: 0;
    height: 2rem;
}

.shop__init h2 {
    color: var(--color-text-ligth);
    font-size: 4rem;
}

.bar-right {
    width: 20%;
    display: flex;
    flex-direction: column;
    border: 2px var(--color-primary) solid;
    margin-right: 2.5rem;
}

.beers__img {
    width: 6rem;
}

.two {
    padding: 2rem 0rem;

}

.two h4 {
    text-align: center;
    font-weight: bold;
}

.star {
    position: relative;

    display: inline-block;
    width: 0;
    height: 0;

    margin-left: .9em;
    margin-right: .9em;
    margin-bottom: 1.2em;

    border-right: .3em solid transparent;
    border-bottom: .7em solid #FC0;
    border-left: .3em solid transparent;

    /* Controlls the size of the stars. */
    font-size: 10px;
}

.star:before,
.star:after {
    content: '';

    display: block;
    width: 10;
    height: 0;

    position: absolute;
    top: .6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: .7em solid #fbc634;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
}

.star:after {
    transform: rotate(35deg);
}

.one {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.one h4 {
    font-weight: bold;
    color: var(--color-btn);
    border-top: 2px var(--color-btn) solid;
    padding-top: 2rem;
}

.one p {
    text-align: justify;
}

.one img {
    border-radius: 1rem;
}

.icons {
    display: flex;
    padding-bottom: 3rem;
    justify-content: space-around;
    width: 10rem;
}

.icons i:hover {
    color: var(--color-btn);
    -webkit-transform: scale(1.6);
    transform: scale(1.6);
    cursor: pointer;
}

.banner__end {
    width: 220px;
}

.btn__buy {
    background: none;
    border: 2px var(--color-text-ligth) solid;
    padding: 5rem;
    background: var(--color-btn);
    font-weight: bold;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
}

.btn__buy:hover {
    border: 4px var(--color-btn) solid;
}

.btn__buy p:hover {
    background: black;
    color: var(--color-btn);
    border: 4px solid var(--color-btn);
}
</style>