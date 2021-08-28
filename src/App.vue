<template>
 <div id="app">
     <h1>轮播</h1>
     <Banner :img-data="items"></Banner>
    <div class="navBox">
        <Navgatior :navData="navData"></Navgatior>
        <router-view></router-view>
    </div>
 </div>
</template>

<script>

 import Banner from "./views/Banner";
 import Navgatior from "./views/Navgatior";


export default {
  data(){
    return{
      items:[
          require('./assets/imgs/1.jpg'),
          require('./assets/imgs/2.jpg'),
          require('./assets/imgs/3.jpg'),
          require('./assets/imgs/4.jpg')
      ],
       navData:[
           {name:'标签一',url:'/tab1'},
           {name:'标签二',url:'/tab2'},
           {name:'标签三',url:'/tab3'},
       ]
    }

},
  components: {
      Navgatior,
   Banner

  }
}
</script>

<style>
@import "./assets/css/index.css";
</style>
