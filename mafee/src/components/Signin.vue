<script setup>
import {register} from '../firebase/auth.js'
</script>

<template>
     
<form action="" class="signin__form">
    <h3>Signin</h3>
    <label for="">Email address *</label>
    <input type="text">
    <label for="">Password *</label>
    <input type="text">    
    <button type="submit" @click="register">Sign in</button>
</form>

</template>

<style scoped>
form{
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
h3{
    margin: 1.5rem;
    text-align: start;
}
label{
    color: var(--color-text-main);
}
input{
    font-size: 1.5rem;
    border: var(--color-text-main) 2px solid;
}
</style>