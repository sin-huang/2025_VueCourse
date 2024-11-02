const app = Vue.createApp({
  data() {
    return {
      count: 0,
      text: '點擊數'
    }
  },
  methods: {
    add() {
      this.count++
    }
  }
})

app.mount('.container')
