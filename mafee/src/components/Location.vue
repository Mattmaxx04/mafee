<script setup>

</script>

<template>
    <div class="location">
        <div class="tab-content p-4 p-md-5">
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 class="mb-4">Location</h3>
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" class="form-control" value="Av. Rivadavia 8800">
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
                            <input type="text" class="form-control" value="+91 9876543215">
                        </div>
                    </div>
                    <div class="account__btns">
                    <button class="btn btn-dark">Update</button>
                    <button class="btn btn-light">Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.account__btns{
    margin: 0.5rem;
}
</style>