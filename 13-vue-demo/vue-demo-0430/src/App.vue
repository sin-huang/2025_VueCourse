<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue'
import CounterComposition from './components/CounterComposition.vue';
import Shopping from './components/Shopping.vue'
import BlogPost from './components/BlogPost.vue'

const melody = ref('Melody Huang')
const age = ref(25)

</script>

<template>
  <!-- 用:綁定 傳給子元件使用 -->
  <!-- <blog-post :name="melody" :age="age"></blog-post> -->
  <!-- 假如我沒有傳任何參數給子元件 -->
  <blog-post></blog-post>
  <!-- <shopping/> -->
  <!-- <counter-composition/> -->
  <!-- <counter/> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
