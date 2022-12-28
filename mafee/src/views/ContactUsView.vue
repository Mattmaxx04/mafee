<script setup>

const Swal = SweetAlert;
const send = ()=> {
      Swal.fire({
        title: 'Thanks!',
        text: 'Your mail has been received.',
        confirmButtonText: 'Cool'
      });
    }

</script>

<template>

    <div class="title2">
        <h2 class="text-center">CONTACT US</h2>
    </div>
    <!-- <div class="d-flex justify-content-center form-img container">
        <div class="location">
        <div class="tab-content p-4 p-md-5">
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 class="mb-4">SEND US MESSAGE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci accusamus, debitis nobis nihil in sed ad, beatae officiis veniam minus dolorum, animi id reprehenderit officia ipsam. Cum, rerum quis!</p>
                <div class="row form-reservation">
                    <div class="form-floating form-group">
                      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px"></textarea>
                      <label for="floatingTextarea2" class="label-textarea">Comment</label>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" value="Ezequiel Gomez">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" value="juanezequielgomez95@gmail.com">
                        </div>
                    </div>
                    <div class="account__btns">
                    <button class="btn btn-dark">SEND</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div> -->
    <div class="d-flex justify-content-center form-img">
      <div class="title-main">
              <p>Here you can leave us your information and the query you have. Our customer service team or the corresponding area, depending on your query, will contact you as soon as possible. Do not forget any data. We are in touch!</p>
      </div>
      <div class="form-decoration">
        <form action="">
            <div class="textbox">
                <input type="text" name="nameSurname" id="" required>
            <label>Name</label>
            </div>
            <div class="textbox">
                <input type="mail" name="mail" id="" required>
            <label>E-mail</label>
            </div>
            <div class="form-floating form-group textbox">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                  style="height: 100px"></textarea>
                <label for="floatingTextarea2" class="label-textarea">Notes</label>
            </div>
            <button class="btn__more2" type="submit" @click.prevent="send()">
                <p>SEND</p>
            </button>
        </form>
        <div class="d-flex flex-column column-1">
            <h4>OFFICE & TAP ROOM</h4>
            <div>
                <h6>OFFICE OPENING HOURS:</h6>
                <p>8-4pm wednesday only</p>
            </div>
            <div>
                <h6>TAP ROOM OPENING HOURS:</h6>
                <p>12-7pm Monday to Wednesday</p>
                <P>12-9pm Thursday to Friday</P>
                <p>10-9pm Saturday</p>
            </div>
            <div>
                <h6>BREWERY TOURS</h6>
                <P>8-4pm weekdays only</P>
            </div>
        </div>
        <div class="d-flex flex-column column-2">
            <h4>CONTACT US</h4>
            <div>
                <h6>GENERAL ENQUIRIES</h6>
                <p>phone: <a href="tel:+543816389120">+54 93816389120</a></p>
                <p>mail: <a href="mailto:mafeebeers@gmail.com?Subject=Request%20en%20information">mafeebeers@gmail.com</a></p>
            </div>
            <div>
                <h6>GROUP TOURS & EVENTS</h6>
                <p>phone: <a href="tel:+543816389120">+54 93816389120</a></p>
                <p>mail: <a href="mailto:mafeebeers@gmail.com?Subject=Request%20en%20information">mafeebeers@gmail.com</a></p>
            </div>
            <div>
                <h6>OUR SHOP</h6>
                <p>phone: <a href="tel:+543816389120">+54 93816389120</a></p>
                <p>mail: <a href="mailto:mafeebeers@gmail.com?Subject=Request%20en%20information">mafeebeers@gmail.com</a></p>
            </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8917827159485!2d-65.23091488480229!3d-26.843394083157516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c799ae43cd7%3A0x953da00896cdc8f1!2sBlock%203%20-%20Decanato%20-%20Facultad%20de%20Ciencias%20Exactas%20y%20Tecnolog%C3%ADa%20de%20la%20U.N.T.!5e0!3m2!1ses-419!2sar!4v1672050533088!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>
    </div>

</template>

<style scoped>

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

.form-img{
    display: flex;
    gap: 5rem;
    margin: 5rem 5rem 0rem 5rem;
    justify-content: center;
    align-items: center;
}

.label-textarea{
  padding-left: 2rem;
  padding-top: 2rem;
}

.column-1{
    width: 35%;
    gap: 2rem;
}

.column-2{
    width: 35%;
    gap: 2.8rem;
}

.column-1 h6{
    font-weight: bold;
    /* color: var(--color-btn); */
}

.column-2 h6{
    font-weight: bold;
    /* color: var(--color-btn); */
}

.column-1 h4{
    font-weight: bold;
    color: var(--color-btn);
}

.column-2 h4{
    font-weight: bold;
    color: var(--color-btn);
}

.column-2 p{
    font-weight: bold;
}

.form-img{
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 6rem 3rem 0rem 6rem;
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

a{
    /* font-weight: bold; */
    color: var(--color-btn);
    text-decoration: none;
}

.iframe{
    width: 80rem;
    height: 30rem;
    margin: 3rem 3rem 0rem 3rem;
    border-left: 6px solid var(--color-btn);
    border-right: 6px solid var(--color-btn);
    border-top: 6px solid var(--color-btn);
    border-radius: 3rem 3rem 0rem 0rem;
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
    .column-1{
        width: 100%;
    }
    .column-2{
        width: 100%;
    }
    .iframe{
        width: 100%;
        border-radius: 0;
        border: 6px solid var(--color-btn);
    }
}

@media (max-width: 768px) {
  
}

@media (max-width: 1024px) {
  
}

@media (max-width: 1200px) {
  
}
</style>