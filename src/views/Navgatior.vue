<template>
    <div id="nav">
        <ul>
            <li v-for="(v,i) in navData" :key="i">
                <router-link style="text-decoration: none;color: black" :to="v.url">{{v.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['navData'],
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    #nav>ul{
        list-style: none;
    }
    #nav li{
        height: 50px;
        width:120px;
        text-align: center;
        line-height: 50px;
        color: black;

    }
    #nav li:hover{
        color: cornflowerblue;
        border-bottom:2px solid cornflowerblue;
    }
</style>