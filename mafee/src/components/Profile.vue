<script setup>
</script>

<template>
    <div class="profile">
        <div class="tab-content p-4 p-md-5" >
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 class="mb-4">Account Settings</h3>
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" class="form-control" value="Matías Quiroga">
                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="text" class="form-control" value="matiasquiroga.04@gmail.com">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" value="******">
                        </div>
                    </div>                    
                </div>

                <div class="account__btns">
                    <button class="btn btn-dark">Update</button>
                    <button class="btn btn-light">Cancel</button>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.account__btns{
    margin: 0.5rem!important;
}
</style>