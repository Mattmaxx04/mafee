<script setup>

</script>

<template>
    <div class="credit">
        <div class="tab-content p-4 p-md-5">
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
                            <label>Cardholder´s name</label>
                            <input type="text" class="form-control" value="Matias Quiroga">
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
.account__btns {
    margin: 0.5rem;
}
</style>