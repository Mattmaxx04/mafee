<script setup>
/*
import  location from '../store/location.js'
import { ref, computed } from 'vue';
import {updateLocation} from '../firebase/location.js'

const address = ref('')
const city = ref('')
const state = ref('')
const email = ref('')
const phone = ref('')
const pc = ref('')
const id = ref('')

const addNewLocation = () => {
    const newLocation = {
        address: address.value,
        id: id.value,
        city: city.value, 
        state: state.value,
        email: email.value,
        phone: phone.value,
        pc: pc.value
    }

    updateLocation(newLocation)

}

const props = defineProps({
    user:{},
})

console.log(props);
const locationEmail = ref({})

const updateLocations = computed(()=>{
    locationEmail.value = location.value.filter(location => location.email === props.user.email)
})
*/
</script>

<template>
    <!--
    {{updateLocations}}

    <div class="location">
        <div class="tab-content p-4 p-md-5">
            <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 class="mb-4">Location</h3>
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Address</label>
                            <input v-model="address" type="text" class="form-control" value="{{location.address}}">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>City</label>
                            <input v-model="city" type="text" class="form-control" :value="location.city">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>State</label>
                            <input v-model="state" type="text" class="form-control" :value="location.state">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Postal code</label>
                            <input v-model="pc" type="text" class="form-control" :value="location.pc">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Phone number</label>
                            <input v-model="phone" type="text" class="form-control" :value="location.phone">
                        </div>
                    </div>

                    <div class="col-md-6" hidden>
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="email" type="text" class="form-control" :value="location.email">
                        </div>
                    </div>
                    <div class="col-md-6" hidden>
                        <div class="form-group">
                            <label>Id</label>
                            <input v-model="id" type="text" class="form-control" :value="location.id">
                        </div>
                    </div>


                    <div class="account__btns">
                    <button class="btn btn-dark" @click.prevent="addNewLocation">Update</button>
                    <button class="btn btn-light">Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
-->
</template>

<style scoped>
.account__btns{
    margin: 0.5rem;
}
</style>