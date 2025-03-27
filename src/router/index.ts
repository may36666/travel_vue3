import {createRouter,createWebHistory} from 'vue-router'
import CardDetail from '@/pages/CardDetail.vue'
import Home from "@/pages/Home.vue"

const router =createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'首頁',
      component:Home
    },
    {
      path:'/CardDetail/:id',
      name:'卡片資訊',
      component:CardDetail,
      props:true
    },
  ]
})

export default router
