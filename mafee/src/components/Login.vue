<script setup>
import {loginWithMail} from '../firebase/auth.js'


</script>

<template>

    <form @submit.prevent="loginWithMail(this.email, this.password)" action="" class="login__form">
        <!-- <h3>Login</h3> -->
        <div class="title2">
            <h2 class="text-center">LOGIN</h2>
        </div>
        <label for="">Email address *</label>
        <input v-model="email" type="text">
        <label for="">Password *</label>
        <input v-model="password" type="text">
        <button type="submit" @click="loginWithMail" class="btn__more2"><p>LOGIN</p></button>
        <a href="">Lost your password?</a>
    </form>

</template>

<style scoped>

.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 2rem 0rem 2rem 0rem;
    margin: 2rem 6rem 3rem 6rem;
    border-radius: 1rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

a{
    text-decoration: none;
    color: black;
    /* text-align: center; */
    margin-top: 2rem;
    margin-left: 2.2rem;
}

a:hover{
    color: var(--color-btn);
}

label{
    color: var(--color-text-main);
    margin-bottom: 1rem;
}
input{
    font-size: 1.5rem;
    border: var(--color-text-main) 2px solid;
    /* padding-bottom: 2rem; */
    margin-bottom: 2rem;
}
.login__form {
    display: flex;
    flex-direction: column;
    width: 60%;
}

/* button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: var(--color-btn-dark);
    color: var(--color-text-ligth);
    width: 10%;
} */

.btn__more2 {
    background: none;
    border: 2px black solid;
    padding: 0.5rem;
    width: 15rem;
}

.btn__more2 p {
    background: var(--color-btn);
    font-weight: bold !important;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
    font-size: 1rem !important;
}

.btn__more2:hover {
    border: 4px var(--color-btn) solid;
}

.btn__more2 p:hover {
    background: black;
    color: var(--color-btn);
    border: 4px solid var(--color-btn);
}

h3 {
    margin: 1.5rem;
    margin-top: 5rem;
    text-align: start;
}
</style>