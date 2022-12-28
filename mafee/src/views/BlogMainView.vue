<script setup>
import Post from '../components/Post.vue';
import  posts  from '../store/post.js'
import { onMounted } from 'vue';
import { getPost } from '../firebase/post.js';

onMounted(()=>{
    getPost()
})
</script>

<template>
    <div class="home_main">
        <img src="../assets/home-masonry-10.png" alt="">
    </div>
    <!-- <div class="home__discover">
        <h1>
            BEERS FAN WELCOME
        </h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus voluptate qui debitis. Rem nemo reiciendis similique dignissimos voluptatem harum delectus! Fugiat quia similique vel ipsum architecto reiciendis. Tempore, distinctio.
        </p>
        <button class="btn__more">
            <p> VIEW MORE </p>
        </button>
    </div> -->



    <div class="d-flex container_main">

        <div class="blog">
          
            <Post v-for="post in posts" :post="post" :key="post.id"/>
             
        </div>

        
        <div class="bar-right">
            <div class="one">
                <h4>ABOUT</h4>
                <img src="../assets/blog-author.jpg" alt="">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ullam officiis soluta nesciunt ducimus, ea pariatur consequuntur itaque illum nemo totam voluptatum doloremque aliquam aspernatur, praesentium nihil quibusdam quis qui?</p>
            </div>
            <div class="two">
                <h4>RECENT POSTS</h4>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/blog-standard-img-4.jpg" alt="">
                    <div class="p-3">
                        <h6>CRAFT & EXPERIENCE</h6>
                        <p>Feb 26</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/Blog-standard-img-5.jpg" alt="">
                    <div class="p-3">
                        <h6>RELAXING TIME</h6>
                        <p>Feb 26</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/Blog-standard-img-6.jpg" alt="">
                    <div class="p-3">
                        <h6>BREWERY PROCESS</h6>
                        <p>Feb 26</p>
                    </div>
                </div>
            </div>
            <div class="one">
                <h4>CATEGORIES</h4>
                <ul>
                    <li>Brewery(9)</li>
                    <li>Competition(6)</li>
                    <li>Craft(3)</li>
                    <li>Events(2)</li>
                    <li>Places(2)</li>
                    <li>Pubs(3)</li>
                </ul>
            </div>
            <div class="one">
                <h4>FOLLOW US</h4>
                <div class="icons">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-vimeo"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
            <div class="tags">
                <h4>TAGS</h4>
                <div class="d-flex">
                    <p>bars</p>
                    <p>business</p>
                    <p>lifestyle</p>
                </div>
                <div class="d-flex">
                    <p>music</p>
                    <p>photo</p>
                    <p>process</p>
                </div>
            </div>
            <div class="search">
                <h4>SEARCH</h4>
                <div>
                    <form class="form-inline d-flex p-2">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <img src="../assets/blog-banner.jpg" class="pt-4" alt="">
        </div>
    </div>

    
</template>

<style scoped>

/*--------------buttons------------------*/

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

.home_main{
    background-image: url(../assets/background-img-dark3.jpg);
    background-position: center;
    background-size: cover;
    margin: 5rem;
    padding-left: 17rem;
    border-radius: 4rem;
}

.home__discover {
    background-image: url(../assets/home-masonry-1.jpg);
    background-position: center;
    background-size: cover;
    padding: 10rem;
    height: 50rem;
    /* margin-top: 3rem; */
    margin: 5rem 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    color: white;
}

.home__discover img{
    width: 15rem;
}

/*--------------blog------------------*/

.container_main{
    margin: 5rem;
}

.blog{
    width: 80%;
    display: flex;
    flex-direction: column;
}

.bar-right{
    width: 20%;
    display: flex;
    flex-direction: column;
}

.one{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.one p{
    text-align: justify;
}

.two img{
    width: 6rem;
    height: 4rem;
}

.two p{
    font-size: 0.8rem;
}

.two{
    padding-top: 2rem;
}

.one ul{
    padding-bottom: 1rem;
}

.icons{
    display: flex;
    padding-bottom: 3rem;
    justify-content: space-around;
}

.tags{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.tags div{
    justify-content: space-around;
}

.search{
    padding-top: 1rem;
}





.blog_topic{
    display: flex;
    flex-direction: column;
    background-image: url(../assets/background-color.jpg);
    width: 95%;
    padding: 2rem 2rem 0.5rem 2rem;
    margin-bottom: 3rem;
}

.social3{
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--color-btn);
    border-top: 0.1rem solid white;
    width: 95%;
    margin-top: 2rem;
    padding-top: 2rem;
}

.blog_topic h2{
    padding-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}

.blog_topic p{
    text-align: center;
}

.blog_topic2{
    background-image: url(../assets/background-color.jpg);
    width: 95%;
    padding: 4rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.blog_topic2 a{
    text-decoration: none;
    color: black;
}



</style>