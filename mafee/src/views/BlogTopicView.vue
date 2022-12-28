<script setup>
import posts from '../store/post.js'
import { ref, computed } from 'vue';
import PostDetails from '../components/PostDetails.vue'
import { onMounted } from 'vue';
import { getComments } from '../firebase/comments.js';
import { getPost } from '../firebase/post.js';

onMounted(()=>{
    getPost()
    getComments()
})

const postWithId = ref([])

const props = defineProps({
    postid: '',
    typeOf:String,
})

const updatePost = computed(()=>{
    postWithId.value = posts.value.filter(post => post.id === props.postid)
})


</script>

<template>
    {{ updatePost }}

   

    <div class="home_main">
        <img src="../assets/home-masonry-10.png" alt="">
    </div>
    <div class="home__discover">
        <h1>
            COME HAVE FUN AND MEET THE COMMUNITY
        </h1>
        <p>
            If you are a fan of beer, then you must continue to have fun with us and our stories, so we invite you to return to the blog and continue participating in our stories, our talks, our anecdotes. We thank you for your participation. Each comment adds to us and allows us to continue growing together with you.
        </p>
        <button class="btn__more">
            <RouterLink to="/blogmain"> <p> RETURN TO THE BLOG </p> </RouterLink>
        </button>
    </div>


    <div class="d-flex container_main">
        <PostDetails v-for="post of postWithId" :post="post" :key="post.id"/>
       
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

.btn__more:hover {
    border: 2px var(--color-btn) solid;
}

.btn__more p:hover {
    background: black;
    color: var(--color-btn);
    border: 2px solid var(--color-btn);
}

a{
    text-decoration: none;
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
    height: 40rem;
    /* margin-top: 3rem; */
    margin: 5rem 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    color: white;
    border-radius: 4rem;
}

.home__discover img{
    width: 15rem;
}

.home__discover h1{
    font-size: 4rem;
    font-weight: bold;
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

.blog_img{
    background-image: url(../assets/blog-standard-img-1.jpg);
    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;
    
}

.date_name{
    background-color: white;
    width: 5%;
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 0 !important;
}

.date_number{
    background-color: var(--color-btn);
    width: 5%;
    text-align: center;
    font-size: 2rem;
    color: white;
}

.blog-title{
    padding-top: 2rem;
}

.blog-title h2{
    font-size: 1.5rem;
    font-weight: bold;
}

.author{
    font-size: 0.7rem;
    color: var(--color-btn);
}

.text-blog{
    font-size: 0.9rem !important;
    color: var(--color-text-main) !important;
    text-align: justify;
    width: 95%;
    padding: 1rem 0 1rem 0;
}

.social{
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--color-btn);
    border-bottom: 0.1rem solid var(--color-btn);
    width: 95%;
    margin-bottom: 2rem;
}

.social2{
    display: flex;
    justify-content: end;
    width: 50%;
    gap: 2rem;
}

.social1{
    width: 40%;
}

.blog_img2{
    background-image: url(../assets/blog-standard-img-2.jpg);
    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;
}

.blog_img3{
    background-image: url(../assets/home-masonry-5.jpg);
    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;
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
}

.text-blog-special{
    font-size: 0.9rem !important;
    color: black;
    text-align: justify;
    width: 95%;
    padding: 1rem 0 1rem 2rem;
    font-weight: bold;
    border-left: 0.4rem solid var(--color-btn);
}

.imgs{
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem 1rem 2rem 1rem;
    width: 95%;
}

.img1{
    width: 500px;
    height: 337.5px;
}

.img2{
    width: 500px;
    height: 337.5px;
}

.author_post{
    display: flex;
    width: 95%;
    gap: 2rem;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.2rem solid var(--color-text-main);
    border-top: 0.2rem solid var(--color-text-main);
    padding: 3rem;
}

.author_post img{
    border-radius: 50%;
    /* width: 15rem;
    height: 15rem; */
}

.author_post h2{
    font-size: 1.5rem;
    font-weight: bold;
}

.author_post p{
    font-size: 0.9rem;
    color: var(--color-text-main);
    padding-top: 1rem;
    text-align: justify;
}

.comments{
    display: flex;
    width: 95%;
    gap: 2rem;
    justify-content: start;
    align-items: center;
    border-bottom: 0.1rem solid var(--color-text-main);
    /* border-top: 0.2rem solid var(--color-text-main); */
    padding: 3rem;
}

.comments img{
    border-radius: 50%;
    /* width: 15rem;
    height: 15rem; */
}

.comments h2{
    font-size: 1.5rem;
    font-weight: bold;
}

.comments p{
    font-size: 0.9rem;
    color: var(--color-text-main);
    padding-top: 1rem;
    text-align: justify;
}

.posts{
    display: flex;
    width: 95%;
    gap: 2rem;
    justify-content: start;
    align-items: center;
    border-bottom: 0.1rem solid var(--color-text-main);
    /* border-top: 0.2rem solid var(--color-text-main); */
    padding: 3rem;
}

.posts img{
    border-radius: 50%;
    /* width: 15rem;
    height: 15rem; */
}

.posts h2{
    font-size: 1.5rem;
    font-weight: bold;
}

.posts p{
    font-size: 0.9rem;
    color: var(--color-text-main);
    padding-top: 1rem;
    text-align: justify;
}

.h4_comments{
    padding: 2rem 0rem 0rem 3rem;
    font-weight: bold;
}

.date_comment{
    color: var(--color-btn) !important;
    padding-top: 0rem !important;
    font-size: 0.7rem !important;
}

.reply{
    color: var(--color-btn) !important;
    padding-top: 1rem !important;
    font-size: 0.9rem !important;
    text-align: end !important;
    font-weight: bold;
}

.account__btns{
    margin: 0.5rem;
}

</style>