<template>
 <div id="app">
     <h1>轮播</h1>
   <Banner :img-data="items"></Banner>
 </div>
</template>

<script>

 import Banner from "./views/Banner";

export default {
  data(){
    return{
      items:[
          require('./assets/imgs/1.jpg'),
          require('./assets/imgs/2.jpg'),
          require('./assets/imgs/3.jpg'),
          require('./assets/imgs/4.jpg')
      ]
    }

},
  components: {
   Banner

  }
}
</script>

<style>
@import "./assets/css/index.css";
</style>
