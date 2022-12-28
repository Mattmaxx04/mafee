<script setup>
// import locations from '../store/location.js'
// import { ref, computed } from 'vue';


</script>

<template>

    {{ updateLocation }}
    <div class="location">
        <div class="tab-content p-2">
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 class="mb-4">Location</h3>
                <div class="row">

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
                </div>
            </div>
        </div>
        <div class="credit p-2">
            <div class="tab-content">
                <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                    <h3 class="mb-4">Credit Card</h3>
                    <div class="row">
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
                                <label>Cardholders name</label>
                                <input type="text" class="form-control" value="Matias Quiroga">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>




</template>

<style scoped>

</style>