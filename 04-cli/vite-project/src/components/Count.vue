<script>
// 方法1
// import {ref} from 'vue'
// const count = ref(0);

// 方法2 把私鑰定義好
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<template>
  <button class="my-button" type="button" @click="add">點擊+1</button>
  <p class="number">目前數字為 : {{ count }}</p>
</template>

<style>
.my-button:hover {
  border: none !important;
  /* filter: drop-shadow(0 0 2em #fa0); */
}

.number{
    color: rgb(48, 79, 182);
    font-weight: 600;
    font-size: 3rem;
}
</style>
