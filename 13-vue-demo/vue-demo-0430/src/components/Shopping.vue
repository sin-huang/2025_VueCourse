<script setup>
import { ref, computed } from "vue";

const quantity = ref(0);
const price = ref(100);

const add = () => {
  quantity.value++;
};

const sub = () => {
  quantity.value--;
};

// 但這樣不是每次按-/+都要呼叫update 麻煩 用computed
// 這樣每次都會幫忙自動做

const totalPrice = computed(() => {
  return (totalPrice.value = price.value * quantity.value);
});
</script>

<template>
  <div class="shoppingcCart">
    <h3>精美筆記本</h3>
    <p>單價 : $ {{ price }}</p>
    <p>數量 : {{ quantity }}</p>
    <p>總價 : $ {{ totalPrice }}</p>
    <button @click="sub">-</button>
    <input type="number" v-model="quantity" />
    <button @click="add">+</button>
  </div>
</template>

<style>
.shoppingcCart {
  padding: 20px;
  border: 2px solid rgb(211, 211, 203);
  border-radius: 10px;
}
button {
  margin: 10px;
  height: 50px;
  width: 50px;
  border-radius: 100%;
}
</style>
