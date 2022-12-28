<script setup>

</script>

<template>

    <div class="home__discover text-center">
        <h2>MEET THE TEAM</h2>
    </div>
    <div class="title">
        <h2 class="text-center">WORK ENVIRONMENT</h2>
    </div>
    <div class="team__img">
        <img class="img__team" src="../assets/Home-4-img-gallery-1.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-2.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-3.jpg" alt="">
    </div>
    <div class="team__img">
        <img class="img__team" src="../assets/Home-4-img-gallery-4.jpg" alt="">
        <img class="img__team" src="../assets/blog-single-img-2.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-6.jpg" alt="">
    </div>
    <div class="team__img">
        <img class="img__team" src="../assets/Blog-standard-img-5.jpg" alt="">
        <img class="img__team" src="../assets/main-home-slider-11.jpg" alt="">
        <img class="img__team" src="../assets/main-home-slider-12.jpg" alt="">
    </div>
    <div class="title2">
        <h2 class="text-center">PROCESS DETAILS</h2>
    </div>
    <div class="team__img2">
        <!-- autoplay -->
        <video src="../assets/video1.mp4" autoplay loop class="img__team2"></video> 
        <video src="../assets/video2.mp4" autoplay loop class="img__team2"></video>
        <video src="../assets/video3.mp4" autoplay loop class="img__team2"></video>
    </div>
    <div class="team__img2">
        <video src="../assets/video4.mp4" autoplay loop class="img__team2"></video>
        <video src="../assets/video5.mp4" autoplay loop class="img__team2"></video>
        <video src="../assets/video6.mp4" autoplay loop class="img__team2"></video>
    </div>
    <div class="title2">
        <h2 class="text-center">OUR WORK TEAM</h2>
    </div>
    <div class="the__team">
        <div class="p-3 text-center us">
            <img src="../assets/team_Mati.jpeg" alt="">
            <h3>Matías Quiroga</h3>
            <h5>Co-Founder & Head Brewer</h5>
        </div>
        <div class="p-3 text-center us">
            <img src="../assets/team-Eze.jpeg" alt="">
            <h3>Ezequiel Gómez</h3>
            <h5>Co-Founder & Chief Beer Taster</h5>
        </div>
        <div class="p-3 text-center us">
            <img src="../assets/team-Lei2.jpg" alt="">
            <h3>Natasha Leila Acuña</h3>
            <h5>Lab and Quality Assurance Manager</h5>
        </div>
        <div class="p-3 text-center us">
            <img src="../assets/team-Marcos.jpg" alt="">
            <h3>Marcos Fabián</h3>
            <h5>Co-Founder & Director of Marketing</h5>
        </div>

    </div>
    <div class="skills_container">
        <div class="meet__skills">
            <div class="skills">
                <h3>SKILLS</h3>
                <p>Based on the comments of each of our clients, we gladly present our strengths, which, like everything, must always be improved. We appreciate your participation, as you always help us grow.</p>
            </div>
            <div class="meet__progress">
                <div>
                    <div class="d-flex justify-content-between">
                        <h6> CUSTOMER SUPPORT</h6>
                        <h6>97%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:97%;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>TECHNICAL SUPPORT</h6>
                        <h6>93%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:93%;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>SPEED IN ORDER DELIVERY</h6>
                        <h6>89%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:89%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.home__discover {
    padding: 8rem;
    margin: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/Team-title-img.jpg");
    background-position: center;
    background-size: cover;
    /* height: 35vh; */
    border-radius: 5rem;
}

.title{
    background-image: url(../assets/background-img-color.jpg);
    padding: 5rem;
    margin: 0rem 5rem 4rem 5rem;
    border-radius: 3rem;
}

.title h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 5rem;
    margin: 5rem 5rem 4rem 5rem;
    border-radius: 3rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

.home__discover h2{
    font-weight: bold;
    font-size: 2.5rem;
}

.team__img{
    justify-content: center;
    display: flex;
}

.img__team {   
    padding: 1rem;
    width: 26rem;
    border-radius: 3rem;
    height: 22rem;
}

.team__img2{
    justify-content: center;
    display: flex;
}

.img__team2 {   
    padding: 1rem;
    width: 25rem;
    border-radius: 3rem;
    /* height: 20rem; */
}

.home__discover h2{
    color: white;
}

.meet__process {
    /* width: 95vw; */
    padding: 3rem;
}

.beer__process {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.the__process{
    margin-left: 3rem;
}

.the__team{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* padding: 3rem; */
    width: 100vw;
}

.the__team h5{
    color: var(--color-primary);
    font-size: 1rem;
}

.the__team h3{
    font-size: 2rem;
    font-weight: bold;
}

.the__team img{
    /* height: 30rem; */
    padding: 1.5rem;
    height: 30rem;
    border-radius: 5rem;
}

.skills_container{
    padding: 0 3rem;
    background-image: url('../assets/background-color-dark-table.jpg');
    margin: 3rem 5rem 0rem 5rem;
    border-radius: 5rem 5rem 0rem 0rem;
}

.meet__skills {
    display: flex;
    padding: 4rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.skills {
    width: 35vw;
}

.meet__progress {
    /* background-image: url('../assets/background-icon-1.png'); */
    background-position: center;
    width: 35vw;
    padding: 2rem;
}

.meet__progress h6{
    color: white;
    padding-bottom: 1rem;
}

.skills h3 {
    font-weight: bold;
    color: white;
    padding-bottom: 1rem;
}

.skills p {
    color: white;
    text-align: justify;
}

.us{
    width: 40%;
}
/* progress bar */
.progress {
    height: 0.5rem;
    width: 35vw;
    border: 1px solid black;
    background-color: #e6f3fa;
    margin-bottom: 15px;
}

.progress-bar {
    height: 93vw;
    background: #FFC123;
    border: 0.2px solid white;
    display: flex;
    align-items: center;
    transition: width 0.25s;
    border-radius: 5px;
}
</style>