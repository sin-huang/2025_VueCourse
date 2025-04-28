Vue.createApp({
    // 一開始都會定義一個func叫做data
    data(){
        return {
            count:0,
        }
    },
    // 加入一個參數 method 它是物件類型
    // 用物件的原因是因為method通常很多個 所以用物件管理較佳
    methods:{
        add(){
            this.count++;
        },
        sub(){
            this.count--;
        },
    }
}).mount('#app')
// 最後加上mount()方法才能成功掛載到HTML上