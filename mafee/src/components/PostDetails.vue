<script setup>
import Comments from '../components/Comments.vue'
import NewComment from '../components/NewComment.vue'
import { getComments } from '../firebase/comments.js';
import { onMounted } from 'vue';
import user from '../store/user.js'

onMounted(()=>{
    getComments()
})

const props = defineProps({
    post: {},
    typeof: Object
})

console.log(props.post.id);
</script>

<template>

    <div v-if="post.type === 'post'">
        <div class="blog_img" :style="{ 'background-image': 'url(' + post.img + ' )' }">

            <p class="date_name">{{ post.month }}</p>
            <p class="date_number">{{ post.day }}</p>
        </div>

        <div class="blog-title">
            <h2>{{ post.title }}</h2>
            <p class="author">{{ post.author }}</p>
            <p class="text-blog">{{ post.text }}</p>
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
        <Comments :postid="post.id"/>
        <NewComment :postid="post.id"/>     
    </div>



    <div v-if="post.type === 'news'" class="blog">
        <div class="blog_topic2">
            <h2>{{ post.title }}</h2>
        </div>

        <p class="text-blog">{{ post.text }}</p>

        <p class="text-blog-special">
            {{ post.p2 }}
        </p>

        <p class="text-blog"> {{ post.p3 }}</p>
        <p class="text-blog">{{ post.p4 }}</p>

        <div class="imgs">
            <img :src="post.extra" class="img1" alt="">
            <img :src="post.extra2" class="img2" alt="">
        </div>

        <p class="text-blog">{{ post.p5 }}</p>

        <p class="text-blog">{{ post.p6 }}</p>

        <div class="author_post">
            <img :src="post.author_img" alt="">
            <div>
                <h2>{{ post.author }}</h2>
                <p>{{ post.subtitle }}</p>
            </div>
        </div>
        <Comments :postid="post.id"/>
        <NewComment :postid="post.id"/>
    </div>

   


    <!--
            <div class="blog_topic">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, totam distinctio ullam dolorum quisquam ut deserunt animi nam laboriosam.</h2>
                <p>BREWERY PROCESS</p>
                <div class="social3">
                        <div class="social1">
                            <p>Music, photo</p>
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
-->

    <!--
            <div class="blog_topic2">
                <RouterLink to="/blogtopic"> <h2>chain of thoughts</h2> </RouterLink>
            </div>
        -->
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

.form-group{
  padding: 1rem;
}

.label-textarea{
  padding-left: 2rem;
  padding-top: 2rem;
}

.location{
    width: 95%;
    font-weight: bold;
}

.tab-content{
    padding-top: 3rem;
}

.tab-content h3{
    font-size: 2rem;
    font-weight: bold;
    padding-left: 1rem;
}

.form-check{
    padding: 2rem 0rem 2rem 3rem;
}
</style>