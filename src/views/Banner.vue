<template>
    <div class="banner">
        <img @mouseover="stopPlay" @mouseout="autoplay" v-for="(v,i) in imgData" :key="i" :src="v" :class="i == cur ? 'show':'hide'">
        <div class="prev" @click="prevPic">←</div>
        <div class="next" @click="nextPic">→</div>
        <ul>
           <li  v-for="(v,i) in imgData" :class="{'active':cur == i}" :key="i" @click="changePic(i)"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['imgData'],
        data(){
            return{
                cur:0,
                timer:null
            }
        },
        methods:{
            changePic(i){
                this.cur = i
            },
            autoplay(){

               this.timer = setInterval(() =>{
                   this.cur++
                   if(this.cur == this.imgData.length){
                       this.cur = 0
                   }
               },2000)
            },
            stopPlay(){
                clearInterval(this.timer)
            },
            nextPic(){
                if(this.cur < this.imgData.length-1){
                    this.cur++
                }else{
                    this.cur = 0
                }
            },
            prevPic(){
                if(this.cur == 0){
                    this.cur = this.imgData.length-1
                }else{
                    this.cur--
                }
            },
        },
        mounted() {
            this.autoplay()
        }
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        height: 500px;
        position: relative;
    }
    .banner>img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .banner>div{
        width: 30px;
        height: 50px;
        background-color: rgba(0,0,0,0.5);
        text-align: center;
        line-height: 50px;
        color: white;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
    }
    .banner>.next{
        right: 20px;
    }
    .banner>.prev{
        left: 20px;
    }
    .banner>.show{
        opacity: 1;
    }
    .banner>.hide{
        opacity: 0;
    }
    .banner>ul{
        list-style: none;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%,0);
    }
    .banner li{
        width: 8px;
        height: 8px;
        float: left;
        margin-left: 5px;
        border-radius: 50%;
        background-color: white;
    }
    .banner .active{
        background-color: black;
    }
</style>