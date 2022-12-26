<script setup>
import {loginWithMail} from '../firebase/auth.js'
</script>

<template>

    <form @submit.prevent="loginWithMail(this.email, this.password)" action="" class="login__form">
        <h3>Login</h3>
        <label for="">Email address *</label>
        <input v-model="email" type="text">
        <label for="">Password</label>
        <input v-model="password" type="text">
        <button type="submit" @click="loginWithMail">Login</button>
        <a href="">Lost your password?</a>
    </form>

</template>

<style scoped>

a{
    text-decoration: none;
    color: black;
}
label{
    color: var(--color-text-main);
}
input{
    font-size: 1.5rem;
    border: var(--color-text-main) 2px solid;
}
.login__form {
    display: flex;
    flex-direction: column;
    width: 80%;
}

button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: var(--color-btn-dark);
    color: var(--color-text-ligth);
    width: 10%;
}

h3 {
    margin: 1.5rem;
    margin-top: 5rem;
    text-align: start;
}
</style>