<script setup>
import { beers } from '../store/beers.js'
import { getBeers } from '../firebase/beers.js';
import { onMounted } from 'vue';
import Card from '../components/Card.vue';
import List from '../components/List.vue';

onMounted(() => {
    getBeers()
})

console.log(beers);
</script>

<template>
    <div class="home__discover">
        <div class="home__discover__carousel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <video src="../assets/main-home-slider-8.mp4" autoplay loop class="carousel__img"></video>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>get to know us a little more</h5>
                            <p>We invite you to learn a little more about our work and what we offer.</p>
                            <button class="btn__more">
                                <RouterLink to="/about"> <p> SEE MORE </p></RouterLink>
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/main-home-slider-9.jpg" class="carousel__img" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>book a place with us</h5>
                            <p>Do not miss the opportunity to reserve your favorite beers in advance, as well as a tour of the company or ask for other services.</p>
                            <button class="btn__more">
                                <RouterLink to="/reservation"> <p> SEE MORE </p> </RouterLink>
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/main-home-slider-10.jpg" class="carousel__img" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Get in contact with us</h5>
                            <p>If you have any questions, do not waste time and contact us, we will help you with whatever you need. We will wait for you!</p>
                            <button class="btn__more">
                                <RouterLink to="/contactus"> <p> SEE MORE </p> </RouterLink>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="home__crafted">
        <div class="home__crafted__text">
            <h2>OUR BEGINNINGS</h2>
            <P>As a company we were born in the year 2022, as a result of an academic project presented at the Faculty of Exact Sciences and Technology, belonging to the National University of Tucumán, for the chair of technology of industrial processes on a pilot scale, corresponding to the career of Chemical engineering.</P>
            <img src="../assets/home3-img-3.png" alt="" srcset="" class="crafted__img">
        </div>
        <div class="home__crafted__img">
            <!-- <img src="../assets/home3-img-1.jpg" alt="" srcset="" class="crafted__img"> -->
            <img src="../assets/logo_mafee.png" alt="" srcset="" class="crafted__img1">
        </div>
    </div>

    <div class="home__aromas">
        <div class="home__aromas__img">
            <div class="home__aromas__content">
                <img src="../assets/logo_sin_fondo.png" class="aromas__img" alt="" srcset="">
                <div class="aromas__text">
                    <h2>ENJOY UNIQUE AROMAS</h2>
                    <p>Be part of this rediscovery of Argentine beer, trying each of the flavors we have. There are not many, but little by little we are growing, dedicating the time that is necessary as long as our products are of quality.</p>
                    <button class="btn__more button1">
                        <RouterLink to="/shop"> <p> GO TO THE STORE </p> </RouterLink>
                    </button>
                </div>
            </div>
        </div>

    </div>

    <div class="list__container">
        <h2>BEER PRICE LIST</h2>
        <List v-for="beer in beers" :beer="beer" :key="beer.id" />
    </div>

    <div class="home__brew">
        <div class="brew__img1">
            <div class="brew__cube1">
                <img src="../assets/home-04-img-6.png" alt="" srcset="">
            </div>
        </div>
        <div class="brew__img2">
            <div class="brew__cube2">
                <!-- <img src="../assets/home-04-img-6.png" alt="" srcset=""> -->
                <button class="btn__more">
                    <RouterLink to="/workwithus"> <p> JOIN US </p></RouterLink>
                </button>
            </div>
        </div>
        <div class="brew__img3">
            <div class="brew__cube1">
                <img src="../assets/home-04-img-6.png" alt="" srcset="">
            </div>
        </div>
    </div>

    <div class="home__icons">
        <div class="icons">
            <img src="../assets/main-home-icon-1.png" alt="" srcset="">
            <h3>BREWING</h3>
            <p>We carry out exhaustive control when making beer with all the required security measures.</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-4.png" alt="" srcset="">
            <h3>BEER BARREL</h3>
            <p>We offer, for now, not beer kegs per se, since we are still a small business, but beer drums.</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-3.png" alt="" srcset="">
            <h3>PACKAGING</h3>
            <p>As you can see in what the design of the web page is, we also take care of what the design is when it comes to delivering our products in first-line packaging.</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-2.png" alt="" srcset="">
            <h3>DRAFT BEER</h3>
            <p>And as you'd expect, our product is based on premium draft beer, overseen by a top-notch team.</p>
        </div>

    </div>

    <div class="home__culture">
        <div class="culture__img">
            <div class="culture__content">
                <h3>OUR BEER CULTURE</h3>
                <p class="culture__content__p">If there is something that defines us Argentines, it is our beer culture. So don't hesitate and be part of this great community, joining us and keeping up to date with each of the news that this great world of beer offers. Register if you are not yet part of this community or, if you do, log in to be able to participate actively.</p>
                <button class="btn__more">
                    <RouterLink to="/account"> <p> SIGN UP </p> </RouterLink>
                </button>
            </div>
        </div>

    </div>
    <div class="title_beer">
        <h2>BEER FLAVORS</h2>
    </div>
    <div class="beers">
        <Card v-for="beer in beers" :beer="beer" :key="beer.id" />
    </div>

    <div class="home__news__frame">
        <div class="home__news">
            <h2>NEWS & EVENTS</h2>
            <div class="home__news__cards">

                <div class="card" style="width: 18rem;">
                    <img src="../assets/Blog-standard-img-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">SUMMIT BREWERY</h3>
                        <p class="card-text">At the brewery summit, we have the opportunity to meet both craft and non-craft breweries, to share a day between beers and show our products.</p>
                        <a href="#" class="btn__card">READ MORE</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../assets/Blog-standard-img-2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">CRAFT BEERS BARS</h3>
                        <p class="card-text">A new craft beer bar was inaugurated in one of the most visited places near the Faculty. Because you have to take a little time to share a delicious beer.</p>
                        <a href="#" class="btn__card">READ MORE</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../assets/Blog-standard-img-4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">BEER DAY</h3>
                        <p class="card-text">The long-awaited day finally arrived and I say this because you know that on the day of beer, beer is given as a gift to all good brewers. So join, don't hesitate.</p>
                        <a href="" class="btn__card">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn__more {
    background: none;
    border: 2px var(--color-text-ligth) solid;
    padding: 0.5rem;
}

.btn__more p {
    background: var(--color-btn);
    font-weight: bold;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
}

.btn__more:hover {
    border: 4px var(--color-btn) solid;
}

.btn__more p:hover {
    background: black;
    color: var(--color-btn);
    border: 4px solid var(--color-btn);
}

/*--------------discover------------------*/
.carousel__img {
    max-height: 70vh;
    padding-top: 0.7rem;
}

.home__discover__carousel {    
    display: flex;
    margin: 1rem;
    justify-content: center;
}

.home__discover {
    background-image: url(../assets/background-madera.jpg);
    padding: 1.5rem;
    margin-top: 5rem;
    /* opacity: 10; */
}

.carousel-indicators button{
    background-color: black;
    width:10px; 
    height:10px;  
    border-radius: 50%;
    border: var(--color-btn) solid 0.2rem;
}

.carousel-control-prev-icon{
    background-color: var(--color-btn);
    border-radius: 50%;
    padding: 1.1rem;
    width: 3rem !important;
    height: 3rem !important;
    background-position: 30% !important;
    background-size: 60% 60% !important;
}

.carousel-control-next-icon{
    background-color: var(--color-btn);
    border-radius: 50%;
    padding: 1.1rem;
    width: 3rem !important;
    height: 3rem !important;
    background-position: 50% !important;
    background-size: 60% 60% !important;
}

.carousel-item video{
    border-radius: 5rem;
    opacity: 0.85;
}

.carousel-item img{
    border-radius: 5rem;
    opacity: 0.8;
}

.carousel-caption h5{
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
}

.carousel-caption p{
    padding: 1rem;
    font-size: 1.2rem;
}

.carousel-caption button{
    margin: 1rem;
}

/*--------------crafted------------------*/
.home__crafted {
    display: flex;
    margin: 1.5rem;
    padding-left: 10rem;
    padding-top: 3rem;
    padding-bottom: 1rem;
}

.home__crafted__text {
    width: 50%;
    padding: 2rem;
    text-align: justify;
}

.home__crafted__text h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: start;
    margin-left: 6rem;
}

.home__crafted__text p {
    width: 80%;
    padding: 1rem;
    margin-left: 5rem;
}

.home__crafted__text img {
    margin-left: 6rem;
    padding: 1rem;
}

.home__crafted__img {
    display: flex;
    width: 50%;
    gap: 1rem;
}

.crafted__img1{
    width: 23rem;
    height: 23rem;
}

.crafted__img1:hover {
    -webkit-transform:scale(1.3);
    transform:scale(1.3);
}

/* .contenedor:hover .imagen {-webkit-transform:scale(1.3);transform:scale(1.3);}
.contenedor {overflow:hidden;} */

/*--------------aromas------------------*/
.home__aromas {
    background-image: url(../assets/background-madera.jpg);
    padding: 3rem 6rem;

}

.home__aromas__img {
    background-image: url(../assets/main-home-slider-11.jpg);
    background-size: cover;
    background-position: center;
    padding: 1.5rem;
    min-height: 65vh;
    border-radius: 5rem;
}

.home__aromas__content {
    align-items: center;
    justify-content: center;
    min-height: 65vh;
    gap: 4rem;
    padding: 4rem;
    display: flex;
    border: 2px var(--color-text-ligth) solid;
    border-radius: 5rem;
}

.home__aromas__content img {
    margin: 4rem;
    width: 30rem;
}

.aromas__text {
    display: flex;
    width: 39%;
    color: var(--color-text-ligth);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.aromas__text p {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: justify;
    font-size: 1.4rem;
}

.aromas__text h2{
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.button1 p{
    font-weight: bold;
}

/*-------------list--------------------*/
.list__container {
    background-image: url(../assets/background-icon-3.jpg);
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap;
    margin: 4rem;
    justify-content: space-between;
    padding: 0rem 6rem 3rem 6rem;

}

.list__container h2 {
    text-align: center;
    width: 100%;
    margin: 2rem;
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 3rem;
    color: var(--color-btn);
}

/*--------------homebrew----------------*/
.home__brew {
    background-image: url(../assets/background-madera.jpg);
    padding: 3rem 6rem;
    display: flex;
    justify-content: space-around;
}

.brew__img1 {
    background-image: url(../assets/blog-single-img-2.jpg);
    background-repeat: no-repeat;
    min-height: 40vh;
    width: 20vw;
    padding: 0.5rem;
    border-radius: 5rem;
}

.brew__img2 {
    background-image: url(../assets/home-masonry-5.jpg);
    min-height: 50vh;
    width: 40vw;
    padding: 0.5rem;
    border-radius: 5rem;
}

.brew__img3 {
    background-image: url(../assets/home-4-img-gallery-4.jpg);
    background-repeat: no-repeat;
    min-height: 40vh;
    width: 20vw;
    padding: 0.5rem;
    border-radius: 5rem;
}

.brew__cube1 {
    width: 100%;
    height: 100%;
    border: 2px var(--color-text-ligth) solid;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
}

.brew__cube2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 2px var(--color-text-ligth) solid;
    border-radius: 5rem;
}

.brew__cube1 img {
    margin: 1rem;
    width: 15rem;
    opacity: 0.4;
}

.brew__cube1 img:hover {
    opacity: 1;
}

.brew__cube3 {
    width: 100%;
    height: 100%;
    border: 2px var(--color-text-ligth) solid;
    border-radius: 5rem;
}

/*----------ICONS--------- */
.home__icons {
    display: flex;
    margin: 4rem;
    justify-content: space-evenly;
    padding: 0rem 6rem;
}

.icons {
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 20%;
    height: 20rem;
    margin-bottom: 2rem;
}

.icons h3{
    padding-top: 2rem;
}

.icons p{
    text-align: justify;
    font-weight: 500;
    margin: 0.5rem;
}

.icons h3:hover{
    color: var(--color-btn);
    font-weight: bold;
}

/*--------------CULTURE---------------*/
.home__culture{
    background-image: url(../assets/background-madera.jpg);
    padding: 2rem 6rem;
    height: 40rem;
}
.culture__img{
    background-image: url(../assets/main-home-slider-12.jpg);
    height: 100%;
    padding: 1rem;
    border-radius: 5rem;
}
.culture__content{
    padding-left: 21rem;
    padding-right: 21rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border: 2px var(--color-text-ligth) solid;
    height: 100%;
    border-radius: 5rem;
}
.culture__content p,h3{
    color: var(--color-text-ligth);
    font-weight: bold;
}
.culture__content p{
    font-size: 1rem;
    font-weight: 500;
    text-align: justify;
}
.culture__content h3{
    padding-bottom: 2rem;
}

.culture__content__p{
    padding-bottom: 2rem;
}

/*--------------beers------------------*/

.title_beer h2 {
    text-align: center;
    padding-top: 4rem;
    font-size: 3rem;
    font-weight: bold;
    color: var(--color-btn);
}

.beers {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    justify-content: center;
    align-items: center;
}

/*--------------news------------------*/
.home__news__frame {
    background-image: url(../assets/background-img-dark.jpg);
    padding: 2rem 6rem 0rem 6rem;
    background-position: center;
    background-size: cover;
}

.home__news__frame h2 {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 3rem;
    padding-top: 1rem;
}

a {
    text-decoration: none;
    font-weight: 600;
    color: var(--color-text-main);
}

a:hover {
    color: var(--color-btn);
}

.home__news {
    padding-top: 1rem;

}

.home__news__cards {
    margin-top: 3rem;
    max-width: 96vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0rem 8rem 2rem 8rem;

}

.card {
    background: none;
    border: none;
    padding: 0rem;
}

.card-img-top {
    border-radius: 2rem !important;
    border: 4px solid var(--color-btn);
    padding: 0.4rem;
    width: 20rem;
}

.card-body h3{
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
    width: 100%;
    padding-top: 1rem;
}

.card-body p{
    font-size: 1rem;
    text-align: justify;
    color: white;
    padding-top: 1rem;
}

.card-body a{
    font-size: 1rem;
    text-align: center;
    color: var(--color-btn);
    padding-top: 2rem;
    text-align: end;
}

.card-body{
    padding-left: 3rem;
}
</style>
