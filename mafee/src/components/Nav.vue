<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
    <div class="nav__container">
        
        <a class="where" href="http://">WHERE TO TRY?</a>
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
        <a class="btn__menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i class="bi bi-list"></i>
</a>
<div class="offcanvas offcanvas-end show text-bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Mafee Beers</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
     <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad provident a non eaque maiores?</p>
    </div>
    
      
      <ul class="">
        <li><a class="menu__link" href="#">Sing In</a></li>
        <li><a class="menu__link" href="#">Log In</a></li>
      </ul>
    
  </div>
</div>
    </div>
</template>

<style scoped>
.menu__link{
    font-size: 1.5rem;
}
.offcanvas-body p{
    margin: 1rem;

}
ul{
    list-style-type: none;
}
.where{
    margin-left: 1rem;
    margin-top: 2rem;
}
.btn__menu{
    color: aliceblue;
    font-size: 3.5rem;
    margin-right: 1rem;
}
a{
    text-decoration: none;
    color: var(--color-text-ligth); 
}
a:hover{
    color: var(--color-btn);
}
.nav__container{
    margin-top: -0.8rem;
    display: flex;
    justify-content: space-between;
}
.nav__links{
    width: 80%;
    gap: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 2.5rem;
}
.nav__logo{
    width: 9%;
}
</style>