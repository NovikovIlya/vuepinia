import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import DirectSlice from '../components/DirectSlice.vue'
import PersonSlice from '../components/PersonSlice.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DirectSlice
    },
    {
      path: '/person/:id',
      name: 'person',
      component: PersonSlice
    },
   
  ]
})

export default router
