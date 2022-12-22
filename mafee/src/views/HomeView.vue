<script setup>

</script>

<template>


<div class="home__news__frame">
    <div class="home__news">
        <h2>NEWS & EVENTS</h2>
        <div class="home__news__cards">

            <div class="card" style="width: 18rem;">
                <img src="../assets/Blog-standard-img-1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">SUMMIT BREWERY</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn__card">READ MORE</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../assets/Blog-standard-img-2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">CRAFT BEERS BARS</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn__card">READ MORE</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../assets/Blog-standard-img-4.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">BEER DAY</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn__card">READ MORE</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.home__news__frame{
    background-image: url(../assets/fondo-madera-madera-textura-patron-wallpaper-concepto_53876-14103.jpg);
}

h2 {
    text-align: center;
}
a{
    text-decoration: none;
    font-weight: 600;
    color: var(--color-text-main);
}

a:hover{
    color: var(--color-btn);
}
.home__news {
    padding-top: 2rem;
    background: var(--color-background);
    margin-left: 2rem;
    margin-right: 2rem;
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
