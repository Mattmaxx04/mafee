<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
    <div class="nav__container">
     <a href="http://">WHERE TO TRY?</a>
    <div class="nav__links">
           
            <RouterLink to="/"> HOME </RouterLink>
            <RouterLink to="/about"> WHAT WE OFFER</RouterLink>
            <RouterLink to="/workwithus"> MEET THE TEAM</RouterLink>
            
            <img src="../assets/mafee-logo.png" class="nav__logo" alt="logo" srcset="">

            <RouterLink to="/reservation"> RESERVATION </RouterLink>
            <RouterLink to="/contactus"> CONTACT US </RouterLink>
            <RouterLink to="/blogmain"> BLOG </RouterLink>
            <RouterLink to="/shop"> SHOP </RouterLink>
            
        </div>
        <img src="" alt="hamburguesa" srcset="">
    </div>
</template>

<style scoped>
a{
    margin-bottom: 0.8rem;
    text-decoration: none;
    color: var(--color-text-ligth); 
}
a:hover{
    color: var(--color-btn);
}
.nav__container{
    display: flex;
}
.nav__links{
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav__logo{
    width: 8%;
}
</style>