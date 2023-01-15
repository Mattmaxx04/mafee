<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    post: {},
    typeof: Object
})

</script>

<template>

    <div v-if="post.type === 'post'">
        <RouterLink :to="{path: '/blogtopic', query: { postid: post.id}}">
            
            <div class="blog_img" :style="{ 'background-image': 'url(' + post.img + ' )' }">
               
                <p class="date_name">{{ post.month }}</p>
                <p class="date_number">{{ post.day }}</p>
            </div>

            <div class="blog-title">
                <h2>{{ post.title }}</h2>
                <p class="author">{{ post.author }}</p>
                <!--<p class="text-blog">{{post.text}}</p>-->
                <div class="social">
                    <div class="social1">

                        <p>{{ post.topic }}</p>
                    </div>
                    <div class="social2">
                        <p>Share:</p>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>



    <div v-if="post.type === 'news'" class="blog_topic">
        <RouterLink :to="{path: '/blogtopic', query: { postid: post.id}}">
            <h2 class="black">{{ post.title }}</h2>
            <p class="black">{{ post.subtitle }}</p>
            <div class="social3">
                <div class="social1">
                    <p>{{ post.topic }}</p>
                </div>
                <div class="social2">
                    <p>Share:</p>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </RouterLink>
    </div>

   


    <!-- <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> -->

</template>

<style scoped>
.black {
    color: rgb(39, 32, 32);
}

a {
    text-decoration: none;
}


.blog_img2 {

    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;
}

.blog_img3 {
    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;
}

.blog_img {
    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;

}

.date_name {
    background-color: white;
    width: 5%;
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 0 !important;
}

.date_number {
    background-color: var(--color-btn);
    width: 5%;
    text-align: center;
    font-size: 2rem;
    color: white;
}


.blog-title {
    padding-top: 2rem;
}

.blog-title h2 {
    color: rgb(37, 35, 35);
    font-size: 1.5rem;
    font-weight: bold;
}

.author {
    font-size: 0.7rem;
    color: var(--color-btn);
}

.text-blog {
    font-size: 0.9rem !important;
    color: var(--color-text-main) !important;
    text-align: justify;
    width: 95%;
    padding: 1rem 0 1rem 0;
}


.social {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--color-btn);
    border-bottom: 0.1rem solid var(--color-btn);
    width: 95%;
    margin-bottom: 2rem;
}

.social2 {
    display: flex;
    justify-content: end;
    width: 50%;
    gap: 2rem;
    
}

.social1 {
    width: 40%;
}


.blog_topic {
    display: flex;
    flex-direction: column;
    background-image: url(../assets/background-color.jpg);
    width: 95%;
    padding: 2rem 2rem 0.5rem 2rem;
    margin-bottom: 3rem;
    border-bottom: 0.1rem solid var(--color-btn);
}

.social3 {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--color-btn);
    border-top: 0.1rem solid white;
    width: 95%;
    margin-top: 2rem;
    padding-top: 2rem;
}

.blog_topic h2 {
    padding-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}

.blog_topic p {
    text-align: center;
}

.blog_topic2 {
    background-image: url(../assets/background-color.jpg);
    width: 95%;
    padding: 4rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.blog_topic2 a {
    text-decoration: none;
    color: black;
}
</style>