<script setup>

</script>

<template>
    <div class="credit">
        <div class="tab-content p-4 p-md-5">
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                
                <div class="title2">
            <h2 class="text-center">CREDIT CARD</h2>
        </div>
                <div class="row form">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Credit card number</label>
                            <input type="text" class="form-control" value="4444 4563 2154 6846">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Security code</label>
                            <input type="text" class="form-control" value="***">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Expiration date</label>
                            <input type="date" class="form-control" value="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Card network</label>
                            <input type="text" class="form-control" value="Visa">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Cardholder´s name</label>
                            <input type="text" class="form-control" value="Matias Quiroga">
                        </div>
                    </div>
                    <div class="buttons">
                        <button class="btn btn-dark">Update</button>
                            <button class="btn btn-light">Cancel</button>
                    </div>

<!-- 
                    <div class="account__btns">
                        
                    </div> -->
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* .account__btns{
    margin: 0.5rem!important;
    margin-left: 55rem !important;
} */

.btn-dark{
    margin-right: 2rem !important;
}

.buttons{
    width: 15rem;
    margin-top: 1rem;
}
.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 2rem 1rem 2rem 1rem;
    margin: 1rem 17rem 4rem 17rem !important;
    border-radius: 1rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
    padding: 0rem 10rem;
}

.credit{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.form_main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    /* width: 50rem; */
}

label{
    padding-bottom: 1rem;
}
</style>