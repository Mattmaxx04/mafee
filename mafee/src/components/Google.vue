<script setup>
import {loginWithGoogle} from '../firebase/auth.js'


</script>

<template>
<div class="title2">
            <h2 class="text-center">LOGIN WITH GOOGLE</h2>
        </div>
<button class="btn btn-lg btn-block btn__google btn__more2"
                  @click="loginWithGoogle"><i
                    class="bi bi-google m-2"></i><p>SIGN IN WITH GOOGLE</p> </button>


</template>

<style scoped>
h3{
    margin: 1.5rem;
    text-align: start;
}
/* .btn__google{
  background: var(--color-primary);
} */
.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 3rem 10rem 2.5rem 10rem;
    margin: 4rem 3rem 3rem 3rem;
    border-radius: 1rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

.btn__more2 {
    background: none;
    border: 4px black solid;
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





