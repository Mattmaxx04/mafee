<script setup>
import Signin from '../components/Signin.vue';
import Login from '../components/Login.vue';
import Google from '../components/Google.vue';
import Profile from '../components/Profile.vue';
import Location from '../components/Location.vue';
import CreditCard from '../components/CreditCard.vue';

import { onMounted, ref, computed } from 'vue';

import { getUsers } from '../firebase/users';
import { getCredit } from '../firebase/credit.js'
import { getLocation } from '../firebase/location.js' 

import credits  from '../store/credit.js'
import  location from '../store/location.js'
import user from '../store/user.js';
import users from '../store/users.js';
onMounted(()=>{
    getUsers(),
    getCredit(),
    getLocation()
})


</script>

<template>
    <div class="account__container">
    <div class="account__banner">
        <h2 class="centered">MY ACCOUNT</h2>
    </div>
   <div v-if="!user" class="account__log">
    <Login />
    
    <Google />
   
    <Signin />
    </div>
    <div v-if="user" class="account__settings">
        
        <Profile :user="user" />
        <Location :user="user" />
        <CreditCard :user="user" />
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
    border-radius: 3rem;
    margin: 2rem 5rem 2rem 5rem;
    padding: 8rem 0rem 8rem 0rem;
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