<script setup>
import { ref } from 'vue';
import { beers } from '../store/beers.js'
import { getBeers } from '../firebase/beers.js';
import { onMounted } from 'vue';
import Card from '../components/CardShop.vue';
import List from '../components/List.vue';

onMounted(() => {
    getBeers()
})


const beersF = ref('')
const beerB = ref([])

const beerFilter = () => {
    // console.log('filtrando');
    // console.log(posts.value.forEach(post => console.log(post)));
    // console.log(posts.value.filter(post => post.title.toLowerCase().includes(filtro2.value.toLowerCase())));
    let filter1 = beers.value.filter(
        (beer) =>
            beer.name.toLowerCase().includes(beersF.value));
    let filter3 = filter1.filter((beer) => categoryF.value.includes(beer.type.value))
    if (categoryF.length > 0) {
        beerB.value = filter3;
    } else {
        beerB.value = filter1;
    }
}

</script>

<template>
    <div class="shop__init">
        <div class="shop__init__text">
            <h2>NEW FLAVORS & OLD QUALITY</h2>
            <h6>Created to inspire your senses to our brands we combine unique flavors with proven quality</h6>
            <button class="btn__more2">
                <RouterLink to="/account"> <p> BUY </p> </RouterLink>
            </button>
        </div>
        <div>
            <img src="../assets/mafee-logo.png" alt="">
        </div>
    </div>
    <div class="shop__flavors">
        <h3>NEW FLAVORS</h3>
        <div class="beers">
            <Card v-for="beer in beers" :beer="beer" :key="beer.id" />
        </div>
    </div>
    <div class="special__offer__container">
        <div class="special__offer">
            <div class="special__offer__text">
                <h3>SPECIAL OFFERS</h3>
                <p>Here you can find all the promotions offered by our brewery, from coupons, discounts, to free packs. We are always renewing our promotions, so that the client has the possibility of enjoying a good beer, without paying more. Take the opportunity!</p>
                <button class="btn__more3">
                    <p> GO TO PROMOTIONS </p>
                </button>
            </div>
        </div>
    </div>

    <div class="title2">
        <h2 class="text-center">PRICING LIST</h2>
    </div>



    <div class="price__list">
        <List v-for="beer in beers" :beer="beer" :key="beer.id" />

    </div>
    <div class="title2">
        <h2 class="text-center">LIMITED EDITION</h2>
    </div>
    <div class="limited__beer">
        <img src="../assets/beer-limited-edition-1.png" alt="">
        <img src="../assets/beer-limited-edition-2.png" alt="">
        <img src="../assets/beer-limited-edition-3.png" alt="">
        <img src="../assets/beer-limited-edition-4.png" alt="">
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
</template>

<style scoped>

a{
    text-decoration: none;
}

.shop__init {
    background-image: url(../assets/background-yellow2.jpg);
    background-size: cover;
    background-position: 0% 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem;
    margin: 4rem 5rem;
    border-radius: 5rem;
}

.shop__init h2 {
    color: var(--color-text-ligth);
    text-shadow: 2px 2px 4px #000000;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
}

.shop__init h6{
    font-weight: bold;
    text-align: justify;
}

.shop__init img {
    width: 25vw;
}

.shop__init img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.btn__more2 {
    background: none;
    border: 4px white solid;
    padding: 0.5rem;
}

.btn__more2 p {
    background: white;
    font-weight: bold !important;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
    font-size: 1rem !important;
}

.btn__more2:hover {
    border: 4px white solid;
}

.btn__more2 p:hover {
    background: black;
    color: var(--color-btn);
    border: 4px solid var(--color-btn);
}

.btn__more {
    background: none;
    border: 2px var(--color-btn-dark) solid;
    padding: 0.5rem;
}

.btn__more p {
    background: var(--color-btn-dark);
    font-weight: 700;
    text-align: center;
    color: var(--color-text-ligth);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
}

.btn__more3 {
    background: none;
    border: 2px black solid;
    padding: 0.5rem;
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
    border: 4px var(--color-btn) solid;
}

.btn__more3 p:hover {
    background: black;
    color: var(--color-btn);
    border: 4px solid var(--color-btn);
}

.shop__init__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30rem;
    width: 40rem;
    align-items: center;
}

.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 5rem;
    margin: 5rem;
    border-radius: 3rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

/*-----------------------SHOP----------------*/

.shop__flavors {
    text-align: center;
}

.shop__flavors h3 {
    font-weight: bold;
}

.beers {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    justify-content: center;
    align-items: center;
}

/*-------------------OFFERS----------------*/

.special__offer__container {
    background-image: url('../assets/Shop-home-parallax-img-1.jpg');
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: 0% 43%;
    height: 48rem;
    padding: 1.5rem;
    margin: 4rem 5rem;
    border-radius: 5rem;
}

.special__offer {
    background-image: url('../assets/background-icon-4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 43vw;
    height: 35rem;
    margin: 3rem 2rem;
    padding-top: 0.1rem;
    border-radius: 5rem;
}

.special__offer__text {
    height: 30rem;
    margin: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    border: 2px var(--color-primary) solid;
    border-radius: 5rem;
}

.special__offer__text h3 {
    font-weight: bold;
}

.special__offer__text p {
    text-align: justify;
}

/*--------------------PRICE LIST-----------------------*/

.price__list {
    background-image: url('../assets/Menu-page-background-img-4.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    margin: 2.5rem 5rem;
    align-items: center;
    border-radius: 5rem;
}


/*----------------LIMITED EDITION-----------------*/

.limited__beer {
    margin: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
}

.limited__beer img {
    height: 50vh;
}

.limited__beer img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

/*----------------------OPINIONS----------------*/

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

.carousel-inner{
    margin: 3rem 0rem;
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

</style>