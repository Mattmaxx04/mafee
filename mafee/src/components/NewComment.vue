<script setup>
import {addComment} from '../firebase/comments.js'
import user from '../store/user.js'
import { ref } from 'vue';

const body = ref('')
const Swal = SweetAlert;
const generated = ()=> {
      Swal.fire({
        title: 'Congratulations!',
        text: 'You created a new comment.',
        confirmButtonText: 'Cool'
      });
      body.value=""
    }

const props = defineProps({
    postid: '',
    typeOf:String,
})
const addNewComment = () => {
    const newComment = {
        date:new Date(), 
        body: body.value,
        postid: props.postid,
        photo: user.value.photoURL,
        username: user.value.displayName
    }
    addComment(newComment)
    body.value=""
}

</script>

<template>
     
        <div class="location">
            <div class="tab-content">
                <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                    <h3 class="mb-4">POST A COMMENT</h3>
                    <div class="row form-reservation">
                        <div class="form-floating form-group">
                            <textarea v-model="body" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2" class="label-textarea">Comment</label>
                        </div>
                      
                        <div class="account__btns">
                            <button @click.prevent="addNewComment, generated()" class="btn btn-dark">SEND</button>
                        </div>

                          <!--<div class="col-md-6">
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
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        -->

                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

.form-group{
  padding: 1rem;
}

.label-textarea{
  padding-left: 2rem;
  padding-top: 2rem;
}

.location{
    width: 95%;
    font-weight: bold;
}

.tab-content{
    padding-top: 3rem;
}

.tab-content h3{
    font-size: 2rem;
    font-weight: bold;
    padding-left: 1rem;
}

.form-check{
    padding: 2rem 0rem 2rem 3rem;
}
</style>