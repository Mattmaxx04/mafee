<script setup>
const Swal = SweetAlert;
const send = ()=> {
      Swal.fire({
        title: 'Thanks!',
        text: 'Your reservation has been received.',
        confirmButtonText: 'Cool'
      });
    }
</script>

<template>
  <a href="https://api.whatsapp.com/send?phone=+543816389120&text=Hello. How are you? Would you give me information, please?"><img
                    src="../assets/wspp.png" alt="fotoChat" class="chat"></a>
    <div class="title2">
        <h2 class="text-center">RESERVATION ENQUIRY</h2>
    </div>
    <div class="d-flex justify-content-center form-img">
      <div class="title-main">
              <p>Welcome to the reservation system of our craft brewery. Here you can leave your information to contact you and thus continue advancing in the reservation of the requested service. However, by the time you submit the form, you will already be part of our database and, above all, you will have reserved a place to use our services. We will contact you soon.</p>
      </div>
      <div class="form-decoration">

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
            <!-- <div class="textbox2">
                <input type="date" name="birth" id="birth" required>
            <label>Birth</label>
            </div> -->

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
            <!-- <div class="textbox2">                
                <input type="file" name="file" id="" required>
                <label>Upload CV</label>
            </div> -->
            
            <button class="btn__more2" type="submit" @click.prevent="send()">
                <p>SEND</p>
            </button>
        </form>
        <img src="../assets/faq2.jpg" alt="" class="img-faq">
      </div>
    </div>
    <div class="faq container p-2">
      <div class="container text-center special">
        <h2>FAQ</h2>
      </div>
      <div class="d-flex container mb-5 accord">
        <div class="accordion accordion-flush container" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                WHAT IS A JOIN-IN BREWERY TOUR?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">The beer factory tours promise fun and learning for the whole family. Vecinos and tourists can access guided tours of the factories, live shows, tastings and open talks in different bars. More precisely, plans are being made to incorporate a beer tour, so that tasting, experience and learning are combined</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                WHAT TO EXPECT ON A JOIN-IN BREWERY TOUR?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">The beer factory tours promise fun and learning for the whole family. Vecinos and tourists can access guided tours of the factories, live shows, tastings and open talks in different bars. More precisely, plans are being made to incorporate a beer tour, so that tasting, experience and learning are combined.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                WHICH BREWERIES WILL WE VISIT?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">By starting, we will visit our own brewery, as well as the local adherents. On the other hand, our commercial partner and who helped us in the foundation of the company was Cervecería and Maltería Quilmes, for which reason we will also visit its factories.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                WHAT DOES YOUR COMPANY TOUR OFFER?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">The tour of our company in particular offers tastings of the different beers that we have, as well as a guided tour of the entire operations center. Finally, gifts consisting of assembled tasting packs are offered, such as limited edition beers.</div>
            </div>
          </div>
        </div>
        <div class="accordion accordion-flush container" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                HOW LONG IS THE TOUR?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">The tour of our company lasts approximately 3 hours, counting the snack. If you plan to do the commercial tour through the different companies, it consists of approximately 8 hours, with 2 snacks in between.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                WHAT IS INCLUDED ON A QUILMES BREWERY TOUR?
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">The Quilmes brewery tour in particular offers the same as we do, with the addition of a limited-edition six-pack of beers, plus special cloth bags.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSeven">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                HOW MUCH DOES A JOIN-IN BREWERYTOUR COST?
              </button>
            </h2>
            <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more
                representative of how this would look in a real-world application.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingEight">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                CANCELLATION POLICY
              </button>
            </h2>
            <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more
                representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
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

.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 5rem;
    margin: 5rem;
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

/*---------------FORM-----------------*/

.form-img{
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 6rem 6rem 2rem 6rem;
    align-items: center;
}

.title-main{
  text-align: justify;
  margin: 0rem 5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.form-decoration{
  display: flex;
  justify-content:center;
  width: 90%;
  gap: 3rem;
  align-items: center;
  margin-bottom: 3rem;
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
    width: 100%;
}
.img-faq{
  height: 45rem;
}
.form-img form{
    width: 90% !important;
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

.faq{
    background-image: url(../assets/background-color.jpg);
    border-radius: 5rem 5rem 0rem 0rem;
}

.faq h2{
  /* padding-bottom: 2rem; */
  background-image: url(../assets/background-color.jpg);
  padding: 1rem;
}

.accordion-header button{
  font-weight: bold;
  color: var(--color-btn);
  /* margin-top: 1rem; */
}

.accordion-button{
  background-image: url(../assets/background-color.jpg);
}

.special{
  padding-top: 1rem;
}

.special h2{
  font-weight: bold;
}

.accordion-body{
  background-image: url(../assets/background-color.jpg);
}

@media (max-width: 480px) {
  
  .title2{
    margin: 0;
    border-radius: 0;
  }
  .form-img{
    margin: 1rem;
  }
  .title-main{
    margin: 1rem;
  }
  .form-decoration{
    flex-wrap: wrap;
  }
  .faq{
    border-radius: 0;
  }
.accord{
  flex-wrap: wrap;
}
.img-faq{
  height: 27rem;
}
}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}
</style>
