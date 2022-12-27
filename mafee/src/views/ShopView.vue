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
            <button class="btn__more">
                <p> VIEW MORE </p>
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
                <h3>SPECIAL OFFER</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nisi hic, velit ullam recusandae vel
                    odio similique! Aliquam fuga voluptates repellat itaque tenetur, dolorum omnis placeat? Repellat
                    reprehenderit sed officiis!</p>
                <button class="btn__more__yellow">
                    <p> VIEW MORE </p>
                </button>
            </div>
        </div>
    </div>

    <div class="pricing__list">
        <h3>PRICING LIST</h3>
    </div>



    <div class="price__list">
        <List v-for="beer in beers" :beer="beer" :key="beer.id" />

    </div>
    <div class="limited__edition">
        <h3>LIMITED EDITION</h3>
    </div>
    <div class="limited__beer">
        <img src="../assets/beer-limited-edition-1.png" alt="">
        <img src="../assets/beer-limited-edition-2.png" alt="">
        <img src="../assets/beer-limited-edition-3.png" alt="">
        <img src="../assets/beer-limited-edition-4.png" alt="">
    </div>
    <div class="about__us">
        <div class="about__us__text">
            <h4>WHAT THEY SAY ABOUT US</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat dicta aperiam labore
                laboriosam error! Rerum animi voluptatum esse harum unde eligendi culpa itaque magni, obcaecati, ipsa
                hic qui commodi?</p>
            <h6>-BEER AVOCATE</h6>
        </div>
    </div>
</template>

<style scoped>
.shop__init {
    background-image: url(../assets/background-yellow2.jpg);
    background-size: cover;
    background-position: 0% 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem;
    margin: 4rem 2.5rem;
}

.shop__init h2 {
    color: var(--color-text-ligth);
    text-shadow: 2px 2px 4px #000000;
    font-size: 4rem;
}

.shop__init img {
    width: 25vw;
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

.shop__init__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30rem;
    width: 40rem;
}

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

.special__offer__container {
    background-image: url('../assets/Shop-home-parallax-img-1.jpg');
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: 0% 43%;
    height: 48rem;
    padding: 1.5rem;
    margin: 4rem 2.5rem;
}

.special__offer {
    background-image: url('../assets/background-icon-4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 43vw;
    height: 35rem;
    margin: 3rem 2rem;
    padding-top: 0.1rem;
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
}

.special__offer__text h3 {
    font-weight: bold;
}

.btn__more__yellow {
    background: none;
    border: 2px var(--color-text-dark) solid;
    padding: 0.5rem;
}

.btn__more__yellow p {
    background: var(--color-btn);
    font-weight: 700;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
}

.pricing__list {
    background-image: url(../assets/background-img-color.jpg);
    text-align: center;
    padding: 4rem;
    margin: 2.5rem;
}

.pricing__list h3 {
    font-weight: bold;

}

.price__list {
    background-image: url('../assets/Menu-page-background-img-4.jpg');
    display: flex;
    flex-direction: column;
    padding: 4rem;
    margin: 2.5rem;
}

.limited__edition {
    background-image: url('../assets/Offerings-holder-img-5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 20%;
    margin: 2.5rem;
    padding: 5rem;
    padding-bottom: 7rem;
    text-align: center;
}

.limited__edition h3 {
    color: var(--color-text-ligth);
    font-weight: bold;
}

.limited__beer {
    margin: 2.5rem;
    display: flex;
    justify-content: space-around;
}

.limited__beer img {
    height: 50vh;
}

.about__us {
    background-image: url('../assets/background-icon-2.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 47% 0%;
    height: 50vh;
    margin: 2.5rem;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about__us__text {
    margin-top: 5rem;
    text-align: center;
    width: 40rem;
}

.about__us__text h4 {
    font-weight: bold;
}
</style>