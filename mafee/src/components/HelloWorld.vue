<script setup>
import { ref } from 'vue';
import { addPost } from '../firebase/post.js';


const texto= ref('')
const newPost = () => {
    addPost({
        id: crypto.randomUUID(),
        date: Date.now(),
        texto: texto.value,
    })
    texto.value = ''
}


</script>

<template>
  <div class="greetings">
    <h1 class="green"> Hola</h1>
    <h3>
      <input v-model="texto" type="text">
      <button @click="newPost" type="button" class="btn btn-primary">Post</button>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
