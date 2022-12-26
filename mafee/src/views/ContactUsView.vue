<script setup>

</script>

<template>

    <div class="home__discover text-center">
        <h2>CONTACT US</h2>
    </div>
    <div class="d-flex justify-content-center form-img container">
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
                            <input type="text" class="form-control" value="Name*">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" value="Email*">
                        </div>
                    </div>
                    <div class="account__btns">
                    <button class="btn btn-dark">SEND</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
        <div class="d-flex flex-column column-1">
            <h4>OFFICE & TAP ROOM</h4>
            <div>
                <h6>OFFICE OPENING HOURS:</h6>
                <p>8-4pm wednesday only</p>
                <P>phone: +91 9876543215</P>
            </div>
            <div>
                <h6>TAP ROOM OPENING HOURS:</h6>
                <p>12-7pm Monday to Wednesday</p>
                <P>12-9pm Thursday to Friday</P>
                <p>10-9pm Saturday</p>
            </div>
            <div>
                <h6>BREWERY TOURS</h6>
                <p>Brewery opening hours:</p>
                <P>8-4pm weekdays only</P>
            </div>
        </div>
        <div class="d-flex flex-column column-2">
            <h4>CONTACT US</h4>
            <div>
                <h6>GENERAL ENQUIRIES</h6>
                <P>phone: +91 9876543215</P>
                <p>mail: mafeebeers@gmail.com</p>
            </div>
            <div>
                <h6>GROUP TOURS & EVENTS</h6>
                <P>phone: +91 9876543215</P>
                <p>mail: mafeebeers@gmail.com</p>
            </div>
            <div>
                <h6>OUR SHOP</h6>
                <P>phone: +91 9876543215</P>
                <p>mail: mafeebeers@gmail.com</p>
            </div>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8917827159485!2d-65.23091488480229!3d-26.843394083157516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c799ae43cd7%3A0x953da00896cdc8f1!2sBlock%203%20-%20Decanato%20-%20Facultad%20de%20Ciencias%20Exactas%20y%20Tecnolog%C3%ADa%20de%20la%20U.N.T.!5e0!3m2!1ses-419!2sar!4v1672050533088!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>

</template>

<style scoped>

.home__discover {
    padding: 5rem;
    margin: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/contact-title-img.jpg");
    background-position: center;
    background-size: cover;
}

.home__discover h2{
    color: white;
}

.form-img{
    display: flex;
    gap: 5rem;
    margin: 5rem;
    justify-content: center;
    align-items: center;
}

.faq{
    background-image: url(../assets/background-color.jpg);
}

.faq h2{
  padding-bottom: 2rem;
}

.location{
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
    width: 50%;
}

.column-1{
    width: 25%;
    gap: 2rem;
}

.column-2{
    width: 25%;
    gap: 2.8rem;
}

.column-1 h6{
    font-weight: bold;
}

.column-2 h6{
    font-weight: bold;
}

.iframe{
    width: 90rem;
    height: 30rem;
    margin: 3rem 3rem 0 3rem;
}
</style>