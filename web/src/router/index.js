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
    children: [{
      path: '/',
      component: require('../pages/stolenVehicles.vue'),
      meta: {
        parent: ['/'],
        breadcrumb: 'Stolen vehicles'
      },
    },
    {
      path: '/ownerships',
      name: 'Ownerships',
      component: require('../pages/ownerships.vue'),
      meta: {
        parent: ['/'],
        breadcrumb: 'Ownerships'
      },
    },
    ]
  },
  ]
})

export default router;