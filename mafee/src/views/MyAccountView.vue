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
    <a href="https://api.whatsapp.com/send?phone=+543816389120&text=Hello. How are you? Would you give me information, please?"><img
                    src="../assets/wspp.png" alt="fotoChat" class="chat"></a>
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

.chat {
  width: 3rem;
height: auto;
/* background-color: rgb(255, 245, 237,0.2); */
/* border-radius: 50%; */
position: fixed;
bottom: 75px;
left: 15px;
cursor: pointer;
/* box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px transparent; */
z-index: 999999;
/* padding: 1rem; */
}

.chat:hover{
  transform: scale(1.3);
}
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