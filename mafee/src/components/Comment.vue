<script setup>
const props = defineProps({
    comment: {},
    typeOf: Object,
})

</script>

<template>
    <div class="comment">      

        <div class="comments">
            <img :src="comment.photo" alt="">
            <div>
                <h2>{{ comment.username }}</h2>
                <p class="date_comment">{{ comment.date }}</p>
                <p>{{comment.body}}</p>
                <p class="reply">REPLY</p>
            </div>
        </div>

    </div>
</template>

<style scoped>

.comments{
    display: flex;
    width: 95%;
    gap: 2rem;
    justify-content: start;
    align-items: center;
    border-bottom: 0.1rem solid var(--color-text-main);
    /* border-top: 0.2rem solid var(--color-text-main); */
    padding: 3rem;
}

.comments img{
    border-radius: 50%;
    /* width: 15rem;
    height: 15rem; */
}

.comments h2{
    font-size: 1.5rem;
    font-weight: bold;
}

.comments p{
    font-size: 0.9rem;
    color: var(--color-text-main);
    padding-top: 1rem;
    text-align: justify;
}
</style>