<script setup>
import comments from '../store/comments.js'
import { ref, computed } from 'vue';
import Comment from './Comment.vue';

const commentsWithId = ref([])

const props = defineProps({
    postid: '',
    typeOf: String,
})

const updateComments = computed(() => {
    commentsWithId.value = comments.value.filter(comment => comment.postid === props.postid)
})

</script>

<template>
    {{ updateComments }}
    <h2 class="h4_comments">COMMENTS</h2>

    <Comment v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />

</template>

<style scoped>

</style>