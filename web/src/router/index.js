import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    component: require('../pages/home.vue'),
    meta: {
      parent: [''],
      breadcrumb: 'Home'
    },
  },
  ]
})

export default router;