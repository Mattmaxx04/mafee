<script setup>
import Signin from '../components/Signin.vue';
import Login from '../components/Login.vue';
import Google from '../components/Google.vue';
import user from '../store/users.js';
import Profile from '../components/Profile.vue';
import Location from '../components/Location.vue';
import CreditCard from '../components/CreditCard.vue';
</script>

<template>
    <div class="account__container">
    <div class="account__banner">
        <h2 class="centered">My Account</h2>
    </div>
   <div v-if="!user" class="account__log">
    <Login />
    
    <Google />
   
    <Signin />
    </div>
    <div v-if="user" class="account__settings">
        <Profile />
        <Location />
        <CreditCard />
    </div>


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

.account__log{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>