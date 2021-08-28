import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/tab1',
        name:'chart',
        component:() =>import('../views/Chart')
    },
    {
        path:'/tab2',
        name:'pic',
        component:() =>import('../views/Pic')
    },
    {
        path:'/tab3',
        name:'unimp',
        component:() =>import('../views/Unimp')
    }
]

const  router = new VueRouter({
    routes
})

export default router