<script setup></script>

<template>
     
        <div class="location">
            <div class="tab-content">
                <div class="tab-pane fade active show" id="account" role="tabpanel" aria-labelledby="account-tab">
                    <h3 class="mb-4">POST A COMMENT</h3>
                    <div class="row form-reservation">
                        <div class="form-floating form-group">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2" class="label-textarea">Comment</label>
                        </div>
                        <div class="col-md-6">
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
                        <div class="account__btns">
                            <button class="btn btn-dark">SEND</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</template>