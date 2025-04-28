
// 從Vue中拿出createApp
// const { createApp } = Vue 
  
Vue.createApp({
  data() {
    return {
      message: 'Hello Vue, Nice to meet you!',
      num: 10
    }
  }
}).mount('#app')