import {createRouter,createWebHistory} from 'vue-router'
import CardDetail from '@/pages/CardDetail.vue'

const router =createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/CardDetail/:id',
      name:'卡片資訊',
      component:CardDetail,
      props:true
    },
  ]
})

export default router
