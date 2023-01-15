<script setup>
import {register} from '../firebase/auth.js'
</script>

<template>
     
<form @submit.prevent="register(this.email, this.password)" action="" class="signin__form">
    <div class="title2">
            <h2 class="text-center">SIGNIN</h2>
        </div>
    <label for="">Email address *</label>
    <input v-model="email" type="text">
    <label for="">Password *</label>
    <input v-model="password" type="text">    
    <button type="submit" @click="register" class="btn__more2">
        <p>SIGN IN</p></button>
</form>

</template>

<style scoped>

.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 2rem 1rem 2rem 1rem;
    margin: 6rem 5rem 3rem 6.5rem;
    border-radius: 1rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

form{
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-right: 1rem;
    margin-bottom: 2rem;
}
/* button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: var(--color-btn-dark);
    color: var(--color-text-ligth);
    width: 10%;
} */
h3{
    margin: 1.5rem;
    text-align: start;
}
label{
    color: var(--color-text-main);
    margin-bottom: 1rem;
}
input{
    font-size: 1.5rem;
    border: var(--color-text-main) 2px solid;
    margin-bottom: 2rem;
}

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
</style>