<script setup>
import { ref } from "vue";

const { name, age } = defineProps({
  name: {
    type: String,
    default: "Eric",
  },
  age: {
    type:Number,
    default: "26"
  }
});
</script>

<template>
  <h3>Who are you?</h3>
  <!-- 方法1 直觀
    <p>I'm {{ props.name }}</p>
    <p>My age is {{ props.age }}</p> -->
  <!-- 方法2 解構 -->
  <p>I'm {{ name }}</p>
  <p>My age is {{ age }}</p>
</template>
