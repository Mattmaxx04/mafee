<script setup>

</script>

<template>

    <div class="home__discover text-center">
        <h2>MEET THE TEAM</h2>
    </div>
    <div class="d-flex justify-content-center">
        <img class="img__team" src="../assets/Home-4-img-gallery-1.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-2.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-3.jpg" alt="">
    </div>
    <div class="d-flex justify-content-center">
        <img class="img__team" src="../assets/Home-4-img-gallery-4.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-5.jpg" alt="">
        <img class="img__team" src="../assets/Home-4-img-gallery-6.jpg" alt="">
    </div>

    <div class="meet__process d-flex justify-content-center align-items-center">
        <div>
            <img src="../assets/Shop-home-video-img.jpg" alt="">
        </div>
        <div class="the__process">
            <div class="d-flex flex-column">
                <div class="beer__process d-flex">
                    <img src="../assets/about-home-04-icon-3.png" alt="">
                    <div class="ms-3">
                        <h6>BREWERY PROCESS</h6>
                        <p class="color-text-main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                            sed iusto sapiente ex nemo
                            voluptate, in neque modi, at laudantium accusamus. Voluptatum maiores quia saepe eum eveniet
                            eaque. Quibusdam, qui.</p>
                    </div>
                </div>
                <div class="beer__process d-flex">
                    <img src="../assets/about-home-04-icon-7.png" alt="">
                    <div class="ms-3">
                        <h6>CRAFT BEER</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas hic libero accusantium
                            tenetur facilis quibusdam velit, repudiandae officiis pariatur est voluptates earum vel
                            nihil corrupti aspernatur, iste sit dolorum.</p>
                    </div>
                </div>
                <div class="beer__process d-flex">
                    <img src="../assets/about-home-04-icon-6.png" alt="">
                    <div class="ms-3">
                        <h6>PUB SUPPLY</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est? Nisi dolore sint
                            eos at! Maxime tenetur, quam, aliquam, ad temporibus reprehenderit non sint optio incidunt
                            delectus voluptatum nobis eligendi!</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
    <div class="the__team">
        <div class="p-3 text-center">
            <img src="../assets/team_Mati.jpeg" alt="">
            <h3>Matías Quiroga</h3>
            <h5>Co-Founder & Head Brewer</h5>
        </div>
        <div class="p-3 text-center">
            <img src="../assets/team-Eze.jpeg" alt="">
            <h3>Ezequiel Gómez</h3>
            <h5>Co-Founder & Chief Beer Taster</h5>
        </div>
        <div class="p-3 text-center">
            <img src="../assets/team-Lei.jpg" alt="">
            <h3>Natasha Leila Acuña</h3>
            <h5>Lab and Quality Assurance Manager</h5>
        </div>
        <div class="p-3 text-center">
            <img src="../assets/team-Marcos.jpg" alt="">
            <h3>Marcos Fabián</h3>
            <h5>Co-Founder & Director of Marketing</h5>
        </div>

    </div>
    <div class="skills_container">
        <div class="meet__skills">
            <div class="skills">
                <h3>SKILLS</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis fuga ipsum, laborum ducimus
                    vitae deleniti, cum, numquam soluta molestiae possimus consequuntur veritatis. Enim quidem atque
                    esse
                    neque! Quam, consequatur?</p>
            </div>
            <div class="meet__progress">
                <div class="progress__elements">
                    <div class="d-flex justify-content-between">
                        <h6> BREWERY PROCESS</h6>
                        <h6>93%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:93%;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>EXCELLANT TASTE</h6>
                        <h6>93%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:87%;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>FINEST INGREDIENTS</h6>
                        <h6>93%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width:97%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.home__discover {
    padding: 1.5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/Team-title-img.jpg");
    height: 35vh;
    margin: 2.5rem;
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

.img__team {
    padding: 1.5rem;
    width: 39rem;
}

.the__process{
    margin-left: 3rem;
}

.the__team{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem;
    width: 100vw;
}

.the__team h5{
    color: var(--color-primary);
}

.the__team img{
    height: 30rem;
    padding: 1.5rem;
}

.skills_container{
    padding: 0 3rem;
}

.meet__skills {
    background-image: url('../assets/background-color.jpg');
    background-position: 0% -13%;
    background-size:cover;
    background-repeat: no-repeat;
    height: 40vh;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.skills {
    width: 35vw;
    margin-top: 6rem;
}

.meet__progress {
    background-image: url('../assets/background-icon-1.png');
    background-position: center;
    background-size: 50rem;
    background-repeat: no-repeat;
    width: 35vw;
    padding: 2rem;
}

.progress__elements{
    margin-top: 5rem;

}

h6 {
    font-weight: bold;
}

p {
    color: var(--color-text-main);
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