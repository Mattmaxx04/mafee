<script setup>
const Swal = SweetAlert;
const news = ()=> {
      Swal.fire({
        title: 'Thanks!',
        text: 'Our newsletter will reach you soon.',
        confirmButtonText: 'Cool'
      });
    }
</script>

<template>
<div class="footer__container">
    <div class="footer__up">

        <div class="footer__tasting">
            <h5>TASTING ROOM</h5>
            <div class="footer__tasting__time">
            <p>MONDAY: 4PM-9PM</p>
            <p>TUESDAY: 4PM-9PM</p>
            <p>WEDNESDAY: 4PM-9PM</p>
            <p>THURSDAY: 4PM-9PM</p>
            <p>FRIDAY: 4PM-9PM</p>
            <p>SATURDAY: 4PM-9PM</p>
            <p>SUNDAY: 4PM-9PM</p>
        </div>
        </div>
        <div class="footer__location">
            <h5>LOCATION</h5>

            <div class="footer__location__data">
                <p>mail: <a href="mailto:mafeebeers@gmail.com?Subject=Request%20en%20information">mafeebeers@gmail.com</a></p>
                <p>phone: <a href="tel:+543816389120">+54 93816389120</a></p>
                <p>Av. Independencia 1580</p>
                <p>San Miguel de Tucumán</p>
            </div>
        </div>
        <div class="footer__news">
            <h5>OUR NEWSLETTER</h5>
            <p> Subscribe to receive </p>
                <p> more news and updated news.</p>
                <form action="" class="footer__form">
                    <input type="email" placeholder="Your E-Mail" required>
                    <button class="btn__news" @click.prevent="news()"><i class="bi bi-caret-right"></i></button>
                </form>
            <!-- <div class="footer__media">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-globe-americas"></i>
            </div> -->

        </div>
        <div class="footer__info">
            <h5>INFO</h5>
            <div class="footer__info__links">
            <RouterLink to="/contactus"> Contact us</RouterLink>
            <RouterLink to="/workwithus"> Join Our Team</RouterLink>
            <RouterLink to="/reservation"> Reservation </RouterLink>
            <RouterLink to="/about"> Find Distributors</RouterLink>
            <RouterLink to="/blogmain"> Blog </RouterLink>
            </div>

        </div>
    </div>
    <div class="footer__down">
        <p>© MAFEE ,All Rights Reserved</p>
        <!-- <p class="footer__down__rights"></p> -->
        <p>Created By LEEM Software</p>
    </div>


</div>

</template>

<style scoped>

h5{
    margin-bottom: 3rem;
    font-weight: bold;
    color: var(--color-btn);
}
h6{
    color: var(--color-primary);
margin-top: 2.3rem;
}
.footer__tasting__time{
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
}
p{
    margin-bottom: 0;
}
.footer__container{
    padding-top: 1rem;
    
    color: var(--color-text-ligth);
    background: var(--color-btn-dark);
}
.footer__up{
    margin: 1rem;
    display:flex;
    justify-content: space-around;
    border-bottom: 2px solid grey;
}
.footer__form{
    margin-top: 2rem;
}
.footer__form input{
    width: 12rem;
}
.btn__news{
    background: var(--color-primary);
    margin: 0;
}
input{
    font-size: 0.8rem;
    background: var(--color-btn-dark);
}

.footer__media{
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
}
.footer__info__links{
    display: flex;
    flex-direction: column;
}

a{
    color: aliceblue;
    text-decoration: none;
}

a:hover{
    color: var(--color-btn);
}

.footer__down{
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding-bottom: 1rem;
}
.footer__down__rights{
    margin-left: 2rem;
}
@media (max-width: 480px) {
  
    .footer__up{
        flex-wrap: wrap;
    }
    .footer__location{
        margin-top: 1rem;
        text-align: center;
    }
    .footer__down{
        flex-wrap: wrap;
    }
}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}



</style>