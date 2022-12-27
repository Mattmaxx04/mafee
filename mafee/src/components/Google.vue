<script setup>
import {loginWithGoogle} from '../firebase/auth.js'
</script>

<template>
<h3>Login with google</h3>
<button class="btn btn-lg btn-block btn__google"
                  @click="loginWithGoogle"><i
                    class="bi bi-google me-2"></i> Sign in with google</button>


</template>

<style scoped>
h3{
    margin: 1.5rem;
    text-align: start;
}
.btn__google{
  background: var(--color-primary);
}
</style>





