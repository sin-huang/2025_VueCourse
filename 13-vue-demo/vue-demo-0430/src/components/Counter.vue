<script>
    export default{
        data(){
            return {
                count:0,
            }
        },
        methods:{
            add(){
                this.count++;
            },
            sub(){
                this.count--;
            },
            reset(){
                this.count=0;
            }
        }
    }
</script>


<template>
    <h4>{{ count }}</h4>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <button @click="reset">reset</button>
</template>