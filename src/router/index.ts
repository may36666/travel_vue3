import {createRouter,createWebHistory} from 'vue-router'
import CardDetail from '@/pages/CardDetail.vue'

const router =createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/CardDetail',
      component:CardDetail
    }
  ]
})

export default router
