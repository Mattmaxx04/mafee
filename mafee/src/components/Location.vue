<script setup>
import  locations from '../store/location.js'
import { ref, computed } from 'vue';


</script>

<template>
    
    {{updateLocation}}
    <div class="location">
        <div class="tab-content p-4 p-md-5">
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <div class="title2">
            <h2 class="text-center">LOCATION</h2>
        </div>
                <div class="row form_main">

                    <div class="form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control" value="Rivadavia 3882">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" class="form-control" value="Buenos Aires">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>State</label>
                                <input type="text" class="form-control" value="Buenos Aires">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Postal code</label>
                                <input type="text" class="form-control" value="1407">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Phone number</label>
                                <input type="text" class="form-control" value="1532313164">
                            </div>
                        </div>
                        <div class="buttons">
                            <button class="btn btn-dark">Update</button>
                            <button class="btn btn-light">Cancel</button>
                        </div>
                    </div>

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
    margin-top: 2rem;
}
.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 2rem 1rem 2rem 1rem;
    margin: 1rem 5.2rem 4rem 5.2rem;
    border-radius: 1rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

.location{
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
    width: 50rem;
}

label{
    padding-bottom: 1rem;
}
</style>