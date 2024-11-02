// Vue.createApp({  
//   data: function() {
//     return {
//       text: 'Hello World'
//     }
//   }
// }).mount('#app')

const app = Vue.createApp({
  data() {
    return {
      text: 'Hello World'
    }
  }
})

app.mount('#app')