<script setup>
import Cart from '../components/Cart.vue'
import cart from '../store/cart';
import user from '../store/user';
import UserInfo from '../components/UserInfo.vue'
import CreditCard from '../components/CreditCard.vue';
import { computed } from '@vue/reactivity'

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
            <CreditCard :user="user" />
        </div>

        <div class="bar-right">
            <div class="two">
                <h4>TOP RATED PRODUCTS</h4>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/main-beer-img-4.jpg" alt="">
                    <div class="p-3">
                        <h6>IPA</h6>
                        <div class="ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$390</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/main-beer-img-11.jpg" alt="">
                    <div class="p-3">
                        <h6>HONEY</h6>
                        <div class="ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$390</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/main-beer-img-5.jpg" alt="">
                    <div class="p-3">
                        <h6>IPA</h6>
                        <div class="ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
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


            <img src="../assets/blog-banner.jpg" class="pt-4" alt="">
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
    width: 4rem;
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

.bar-right img {
    width: 6rem;
}

.ratings {
    margin-right: 10px;
}

.ratings i {

    color: #cecece;
    font-size: 32px;
}

.rating-color {
    color: #fbc634 !important;
}
</style>