import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/add-smoothie',
    name: 'addSmoothie',
    component: AddSmoothie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
