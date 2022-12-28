<script setup>
import Nav from './Nav.vue';
</script>

<template>
    <div class="header__container">
        <div class="brand">
            <h2 class="nav__brand">Mafee Beers</h2>
        <img src="../assets/mafee-logo.png" class="nav__logo" alt="logo" srcset="">
    </div>
    <Nav />
</div>
</template>

<style scoped>
.brand{
    display: none;
}
.header__container{
    background: var(--color-btn-dark);
    height: 10vh;
    width: 100%;
    padding-top: 0;
    display: flex;
    align-items: center;
}
@media (max-width: 480px) {
    .brand{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav__brand{
    color: var(--color-btn);
    font-size: 1.5rem;
    margin: 0.5rem;
}
.nav__logo{
    width: 15%;
}

}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}
</style>