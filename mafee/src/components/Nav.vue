<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
    <div class="nav__links">
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About us </RouterLink>
            <RouterLink to="/blogmain"> Blog </RouterLink>
            <RouterLink to="/blogtopic"> Blog topic </RouterLink>
            <RouterLink to="/contactus"> Contact </RouterLink>
            <RouterLink to="/account"> My account </RouterLink>
            <RouterLink to="/reservation"> Reservation </RouterLink>
            <RouterLink to="/shop"> Shop </RouterLink>
            <RouterLink to="/workwithus"> Work with us  </RouterLink>
        </div>
</template>

<style scoped>
a{
    text-decoration: none;
    
}
.nav__links{
    
    display: flex;
    background: transparent;
    justify-content: space-around;
    align-items: center;
}
</style>