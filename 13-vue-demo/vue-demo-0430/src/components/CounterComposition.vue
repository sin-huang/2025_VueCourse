<script setup>
import { ref, isRef } from "vue";
// 方法1 以setup作為程式進入點
// export default{
//     // setup為程式進入點
//     setup(){
//         const count = ref(0)

//         const add = () => {
//             count.value++
//         }
//         const sub = () => {
//             count.value--
//         }
//         const reset = () => {
//             count.value = 0
//         }
//         return{
//             count,
//             add,
//             sub,
//             reset
//         }
//     }
// }

// 方法2 直接在script標籤中加上 setup關鍵字 這樣不用 export default,也不用return
const count = ref(1);
// 印出來看看count是什麼
console.log(count)
console.log(isRef(count))

const add = () => {
  count.value++;
};

const sub = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};

</script>

<template>
  <h4>{{ count }}</h4>
  <button @click="add">+1</button>
  <button @click="sub">-1</button>
  <button @click="reset">reset</button>
</template>
