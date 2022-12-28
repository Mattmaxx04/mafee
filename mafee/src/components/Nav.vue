<script setup>
import { RouterLink } from 'vue-router'
import { logout } from '../firebase/auth.js'
import Cart from './Cart.vue'
import cart from '../store/cart'
import user from '../store/user'
import { computed } from '@vue/reactivity'


const Swal = SweetAlert;
const where = ()=> {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        confirmButtonText: 'Cool'
      });
    }

const logoutmesage = ()=> {
      Swal.fire({
        title: 'GoodBye!',
        text: 'Come back soon!',
        confirmButtonText: 'Cool'
      });
    }    
    

let total = computed(() => cart.value.map(beer => beer.quantity * beer.price).reduce((beer1, beer2) => beer1 + beer2, 0))


</script>

<template>
    <div class="nav__container">

        <button class="where" @click.prevent="where">WHERE TO TRY?</button>
        <div class="nav__links">
            <RouterLink to="/"> HOME </RouterLink>
            <RouterLink to="/about"> WHAT WE OFFER</RouterLink>
            <RouterLink to="/workwithus"> MEET THE TEAM</RouterLink>

            <img src="../assets/mafee-logo.png" class="nav__logo" alt="logo" srcset="">

            <RouterLink to="/reservation"> RESERVATION </RouterLink>
            <RouterLink to="/contactus"> CONTACT US </RouterLink>
            <RouterLink to="/blogmain"> BLOG </RouterLink>
            <RouterLink to="/shop"> SHOP </RouterLink>

        </div>
        <a class="btn__menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
            aria-controls="offcanvasExample">
            <i class="bi bi-list"></i>
        </a>
        <div class="offcanvas offcanvas-end show text-bg-dark" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Mafee Beers</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div hidden>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad provident a non eaque maiores?</p>
                </div>

                <div class="nav__links__off">
                    <RouterLink to="/"> HOME </RouterLink>
                    <RouterLink to="/about"> WHAT WE OFFER</RouterLink>
                    <RouterLink to="/workwithus"> MEET THE TEAM</RouterLink>
                    <RouterLink to="/reservation"> RESERVATION </RouterLink>
                    <RouterLink to="/contactus"> CONTACT US </RouterLink>
                    <RouterLink to="/blogmain"> BLOG </RouterLink>
                    <RouterLink to="/shop"> SHOP </RouterLink>

                </div>
                <div v-if="!user">
                    <p> Welcome! You need to login if you want to buy our products.</p>
                </div>
                <div v-if="user">
                    <p> Hello! Thanks for visit us!.</p>
                    <p v-if="cart.length == 0"> When you start shopping you will see your cart here!</p>
                </div>

                <div class="cart" v-if="user">
                    <div v-if="cart.length != 0" class="head__list">
                        <h6>Product</h6>
                        <h6>Quantity</h6>
                        <h6>Price</h6>
                        <h6>Sub-Total</h6>
                    </div>
                    <Cart v-for="beer in cart" :beer="beer" :key="beer.id" />
                    <div v-if="cart.length != 0" class="total">
                        <h3>Total $</h3>
                        <input type="text" readonly class="form-control-plaintext" :value='total'>
                    </div>
                </div>
                <div class="button__buy">
                    <RouterLink v-if="cart.length != 0" to="/checkout" class="btn__buy"> BUY! </RouterLink>
                </div>

                <div class="btns">
                    <RouterLink to="/account" class="btn__login"> Login </RouterLink>

                    <button class="btn__logout" @click="logout(), logoutmesage()">Logout</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.btns{
    display: flex;
    gap: 1rem;
}
.nav__links__off {
    display: none;
}

.btn__login {
    width: 50%;
    padding: 0.8rem;
    margin: 1rem;
    background: var(--color-btn);
}

.btn__logout{
    width: 50%;
    padding: 0.8rem;
    margin: 1rem;
    background: gray;
}

.btn__buy {
    width: 4rem;
    padding: 0.8rem;
    margin: 1rem;
    background: var(--color-btn);
}

.menu__link {
    font-size: 1.5rem;
}

.offcanvas-body p {
    margin: 1rem;

}

.where {
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: bold;
    color: white;
    background: none;
    border: none;
}

.btn__menu {
    color: white;
    font-size: 3.5rem;
    margin-right: 1rem;
    margin-top: 3.5rem;
}

a {
    text-decoration: none;
    color: var(--color-text-ligth);
}

a:hover {
    color: var(--color-btn);
}

.nav__container {
    margin-top: -0.8rem;
    display: flex;
    justify-content: space-between;
}

.nav__links {
    width: 80%;
    gap: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 2.5rem;
    font-size: 1rem;
    margin-top: 5.5rem;
}

.nav__links a {
    font-weight: bold;
}

.nav__logo {
    width: 9%;
}

.head__list {
    display: flex;
    justify-content: space-between;
}

.head__list h6 {
    color: var(--color-text-dark);
}

.cart {
    background-image: url(../assets/background-icon-2.jpg);
    background-size: cover;
    width: 23rem;
}

.total {
    display: flex;
    justify-content: flex-end;
}

.total h3 {
    color: var(--color-text-dark);
}

input {
    width: 4rem;
    color: var(--color-primary);
    font-size: x-large;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000000;
    padding: 0;
    height: 2rem;
}

.btn__buy{
    display: flex;
    justify-content:flex-end;
}

@media (max-width: 480px) {
    .where{
        display: none;
    }
    .nav__links {
        display: none;
    }

    .nav__links__off {
        display: flex;
        gap: 0.5rem;
        padding: 1rem;
        margin: 1rem;
        flex-direction: column;
    }
}

@media (max-width: 768px) {}

@media (max-width: 1024px) {}

@media (max-width: 1200px) {}
</style>