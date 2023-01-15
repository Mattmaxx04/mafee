<script setup>


const props = defineProps({
    user:{},
})

</script>

<template>
    
    <div class="profile">
        <div class="tab-content p-4 p-md-5" >
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <div class="row">
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