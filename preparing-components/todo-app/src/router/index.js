import Vue from 'vue'
import Router from 'vue-router'
import BeforeRefactor from '@/components/BeforeRefactor'
import AfterRefactor from '@/components/AfterRefactor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'before'
    },
    {
      path: '/before',
      name: 'before',
      component: BeforeRefactor
    },
    {
      path: '/after',
      name: 'after',
      component: AfterRefactor
    }
  ]
})
