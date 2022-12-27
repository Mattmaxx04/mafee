<script setup>

const props = defineProps({
    post: {},
    typeof: Object
})

</script>

<template>

    <div v-if="post.type === 'post'">
        <div class="blog_img" :style="{ 'background-image': 'url('+post.img+' )'}">
            
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
    </div>







    
       <div v-if="post.type === 'news'" class="blog">
            <div class="blog_topic2">
                <h2>{{post.title}}</h2>
            </div>
           
            <p class="text-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas dolor ea enim qui itaque
                ad, reiciendis nostrum reprehenderit dolores suscipit vitae ipsam eos a molestias sapiente amet minus totam.
                Maxime accusantium optio similique. Ut tenetur corrupti, excepturi nisi maxime iusto, similique reprehenderit
                maiores, dolor provident optio amet? Accusantium alias tenetur architecto voluptatem, delectus ipsum quibusdam! Aut
                corrupti voluptatem similique?
                Assumenda sit in facere quia repudiandae, sed ab nihil voluptates unde, rerum accusantium laboriosam sint laborum.
                Dolorem, impedit vero harum rerum eaque voluptatem repellat? Nostrum voluptatibus totam numquam laborum quod!</p>
           
                <p class="text-blog-special">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque eveniet neque esse, illum nihil dicta unde accusamus sed totam ea quod est consequuntur distinctio recusandae, magni quibusdam? Est, labore!
            </p>
           
            <p class="text-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas dolor ea enim qui itaque
                ad, reiciendis nostrum reprehenderit dolores suscipit vitae ipsam eos a molestias sapiente amet minus totam.
                Maxime accusantium optio similique. Ut tenetur corrupti, excepturi nisi maxime iusto, similique reprehenderit
                maiores, dolor provident optio amet? Accusantium alias tenetur architecto voluptatem, delectus ipsum quibusdam! Aut
                corrupti voluptatem similique?
                Assumenda sit in facere quia repudiandae, sed ab nihil voluptates unde, rerum accusantium laboriosam sint laborum.
                Dolorem, impedit vero harum rerum eaque voluptatem repellat? Nostrum voluptatibus totam numquam laborum quod!</p>
            <p class="text-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas dolor ea enim qui itaque
                ad, reiciendis nostrum reprehenderit dolores suscipit vitae ipsam eos a molestias sapiente amet minus totam.
                Maxime accusantium optio similique. Ut tenetur corrupti, excepturi nisi maxime iusto, similique reprehenderit
                maiores, dolor provident optio amet? Accusantium alias tenetur architecto voluptatem, delectus ipsum quibusdam! Aut
                corrupti voluptatem similique?</p>
               
                <div class="imgs">
                    <img src="../assets/blog-single-img-1.jpg" class="img1" alt="">
                    <img src="../assets/blog-single-img-2.jpg" class="img2" alt="">
                </div>
           
                <p class="text-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas dolor ea enim qui itaque
                ad, reiciendis nostrum reprehenderit dolores suscipit vitae ipsam eos a molestias sapiente amet minus totam.
                Maxime accusantium optio similique. Ut tenetur corrupti, excepturi nisi maxime iusto, similique reprehenderit
                maiores, dolor provident optio amet? Accusantium alias tenetur architecto voluptatem, delectus ipsum quibusdam! Aut
                corrupti voluptatem similique?
                Assumenda sit in facere quia repudiandae, sed ab nihil voluptates unde, rerum accusantium laboriosam sint laborum.
                Dolorem, impedit vero harum rerum eaque voluptatem repellat? Nostrum voluptatibus totam numquam laborum quod!</p>
            
                <p class="text-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas dolor ea enim qui itaque
                ad, reiciendis nostrum reprehenderit dolores suscipit vitae ipsam eos a molestias sapiente amet minus totam.
                Maxime accusantium optio similique. Ut tenetur corrupti, excepturi nisi maxime iusto, similique reprehenderit
                maiores, dolor provident optio amet? Accusantium alias tenetur architecto voluptatem, delectus ipsum quibusdam! Aut
                corrupti voluptatem similique?</p>

            <div class="author_post">
                <img src="../assets/blog-author-radius.jpeg" alt="">
                <div>
                    <h2>JOHN DOE</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio repellat cupiditate aut, vero provident corrupti veritatis voluptatibus rem ducimus accusantium dignissimos, quia aliquam facere pariatur est similique laudantium maxime?</p>
                </div>
            </div>

            <h2 class="h4_comments">COMMENTS</h2>
            <div class="comments">
                <img src="../assets/img-profile-comment2.jpeg" alt="">
                <div>
                    <h2>JUSTIN BURNS</h2>
                    <p class="date_comment">February 14, 2022</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p class="reply">REPLY</p>
                </div>
            </div>
            <div class="posts">
                <img src="../assets/img-profile-comment1.jpeg" alt="">
                <div>
                    <h2>CAROL BARNETT</h2>
                    <p class="date_comment">February 14, 2022</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p class="reply">REPLY</p>
                </div>
            </div>
            <div class="location">
            <div class="tab-content">
                <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                    <h3 class="mb-4">POST A COMMENT</h3>
                    <div class="row form-reservation">
                        <div class="form-floating form-group">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2" class="label-textarea">Comment</label>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" value="Name*">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" value="Email*">
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <div class="account__btns">
                            <button class="btn btn-dark">SEND</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
        -->


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
a{
    text-decoration: none;
}

.blog_img2{
    
    width: 95%;
    height: 30rem;
    background-size: cover;
    background-position: center;
}

.blog_img3{
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
</style>