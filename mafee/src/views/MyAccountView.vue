<script setup>
import Signin from '../components/Signin.vue';
import Login from '../components/Login.vue';
import Google from '../components/Google.vue';
</script>

<template>
    <div class="account__container">
    <div class="account__banner">
        <h2 class="centered">My Account</h2>
    </div>
   
    <Login v-if="!user"/>
    
    <Google v-if="!user"/>
   
    <Signin v-if="!user"/>
</div>
</template>

<style scoped>
h2{
    font-size: 4rem;
    font-weight: 700;
}

.account__banner{
    background-image: url("../assets/background-img-color.jpg");
    height: 10rem;
    width: 90%;
}
.account__container{
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>