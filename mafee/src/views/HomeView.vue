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
                        <img src="../assets/main-home-slider-8.jpg" class="carousel__img" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <button class="btn__more">
                                <p> VIEW MORE </p>
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/main-home-slider-9.jpg" class="carousel__img" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                            <button class="btn__more">
                                <p> VIEW MORE </p>
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/main-home-slider-10.jpg" class="carousel__img" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <button class="btn__more">
                                <p> VIEW MORE </p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="home__crafted">
        <div class="home__crafted__text">
            <h2>CRAFTED TO ISPIRE</h2>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo esse nihil ipsa dolore sed omnis,
                exercitationem, magni nam eum laudantium quisquam nemo. Expedita ut qui accusantium dolores veniam
                blanditiis iure fugiat, incidunt nihil velit! Recusandae ad qui molestias! Sequi neque enim
                exercitationem inventore?</P>
            <img src="../assets/home3-img-3.png" alt="" srcset="" class="crafted__img">
        </div>
        <div class="home__crafted__img">
            <img src="../assets/home3-img-1.jpg" alt="" srcset="" class="crafted__img">
            <img src="../assets/home3-img-2.jpg" alt="" srcset="" class="crafted__img">
        </div>
    </div>

    <div class="home__aromas">
        <div class="home__aromas__img">
            <div class="home__aromas__content">
                <img src="../assets/main-home-img-3.png" class="aromas__img" alt="" srcset="">
                <div class="aromas__text">
                    <h2>ENJOY UNIQUE AROMAS</h2>
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

    <div class="list__container">
<List v-for="beer in beers" :beer="beer" :key="beer.id"/>
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
    font-weight: 700;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
}

/*--------------discover------------------*/
.carousel__img {
    max-height: 78vh;
}

.home__discover__carousel {
    display: flex;
    margin: 1rem;
    justify-content: center;
}

.home__discover {
    background-image: url(../assets/background-madera.jpg);
    padding: 1.5rem;
    margin-top: 3rem;
}

/*--------------crafted------------------*/
.home__crafted {
    display: flex;
    margin: 1.5rem;
}

.home__crafted__text {
    width: 50%;
    padding: 2rem;
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

/*--------------aromas------------------*/
.home__aromas {
    background-image: url(../assets/background-madera.jpg);
    padding: 1.5rem;
    
}

.home__aromas__img {
    background-image: url(../assets/main-home-slider-11.jpg);
    padding: 1rem;
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
