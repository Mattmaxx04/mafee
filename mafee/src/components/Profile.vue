<script setup>


const props = defineProps({
    user:{},
})

</script>

<template>
    
    <div class="profile">
        <div class="tab-content p-4 p-md-5" >
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <div class="title2">
            <h2 class="text-center">ACCOUNT SETTINGS</h2>
        </div>
                <div class="form_main">
                    <div class="row form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" class="form-control" :value="user.displayName" readonly>
                            </div>
                        </div>
                    
                    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="text" class=" form-control" :value="user.email" readonly>
                            </div>
                        </div>
                    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" :value="user.password" >
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
    </div>
</template>
<style scoped>
.account__btns{
    margin: 0.5rem!important;
}

.btn-dark{
    margin-right: 2rem !important;
}
.title2{
    background-image: url(../assets/background-img-color.jpg);
    padding: 2rem 1rem 2rem 1rem;
    margin: 1rem 5rem 4rem 5rem;
    border-radius: 1rem;
}

.title2 h2{
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-btn);
}

.profile{
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
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

label{
    padding-bottom: 1rem;
}
</style>