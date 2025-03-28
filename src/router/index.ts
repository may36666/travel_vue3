import {createRouter,createWebHistory} from 'vue-router'
import CardDetail from '@/pages/CardDetail.vue'
import Home from "@/pages/Home.vue"
import process from 'process'

const router =createRouter({
  history:createWebHistory(process.env.BASE_URL),
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
