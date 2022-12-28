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
        <div class="home__discover1">
            <img src="../assets/home-3-slider-img-2.png" alt="">
        </div>
        <div class="home__discover2">
            <h1>
                TRADICIONAL RECIPES FOR MODERN JOY
            </h1>
            <button class="btn__more">
                <RouterLink to="/account">
                    <p> Do not miss it </p>
                </RouterLink>
            </button>
        </div>
        <div class="home__discover3">
            <img src="../assets/home-3-slider-img-1.png" alt="">
            <img src="../assets/home-3-slider-img-3.png" alt="">
        </div>
    </div>

    <div class="button_main">
        <div class="home__crafted">
            <div class="home__crafted1">
                <h2>RECIPES</h2>
            </div>
            <div class="home__crafted2">
                <h2>INGREDIENTS</h2>
            </div>
            <div class="home__crafted3">
                <h2>DESCRIPTIONS</h2>
            </div>
        </div>
        <!-- <button class="btn__more3">
            <RouterLink to="">
                <p> SEE SAMPLE </p>
            </RouterLink>
        </button> -->
    </div>

    <div class="home__aromas">
        <div class="home__aromas__img">
            <div class="home__aromas__content">
                <img src="../assets/logo_sin_fondo.png" class="aromas__img" alt="" srcset="">
                <div class="aromas__text">
                    <h2>FLAVORS YOUR LOVE</h2>
                    <P>Be part of this rediscovery of Argentine beer, trying each of the flavors we have. There are not
                        many, but little by little we are growing, dedicating the time that is necessary as long as our
                        products are of quality.</P>
                    <button class="btn__more2">
                        <RouterLink to="/shop">
                            <p> GO TO THE STORE </p>
                        </RouterLink>
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
            <h2>ELABORATION PROCESS</h2>
            <p>What sets us apart from the rest? We respect 100% the imposed hygiene and safety standards, which gives
                us great effectiveness when it comes to obtaining the product. On the other hand, we do not require a
                large filtering system, due to all the previous process that is treated with great care and excellence.
                Finally, we do not use as many artificial additives, to preserve the quality of the beer.</p>
            <div class="meet__progress">
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
                    <h6>ARTIFICIAL ADDITIVES</h6>
                    <h6>56%</h6>
                </div>
                <div class="progress">
                    <div class="progress-bar" style="width:56%;">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="process container">
        <div class="process1">
            <img src="../assets/about-home-process-1.png" alt="">
            <h2>SELECTION</h2>
            <p>The best possible quality raw material is selected depending on the area and the time of year.</p>
        </div>
        <div class="process2">
            <img src="../assets/about-home-process-2.png" alt="">
            <h2>SEPARATION</h2>
            <p>Once the raw material is chosen, the grains are obtained according to the beer that is intended to be
                produced.</p>
        </div>
        <div class="process3">
            <img src="../assets/about-home-process-4.png" alt="">
            <h2>PRODUCTION</h2>
            <p>Begins the brewing process using the necessary instruments according to hygiene and safety regulations.
            </p>
        </div>
        <div class="process4">
            <img src="../assets/about-home-process-3.png" alt="">
            <h2>STORAGE</h2>
            <p>Finally, the beer (on barrel) is stored for its correct distribution in the various markets.</p>
        </div>
    </div>
    <div class="title2">
        <h2 class="text-center">WHAT MAKES US UNIQUE</h2>
    </div>

    <div class="brewery container">
        <!-- <h1>WHAT MAKES US UNIQUE</h1> -->
        <div class="brewery_main">
            <div class="brewery1 flex-column align-items-center justify-content-center">
                <section>
                    <div class="brewery_text">
                        <h4>PROSECUTION</h4>
                        <p>We use pilot plant equipment provided by the faculty, while we strengthen ourselves in
                            improving our own equipment.</p>
                    </div>
                    <img src="../assets/about-home-04-icon-2.png" alt="">
                </section>
                <section>
                    <div class="brewery_text">
                        <h4>DRUMS</h4>
                        <p>Instead of the typical beer keg, we use biodegradable drums to contribute to the environment
                            and make a difference.</p>
                    </div>
                    <img src="../assets/about-home-04-icon-3.png" alt="">
                </section>
                <section>
                    <div class="brewery_text">
                        <h4>AUTOMATION</h4>
                        <p>We use economical but state-of-the-art systems, which allow us to maintain quality and take
                            care of our income, as well as those of our clients.</p>
                    </div>
                    <img src="../assets/about-home-04-icon-4.png" alt="">
                </section>
            </div>
            <div class="brewery2">
                <img src="../assets/about-brewery-process.png" alt="">
            </div>
            <div class="brewery3 flex-column align-items-center justify-content-center">
                <section>
                    <div class="brewery_text">
                        <h4>QUALITY</h4>
                        <p>We always take care of the quality of the product according to hygiene and safety
                            regulations.</p>
                    </div>
                    <img src="../assets/about-home-04-icon-5.png" alt="">
                </section>
                <section>
                    <div class="brewery_text">
                        <h4>CAREFUL</h4>
                        <p>We have the certificate of authentication provided by the Argentine health system and the
                            Chamber of Craft Brewers.</p>
                    </div>
                    <img src="../assets/about-home-04-icon-6.png" alt="">
                </section>
                <section>
                    <div class="brewery_text">
                        <h4>DELIVERY</h4>
                        <p>We have a home delivery system as well as events.</p>
                    </div>
                    <img src="../assets/about-home-04-icon-7.png" alt="">
                </section>
            </div>
        </div>
    </div>
    <div class="offer">
        <h2>SERVICES OFFERED</h2>
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
            <p>As you can see in what the design of the web page is, we also take care of what the design is when it
                comes to delivering our products in first-line packaging.</p>
        </div>
        <div class="icons">
            <img src="../assets/main-home-icon-2.png" alt="" srcset="">
            <h3>DRAFT BEER</h3>
            <p>And as you'd expect, our product is based on premium draft beer, overseen by a top-notch team.</p>
        </div>
    </div>
    <div class="home__icons">
        <div class="icons">
            <img src="../assets/offerings-custom-icon-1.png" alt="" srcset="">
            <h3>TAP ROOM</h3>
            <p>By working with craft beers, we do not depend on the stock of other breweries. So with us you can enjoy
                everything you want.</p>
        </div>
        <div class="icons">
            <img src="../assets/offerings-custom-icon-2.png" alt="" srcset="">
            <h3>PUBS & BARS</h3>
            <p>We have a wide variety of branches, from bars, pubs and even kiosks that already have stock of our beers.
                So don't hesitate and try them.</p>
        </div>
        <div class="icons">
            <img src="../assets/offerings-custom-icon-3.png" alt="" srcset="">
            <h3>FLAVOURS</h3>
            <p>If we differ in something, it is that we have the right amount of flavors, so as not to cover so much and
                focus on what really matters to us, which is quality.</p>
        </div>
        <div class="icons">
            <img src="../assets/offerings-custom-icon-4.png" alt="" srcset="">
            <h3>GIFT SHOP</h3>
            <p>And of course not to mention the most important thing, because after all if you are here it is to buy
                beer. That is why we have our own store, where you can buy as much beer as you want, whenever you want.
            </p>
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
                    <p class="paragraph1">It really was a unique experience, both being able to share with all my
                        friends when leaving the Faculty and being able to enjoy a delicious glass of beer.</p>
                    <p class="paragraph2">
                        - EMANUEL TARIFA
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="A concert">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">I am grateful for the opportunity to have tried the beer at the beginning of
                        all this, because that allowed me to get to know it and to be able to recommend it to my friends
                        and co-workers. A delight.</p>
                    <p class="paragraph2">
                        - ANA CAROLINA CARRIZO
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="A marathon">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">Wow! What to tell them? The beer is extraordinary. The truth is very rich,
                        even more considering that it is handmade and the children do not have the capital and machinery
                        of large companies.</p>
                    <p class="paragraph2">
                        - MARI CAJAL
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="Museum">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">The truth is that a very rich beer. At first I was suspicious, but once I
                        tried it, I took a trip to another world. It was really beautiful!</p>
                    <p class="paragraph2">
                        - ELÍAS PRADO
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/background-icon-1.png" class="d-block w-100" alt="Food">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="title-carousel">WHAT THEY SAY ABOUT US</h5>
                    <p class="paragraph1">He was one of the boys who initially tried the beer in what was the Faculty
                        project. I really thought that they had to build their business with this, but I never thought
                        it would be such a success so quickly. They deserve it!</p>
                    <p class="paragraph2">
                        - MELIZA ZELARAYAN
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
    <div class="container_sponsors">
        <marquee direction="right" scrolldelay="1">
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
        </marquee>
    </div>
    <a href="https://api.whatsapp.com/send?phone=+543816389120&text=Hello. How are you? Would you give me information, please?"><img
                    src="../assets/wspp.png" alt="fotoChat" class="chat"></a>
    <!-- <a href="https://api.whatsapp.com/send?phone=+1167313204&text=Hola!%20Te%20estas%20comunicando%20con%20Pet%20Shop%20PELM.%20%C2%BFEn%20qu%C3%A9%20podemos%20ayudarte?"><img
                    src="../img/chat2.png" alt="fotoChat" class="chat"></a> -->

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

.chat {
  width: 3rem;
height: auto;
/* background-color: rgb(255, 245, 237,0.2); */
/* border-radius: 50%; */
position: fixed;
bottom: 340px;
left: 15px;
cursor: pointer;
/* box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px transparent; */
z-index: 999999;
/* padding: 1rem; */
}

.chat:hover{
  transform: scale(1.3);
}

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

.btn__more:hover {
    border: 2px var(--color-btn) solid;
}

.btn__more p:hover {
    background: black;
    color: var(--color-btn);
    border: 2px solid var(--color-btn);
}

.btn__more2 {
    background: none;
    border: 2px black solid;
    padding: 0.5rem;
}

.btn__more2 p {
    background: var(--color-btn);
    font-weight: bold !important;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
    font-size: 1rem !important;
}

.btn__more2:hover {
    border: 2px var(--color-btn) solid;
}

.btn__more2 p:hover {
    background: black;
    color: var(--color-btn);
    border: 2px solid var(--color-btn);
}

.button_main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn__more3 {
    background: none;
    border: 2px black solid;
    padding: 0.5rem;
    width: 16rem;
    margin-bottom: 3rem;
}

.btn__more3 p {
    background: var(--color-btn);
    font-weight: bold !important;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
    font-size: 1rem !important;
}

.btn__more3:hover {
    border: 2px var(--color-btn) solid;
}

.btn__more3 p:hover {
    background: black;
    color: var(--color-btn);
    border: 2px solid var(--color-btn);
}

/*--------------discover------------------*/

.home__discover {
    background-image: url(../assets/background-img-dark3.jpg);
    background-position: center;
    background-size: cover;
    padding: 6rem;
    /* margin-top: 3rem; */
    margin: 5rem 5rem 0rem 5rem;
    display: flex;
    gap: 5rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    color: white;
    border-radius: 5rem;
}

.home__discover img {
    width: 15rem;
}

.home__discover2 {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.home__discover2 p {
    text-transform: uppercase;
}

.home__discover2 h1 {
    font-weight: bold;
}

.home__discover3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.home__discover1 img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.home__discover3 img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

/*--------------crafted------------------*/
.home__crafted {
    display: flex;
    padding: 5rem;
    justify-content: center;
    gap: 2rem;
    color: white;
}

.home__crafted1 {
    background-image: url(../assets/about-home-4-banner-img-1.jpg);
    padding: 1rem;
    background-size: cover;
    background-position: center;
    border-radius: 3rem;
    /* border: 2px solid black; */
}

.home__crafted1 h2 {
    border-radius: 3rem;
    border: 3px solid white;
    padding: 7rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
}

.home__crafted2 h2 {
    border-radius: 3rem;
    border: 3px solid white;
    padding: 7rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
}

.home__crafted3 h2 {
    border-radius: 3rem;
    border: 3px solid white;
    padding: 7rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
}

.home__crafted1 h2:hover {
    -webkit-transform: scale(1.7);
    transform: scale(1.7);
    border: none;
    color: black;
}

.home__crafted2 h2:hover {
    -webkit-transform: scale(1.7);
    transform: scale(1.7);
    border: none;
    color: black;
}

.home__crafted3 h2:hover {
    -webkit-transform: scale(1.7);
    transform: scale(1.7);
    border: none;
    color: black;
}

.home__crafted2 {
    background-image: url(../assets/about-home-4-banner-img-2.jpg);
    padding: 1rem;
    background-size: cover;
    background-position: center;
    border-radius: 3rem;
}

.home__crafted3 {
    background-image: url(../assets/about-home-4-banner-img-3.jpg);
    padding: 1rem;
    background-size: cover;
    background-position: center;
    border-radius: 3rem;
}

.home__crafted3:hover {
    opacity: 0.7;
}

.home__crafted1:hover {
    opacity: 0.7;
}

.home__crafted2:hover {
    opacity: 0.7;
}

/*--------------aromas------------------*/
.home__aromas {
    padding: 2rem 5rem;
}

.home__aromas__img {
    background-image: url(../assets/background-5.jpg);
    background-position: center;
    background-size: cover;
    padding: 1rem;
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
    border: 3px var(--color-text-ligth) solid;
    border-radius: 5rem;
}

.home__aromas__content img {
    margin: 4rem;
}

.aromas__text {
    display: flex;
    width: 39%;
    color: var(--color-text-ligth);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-image: url(../assets/background-icon-2.jpg);
    background-position: center;
    background-size: contain;
    color: black;
    padding: 3rem;
    width: 90%;
    border-radius: 5rem;

}

.aromas__text p {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: justify;
}

.aromas__text h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
}

.aromas__text button>p {
    font-size: 1.5rem;
    font-weight: bold;
}

.aromas__img {
    width: 24rem;
}

/*--------------quality---------------*/

.quality {
    display: flex;
    /* padding: 5rem; */
    justify-content: space-around;
    /* gap: 5rem; */
    color: black;
    padding: 2rem 6rem 2rem 6rem;
    align-items: center;
    gap: 3rem;
}

.quality1 {
    padding-bottom: 2rem;
}

.quality2 {
    padding-bottom: 2rem;
}

.quality3 {
    padding-bottom: 2rem;
}

.quality1 img {
    border-radius: 5rem;
}

.quality2 img {
    border-radius: 5rem;
}

.quality3 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center !important;
}

.quality3 p {
    text-align: justify;
}

.quality3 h2 {
    font-weight: bold;
}

.meet__progress {
    width: 35vw;
    /* padding: 2rem; */
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
    padding: 2rem 6rem;
    background-image: url(../assets/background-color.jpg);
    text-align: justify;
    margin-bottom: 2rem;
    gap: 0.5rem;
    border-radius: 5rem;
}

.process1 {
    padding: 1rem;
}

.process2 {
    padding: 1rem;
}

.process3 {
    padding: 1rem;
}

.process4 {
    padding: 1rem;
}

.process1 h2 {
    padding: 1.5rem 0rem;
    font-weight: bold;
}

.process2 h2 {
    padding: 1.5rem 0rem;
    font-weight: bold;
}

.process3 h2 {
    padding: 1.5rem 0rem;
    font-weight: bold;
}

.process4 h2 {
    padding: 1.5rem 0rem;
    font-weight: bold;
}

/*--------------brewery---------------*/

.title2 {
    background-image: url(../assets/background-img-color.jpg);
    padding: 5rem;
    margin: 5rem 6rem 2rem 6rem;
    border-radius: 3rem;
}

.title2 h2 {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

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

.brewery h1 {
    font-weight: bold;
    color: var(--color-btn);
    padding-bottom: 2rem;
}

.brewery_main {
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    background: rgba(255, 255, 255, 0.3);
}

.brewery_main section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.brewery1 {
    padding: 1rem;
    display: flex;
    gap: 2rem;
}

.brewery2 {
    padding: 1rem;
}

.brewery3 {
    padding: 1rem;
    display: flex;
    gap: 2rem;
}

.brewery1 img {
    width: 5rem;
    height: 5rem;
}

.brewery3 img {
    width: 5rem;
    height: 5rem;
}

.brewery_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.brewery_text h4 {
    font-weight: bold;
    color: var(--color-btn);
}

/*--------------offer------------------*/

.offer {
    background-image: url(../assets/offerings-title-img.jpg);
    /* background-position: center; */
    background-size: cover;
    padding: 12rem;
    margin: 2rem 6rem 6rem 6rem;
    color: white;
    font-weight: bold;
    border-radius: 5rem;
}

/*--------------icons------------------*/
.home__icons {
    display: flex;
    margin: 3rem;
    justify-content: space-around;
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

.icons h3 {
    padding-top: 2rem;
    color: white;
}

.icons p {
    text-align: justify;
    font-weight: 500;
    margin: 0.5rem;
}

.icons h3:hover {
    color: var(--color-btn);
    font-weight: bold;
}

/*--------------carousel------------------*/

.title-carousel {
    font-size: 2rem;
    color: black;
    font-weight: bold;
}

.paragraph1 {
    color: black;
    padding-top: 1rem;
    text-align: justify;
}

.paragraph2 {
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

.carousel-item {
    height: 80vh;
}

/* .carousel-slide {
    height: 60vh;
} */

.carousel-item>img {
    height: 100%;
    object-fit: cover;
    object-position: 0 25%;
    opacity: 0.7;
}

.carousel-indicators button {
    background-color: var(--color-btn);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: black solid 0.3rem;
}

.carousel-control-prev-icon {
    background-color: var(--color-btn);
    border-radius: 50%;
    padding: 1.1rem;
    width: 3rem !important;
    height: 3rem !important;
    background-position: 30% !important;
    background-size: 60% 60% !important;
}

.carousel-control-next-icon {
    background-color: var(--color-btn);
    border-radius: 50%;
    padding: 1.1rem;
    width: 3rem !important;
    height: 3rem !important;
    background-position: 50% !important;
    background-size: 60% 60% !important;
}

/*--------------sponsors------------------*/

.sponsors {
    display: flex;
    justify-content: center;
    padding: 3rem;
    gap: 3rem;
    /* margin: 5rem; */
}

.container_sponsors {
    background-image: url(../assets/background-color-dark-table.jpg);
    margin: 3rem 5rem 0rem 5rem;
    border-radius: 5rem 5rem 0rem 0rem;
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

@media (max-width: 480px) {
    .home__discover {
        flex-wrap: wrap;
    }

    .home__discover img {
        width: 10rem;
    }

    .home__discover h1 {
        font-size: 1.4rem;
    }

    .home__crafted {
        margin-top: 1rem;
        flex-wrap: wrap;
        padding: 0rem;
        gap: 0;
        width: 100%;
    }

    .home__crafted1 {
        border-radius: 0;
        width: 100%;
    }

    .home__crafted2 {
        border-radius: 0;
        width: 100%;
    }

    .home__crafted3 {
        border-radius: 0;
        width: 100%;
    }

    .home__crafted1 h2 {
        border-radius: 0;
    }

    .home__crafted2 h2 {
        border-radius: 0;
    }

    .home__crafted3 h2 {
        border-radius: 0;
    }

    .btn__more3 {
        margin-top: 3rem;
    }

    .home__aromas {
        padding: 0;
    }
    .home__aromas__img{
        border-radius: 0;
    }
    .home__aromas__content{
        border-radius: 0;
        gap: 0;
    }
    .home__aromas__content{
        flex-wrap: wrap;
    }
    .aromas__img{
        width: 14rem;
    }
    .aromas__text{
        border-radius: 0;
    }
    .quality{
        flex-wrap: wrap;
    }
    .process{
        flex-wrap: wrap;
        border-radius: 0;
        margin-bottom: 0;
    }
    .title2{
        margin: 0;
        border-radius: 0;
    }
    .brewery_main{
        flex-wrap: wrap;
    }
    .offer{
        border-radius: 0;
        margin: 0;
        padding: 0;
    }
    .home__icons{
        margin: 0.5rem;
        padding: 1rem;
        flex-wrap: wrap;
    }
    .icons{
        width: 100%;
    }
    .container_sponsors{
        margin: 0;
        border-radius: 0;
    }
}

@media (max-width: 768px) {}

@media (max-width: 1024px) {}

@media (max-width: 1200px) {}
</style>
