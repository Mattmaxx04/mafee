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
    <div class="title2">
        <h2 class="text-center">WORK WITH US</h2>
    </div>
    <div class="form-decoration form-img">
    
        <form action="">
            <div class="textbox">
                <input type="text" name="nameSurname" id="" required>
                <label>Name and surname</label>
            </div>
    
            <div class="textbox">
                <input type="mail" name="mail" id="" required>
                <label>E-mail</label>
            </div>
            <div class="textbox">
                <input type="text" name="phone" id="" required>
                <label>Phone</label>
            </div>
    
            <div class="textbox">
                <input type="text" name="age" id="" required>
                <label>Age</label>
            </div>
    
            <div class="textbox">
                <input type="text" name="currentResidence" id="" required>
                <label>Address</label>
            </div>
    
            <div class="textbox">
                <input type="text" name="in" id="in" required>
                <label>City</label>
            </div>
    
            <div class="textbox">
                <input type="text" name="in" id="in" required>
                <label>State</label>
            </div>
            <div class="form-floating form-group textbox">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 100px"></textarea>
                <label for="floatingTextarea2" class="label-textarea">Notes</label>
            </div>
            <div class="textbox2">
                <input type="file" name="file" id="" required>
                <label>Upload CV</label>
            </div>
    
            <button class="btn__more2" type="submit">
                <p>SEND</p>
            </button>
        </form>
        <img src="../assets/home-masonry-13.png" alt="" class="img-faq">
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

.btn__more2 {
    background: none;
    border: 2px black solid;
    padding: 0.5rem;
}

.btn__more2 p {
    background: var(--color-btn);
    font-weight: bold !important;
    text-align: center;
    color: var(--color-text-dark);
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 !important;
    font-size: 1rem !important;
}

.btn__more2:hover {
    border: 4px var(--color-btn) solid;
}

.btn__more2 p:hover {
    background: black;
    color: var(--color-btn);
    border: 4px solid var(--color-btn);
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

/*---------------FORM-----------------*/

.form-decoration{
  display: flex;
  justify-content:center;
  /* width: 80%; */
  gap: 3rem;
  align-items: center;
  margin: 3rem;
}

.form-group{
  margin-top: 1rem;
  border-bottom: 2px var(--color-btn) solid;
  /* border-radius: 0.2rem; */
}

.form-group textarea{
  border: none;
}

.form-group label{
    padding-left: 0rem !important;
    margin-left: 0rem !important;
}

.form-img input{
    border: none;
    height: auto;
    background: transparent;
    outline: none;      
    /* width: 100%; */
}
.img-faq{
  height: 45rem;
}
.form-img form{
    /* width: 90% !important; */
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
.textbox{
    width: 90%;
    /* position: relative; */
    margin-bottom: 16px;
}

.textbox input{
    width: 100%;
    padding: 0 24px 0 36px;
    border-bottom: 2px solid var(--color-primary);
    height: 72px;        
    color: var(--color-text-dark);
}

.form-img input:focus{
    border-color: var(--color-btn);
}
:is(input:focus, input:valid)~span{
    color: rgb(255 255 255/96%);
}
.textbox label{
    position: absolute;
    top: 50%;
    left: 36px;
    translate: 0 -50%;
    color: var(--color-primary);
    pointer-events: none;
    transition: 0.4s;
}

:is(input:focus, input:valid)~label{
    translate: -40px -40px;
    scale: 0.875;
}
.form-img input:focus ~ label{
    color: var(--color-btn);
}

.form-img button{
    margin-top: 2rem;
}

#file {
    display: none;
}

.textbox2 label{
    position: absolute;
    top: -20%;
    left: 36px;
    translate: 0 -50%;
    color: var(--color-primary);
    pointer-events: none;
    transition: 0.4s;
}

.textbox2 input{
    width: 100%;
    padding: 24px 24px 0 36px;
    border-bottom: 2px solid var(--color-primary);
    height: 72px;        
    color: var(--color-text-dark);
}

.textbox2{
    width: 90%;
    position: relative;
    margin-bottom: 16px;
    margin-top: 3rem;
    /* padding-bottom: 4rem; */
}

@media (max-width: 480px) {
  
    .home__discover{
        margin: 0;
        border-radius: 0;
    }
    .title{
        margin: 0;
        border-radius: 0;
    }
    .img__team{
        padding: 0;
        border-radius: 0;
        width: 100%;
        height: 100%;
    }
    .title2{
        margin: 0;
        border-radius: 0;
    }
    .team__img{
        flex-wrap: wrap;
    }
    .team__img2{
        flex-wrap: wrap;
    }
    .us{
        width: 100%;
        padding: 0!important;
        margin: 0!important;
    }
    .the__team img{
        margin: 0;
        padding: 0;
        border-radius: 0;
        width: 80%;
        height: 80%;
    }
    .form-decoration{
        flex-wrap: wrap;
    }
    .skills_container{
        margin: 0;
        
        border-radius: 0;
    }

}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}
</style>