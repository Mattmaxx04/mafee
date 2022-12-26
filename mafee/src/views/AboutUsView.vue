<script setup>
import { beers } from '../store/beers.js'
import { getBeers } from '../firebase/beers.js';
import { onMounted } from 'vue';
import Card from '../components/Card.vue';
import List from '../components/List.vue';

onMounted(() => {
    getBeers()
})

</script>

<template>
    <div class="home__discover">
        <div>
            <img src="../assets/home-3-slider-img-2.png" alt="">
        </div>
        <div>
            <h1>
                TRADICIONAL RECIPES FOR MODERN JOY
            </h1>
            <button class="btn__more">
                <p> VIEW MORE </p>
            </button>
        </div>
        <div>
            <img src="../assets/home-3-slider-img-1.png" alt="">
            <img src="../assets/Home-3-slider-img-3.png" alt="">
        </div>
    </div>

    <div class="home__crafted">
        <div class="home__crafted1">
            <h2>BREWERY PROCESS</h2>
        </div>
        <div class="home__crafted2">
            <h2>FINEST INGREDIENTS</h2>
        </div>
        <div class="home__crafted3">
            <h2>RELAXATION TIME</h2>
        </div>
    </div>

    <div class="home__aromas">
        <div class="home__aromas__img">
            <div class="home__aromas__content">
                <img src="../assets/home-04-img-6.png" class="aromas__img" alt="" srcset="">
                <div class="aromas__text">
                    <h2>FLAVORS YOUR LOVE</h2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, obcaecati minus nisi
                        voluptates quia in voluptatem, temporibus fugit et dolorum perspiciatis maxime, assumenda
                        cupiditate autem architecto laudantium molestias dicta amet?</P>
                    <button class="btn__more">
                        <p> VIEW MORE </p>
                    </button>
                </div>
            </div>
        </div>

    </div>

    <!-- <div class="list__container">
<List v-for="beer in beers" :beer="beer" :key="beer.id"/>
</div>

    <div class="beers">
        <Card v-for="beer in beers" :beer="beer" :key="beer.id" />
    </div> -->

    <div class="quality container">
        <div class="quality1">
            <img src="../assets/home3-gif-1.gif" alt="">
        </div>
        <div class="quality2">
            <img src="../assets/home3-img-4.jpg" alt="">
        </div>
        <div class="quality3">
            <h2>RELAXATION TIME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis itaque, veniam, aspernatur nam recusandae obcaecati pariatur nesciunt, dolorum ipsa suscipit ad! Facilis vero ad nemo, laudantium sint maiores doloremque!</p>
            <div class="meet__progress">
                <div>
                    <div class="d-flex justify-content-between">
                        <h6> BREWERY PROCESS</h6>
                        <h6>97%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:97%;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>FILTERING</h6>
                        <h6>89%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:89%;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>CONDITIONING</h6>
                        <h6>56%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:56%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="process container">
        <div class="process1">
            <img src="../assets/about-home-process-1.png" alt="">
            <h2>RELAXATION TIME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis itaque, veniam, aspernatur nam recusandae obcaecati pariatur nesciunt, dolorum ipsa suscipit ad! Facilis vero ad nemo, laudantium sint maiores doloremque!</p>
        </div>
        <div class="process2">
            <img src="../assets/about-home-process-2.png" alt="">
            <h2>RELAXATION TIME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis itaque, veniam, aspernatur nam recusandae obcaecati pariatur nesciunt, dolorum ipsa suscipit ad! Facilis vero ad nemo, laudantium sint maiores doloremque!</p>
        </div>
        <div class="process3">
            <img src="../assets/about-home-process-3.png" alt="">
            <h2>RELAXATION TIME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis itaque, veniam, aspernatur nam recusandae obcaecati pariatur nesciunt, dolorum ipsa suscipit ad! Facilis vero ad nemo, laudantium sint maiores doloremque!</p>
        </div>
        <div class="process4">
            <img src="../assets/about-home-process-4.png" alt="">
            <h2>RELAXATION TIME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis itaque, veniam, aspernatur nam recusandae obcaecati pariatur nesciunt, dolorum ipsa suscipit ad! Facilis vero ad nemo, laudantium sint maiores doloremque!</p>
        </div>
    </div>

    <div class="brewery container">
        <h1>BREWERY PROCESS</h1>
        <div class="brewery_main">
            <div class="brewery1 flex-column align-items-center justify-content-center">
                <section>
                    <div>
                        <h4>RELAXATION TIME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="../assets/about-home-04-icon-2.png" alt="">
                </section>
                <section>
                    <div>
                        <h4>RELAXATION TIME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="../assets/about-home-04-icon-3.png" alt="">
                </section>
                <section>
                    <div>
                        <h4>RELAXATION TIME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="../assets/about-home-04-icon-4.png" alt="">
                </section>
            </div>
            <div class="brewery2">
                <img src="../assets/about-brewery-process.png" alt="">
            </div>
            <div class="brewery3 flex-column align-items-center justify-content-center">
                <section>
                    <div>
                        <h4>RELAXATION TIME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="../assets/about-home-04-icon-5.png" alt="">
                </section>
                <section>
                    <div>
                        <h4>RELAXATION TIME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="../assets/about-home-04-icon-6.png" alt="">
                </section>
                <section>
                    <div>
                        <h4>RELAXATION TIME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="../assets/about-home-04-icon-7.png" alt="">
                </section>
            </div>
        </div>
    </div>
    <div class="offer">
        <h2>WHAT WE OFFER</h2>
    </div>
    <div class="home__icons">
        <div class="icons">
            <img src="../assets/main-home-icon-1.png" alt="" srcset="">
            <h3>BREWING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-4.png" alt="" srcset="">
            <h3>BEER BARREL</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-3.png" alt="" srcset="">
            <h3>PACKAGING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-2.png" alt="" srcset="">
            <h3>DRAFT BEER</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
    </div>
    <div class="home__icons">
        <div class="icons">
            <img src="../assets/offerings-custom-icon-1.png" alt="" srcset="">
            <h3>TAP ROOM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
        <div class="icons">
            <img src="../assets/offerings-custom-icon-2.png" alt="" srcset="">
            <h3>PUBS & BARS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
        <div class="icons">
            <img src="../assets/offerings-custom-icon-3.png" alt="" srcset="">
            <h3>FLAVOURS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
        <div class="icons">
            <img src="../assets/offerings-custom-icon-4.png" alt="" srcset="">
            <h3>GIFT SHOP</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quo repellat recusandae!</p>
        </div>
    </div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="Family in the cinema">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum officia culpa, minima ut ipsam aliquid nemo, explicabo quo aspernatur temporibus accusantium doloremque molestias deserunt perspiciatis. Facilis, quisquam odio? Error.</p>
                    <p class="paragraph2">
                        - DRAFT MAGAZINE
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="A concert">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum officia culpa, minima ut ipsam aliquid nemo, explicabo quo aspernatur temporibus accusantium doloremque molestias deserunt perspiciatis. Facilis, quisquam odio? Error.</p>
                    <p class="paragraph2">
                        - DRAFT MAGAZINE
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="A marathon">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum officia culpa, minima ut ipsam aliquid nemo, explicabo quo aspernatur temporibus accusantium doloremque molestias deserunt perspiciatis. Facilis, quisquam odio? Error.</p>
                    <p class="paragraph2">
                        - DRAFT MAGAZINE
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="Museum">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum officia culpa, minima ut ipsam aliquid nemo, explicabo quo aspernatur temporibus accusantium doloremque molestias deserunt perspiciatis. Facilis, quisquam odio? Error.</p>
                    <p class="paragraph2">
                        - DRAFT MAGAZINE
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="Food">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum officia culpa, minima ut ipsam aliquid nemo, explicabo quo aspernatur temporibus accusantium doloremque molestias deserunt perspiciatis. Facilis, quisquam odio? Error.</p>
                    <p class="paragraph2">
                        - DRAFT MAGAZINE
                    </p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="sponsors">
        <div>
            <img src="../assets/about-sponsor-1.png" alt="">
        </div>
        <div>
            <img src="../assets/about-sponsor-2.png" alt="">
        </div>
        <div>
            <img src="../assets/about-sponsor-3.png" alt="">
        </div>
        <div>
            <img src="../assets/about-sponsor-4.png" alt="">
        </div>
        <div>
            <img src="../assets/about-sponsor-5.png" alt="">
        </div>
    </div>
    <!-- <div class="home__news__frame">
        <div class="home__news">
            <h2>NEWS & EVENTS</h2>
            <div class="home__news__cards">

                <div class="card" style="width: 18rem;">
                    <img src="../assets/Blog-standard-img-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">SUMMIT BREWERY</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                        <a href="#" class="btn__card">READ MORE</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../assets/Blog-standard-img-2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">CRAFT BEERS BARS</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                        <a href="#" class="btn__card">READ MORE</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../assets/Blog-standard-img-4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">BEER DAY</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                        <a href="#" class="btn__card">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped>
.btn__more {
    background: none;
    border: 2px var(--color-text-ligth) solid;
    padding: 0.5rem;
}

.btn__more p {
    background: var(--color-btn);
    font-weight: 700;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
}

/*--------------discover------------------*/

.home__discover {
    background-image: url(../assets/background-img-dark3.jpg);
    background-position: center;
    background-size: cover;
    padding: 5rem;
    /* margin-top: 3rem; */
    margin: 5rem 5rem 0rem 5rem;
    display: flex;
    gap: 5rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    color: white;
}

.home__discover img{
    width: 15rem;
}

/*--------------crafted------------------*/
.home__crafted {
    display: flex;
    padding: 5rem;
    justify-content: center;
    gap: 5rem;
    color: white;
}

.home__crafted1{
    background-image: url(../assets/about-home-4-banner-img-1.jpg);
    padding: 5rem;
    background-size: cover;
    background-position: center;
}

.home__crafted2{
    background-image: url(../assets/about-home-4-banner-img-2.jpg);
    padding: 5rem;
    background-size: cover;
    background-position: center;
}

.home__crafted3{
    background-image: url(../assets/about-home-4-banner-img-3.jpg);
    padding: 5rem;
    background-size: cover;
    background-position: center;
}

/*--------------aromas------------------*/
.home__aromas {
    padding: 2rem 5rem;
}

.home__aromas__img {
    background-image: url(../assets/background-5.jpg);
    background-position: center;
    background-size: cover;
    padding: 3rem;
    min-height: 65vh;
}

.home__aromas__content {
    align-items: center;
    justify-content: center;
    min-height: 65vh;
    gap: 4rem;
    padding: 4rem;
    display: flex;
    border: 2px var(--color-text-ligth) solid;
}
.home__aromas__content img{
    margin: 4rem;
}
.aromas__text{
    display: flex;
    width: 39%;
    color: var(--color-text-ligth);
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-image: url(../assets/background-icon-2.jpg);
    background-position: center;
    background-size: contain;
    color: black;
    padding: 3rem;
    width: 90%;

}
.aromas__text p{
    font-size: 1.5rem;
    font-weight: 400;
}
/*-------------list--------------------*/
.list__container{
    background-image: url(../assets/background-icon-3.jpg);
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap;
    margin: 4rem;
    
}


/*--------------beers------------------*/
.beers {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    justify-content: center;
    align-items: center;
}

/*--------------quality---------------*/

.quality {
    display: flex;
    /* padding: 5rem; */
    justify-content: center;
    /* gap: 5rem; */
    color: black;
    padding: 3rem;
}

.quality1{
    padding: 1rem;
}

.quality2{
    padding: 1rem;
}
.quality3{
    padding: 1rem;
}

.meet__progress {
    width: 35vw;
    padding: 2rem;
}

.progress {
    height: 0.5rem;
    width: 35vw;
    border: 1px solid black;
    background-color: #e6f3fa;
    margin-bottom: 15px;
}

.progress-bar {
    height: 93vw;
    background: #FFC123;
    border: 0.2px solid white;
    display: flex;
    align-items: center;
    transition: width 0.25s;
    border-radius: 5px;
}

/*--------------process---------------*/

.process {
    display: flex;
    /* padding: 5rem; */
    justify-content: center;
    /* gap: 5rem; */
    color: black;
    padding: 3rem;
    background-image: url(../assets/background-color.jpg);
    text-align: justify;
    margin-bottom: 2rem;
}

.process1{
    padding: 1rem;
}

.process2{
    padding: 1rem;
}
.process3{
    padding: 1rem;
}

/*--------------brewery---------------*/

.brewery {
    display: flex;
    /* padding: 5rem; */
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    /* gap: 5rem; */
    color: black;
    padding: 3rem;
    background-image: url(../assets/main-home-img-1.png);
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    text-align: justify;
    margin-bottom: 2rem;
}

.brewery_main{
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    background: rgba( 255, 255, 255, 0.3 );
}

.brewery_main section{
    display: flex;
}

.brewery1{
    padding: 1rem;
    display: flex;
    gap: 5rem;
}
.brewery2{
    padding: 1rem;
}
.brewery3{
    padding: 1rem;
    display: flex;
    gap: 5rem;
}
.brewery1 img{
    width: 5rem;
    height: 5rem;
}

.brewery3 img{
    width: 5rem;
    height: 5rem;
}

/*--------------offer------------------*/

.offer{
    background-image: url(../assets/offerings-title-img.jpg);
    /* background-position: center; */
    background-size: cover;
    padding: 12rem;
    margin: 5rem;
    color: white;
    font-weight: bold;
}

/*--------------icons------------------*/
.home__icons {
    display: flex;
    margin: 4rem;
    justify-content: space-evenly;
}

.icons {
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 20%;
    height: 20rem;
}

.icons h3,
p {
    margin: 0.5rem;
}

/*--------------carousel------------------*/

.title-carousel {
    font-size: 1.5rem;
    color: black;
}

.paragraph1{
    color: black;
    padding-top: 1rem;
    text-align: justify;
}

.paragraph2{
    color: black;
    padding-top: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
}

.carousel-caption {
    top: 50%;
    transform: translateY(-50%);
    bottom: initial;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.carousel-item{
    height: 80vh;
}

/* .carousel-slide {
    height: 60vh;
} */

.carousel-item>img{
    height: 100%;
    object-fit:cover;
    object-position: 0 25%;
    opacity: 0.7;
}

.carousel-indicators button{
    background-color: var(--color-btn);
    width:10px; 
    height:10px;  
    border-radius: 50%;
    border: black solid 0.3rem;
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

/*--------------sponsors------------------*/

.sponsors{
    background-image: url(../assets/background-color-dark-table.jpg);
    display: flex;
    justify-content: center;
    padding: 3rem;
    gap: 3rem;
    margin: 5rem;
}

/*--------------news------------------*/
.home__news__frame {
    background-image: url(../assets/background-madera.jpg);
    padding: 1.5rem 1.5rem 0rem 1.5rem;
}

h2 {
    text-align: center;
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
    background-image: url(../assets/background-color.jpg);

}

.home__news__cards {
    margin-top: 3rem;
    max-width: 96vw;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

}

.card {
    background: none;
    border: none;
}

.card-img-top {
    border-radius: 0 !important;
}
</style>
