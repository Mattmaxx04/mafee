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
    <a href="https://api.whatsapp.com/send?phone=+543816389120&text=Hello. How are you? Would you give me information, please?"><img
                    src="../assets/wspp.png" alt="fotoChat" class="chat"></a>
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
                <p>Here we are going to talk about everything a little. The intention of the team is to be able to interact with customers (or not) and get to know each other a little more, through anecdotes and news.</p>
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
                    <img src="../assets/blog-standard-img-5.jpg" alt="">
                    <div class="p-3">
                        <h6>RELAXING TIME</h6>
                        <p>Jun 16</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../assets/blog-standard-img-6.jpg" alt="">
                    <div class="p-3">
                        <h6>BREWERY PROCESS</h6>
                        <p>Nov 12</p>
                    </div>
                </div>
            </div>
            <div class="one">
                <h4>CATEGORIES</h4>
                <ul>
                    <li>Brewery (9)</li>
                    <li>Competition (6)</li>
                    <li>Craft (3)</li>
                    <li>Events (2)</li>
                    <li>Places (2)</li>
                    <li>Pubs (3)</li>
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
            <img src="../assets/blog-banner.jpg" class="pt-4 banner" alt="">
        </div>
    </div>

    
</template>

<style scoped>

.chat {
  width: 3rem;
height: auto;
/* background-color: rgb(255, 245, 237,0.2); */
/* border-radius: 50%; */
position: fixed;
bottom: 75px;
left: 15px;
cursor: pointer;
/* box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px transparent; */
z-index: 999999;
/* padding: 1rem; */
}

.chat:hover{
  transform: scale(1.3);
}

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
    background-image: url(../assets/background-color.jpg);
    color: black;
    padding: 2rem;
    /* border-radius: 3rem; */
}

.one{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.one h4{
    font-weight: bold;
    color: var(--color-btn);
    border-top: 2px var(--color-btn) solid;
    padding-top: 2rem;
}

.one p{
    text-align: justify;
}

.one img{
    border-radius: 1rem;
}

.two img{
    width: 6rem;
    height: 4rem;
}

.two p{
    font-size: 0.8rem;
}

.two h4{
    font-weight: bold;
    color: var(--color-btn);
    border-top: 2px var(--color-btn) solid;
    padding-top: 2rem;
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

.tags h4{
    font-weight: bold;
    color: var(--color-btn);
    border-top: 2px var(--color-btn) solid;
    padding-top: 2rem;
}

.tags div{
    justify-content: space-around;
}

.search{
    padding-top: 1rem;
}

.search h4{
    font-weight: bold;
    color: var(--color-btn);
    border-top: 2px var(--color-btn) solid;
    padding-top: 2rem;
}

.two h6{
    font-weight: bold;
}

.two h6:hover{
    color: var(--color-btn);
    cursor: pointer;
}

.one li:hover{
    font-weight: bold;
    color: var(--color-btn);
    cursor: pointer;
}

.icons i:hover{
    color: var(--color-btn);
    -webkit-transform: scale(1.6);
    transform: scale(1.6);
    cursor: pointer;
}

.tags p:hover{
    color: var(--color-btn);
    font-weight: bold;
    cursor: pointer;
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


@media (max-width: 480px) {
  

    .home_main{
        margin: 0;
        border-radius: 0;
        min-height: 33vh;
        padding: 0;
    }
    .home_main img{
        width: 100%;
    }
    .container_main{
        flex-direction: column;
        margin: 0.1rem;
        margin-top: 1rem;
        width: 98%;
        padding: 0;
        align-items: center;
    }
    .social2{
        flex-wrap: wrap;
    }
    .bar-right{
        width: 90%;

    }
}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}
</style>