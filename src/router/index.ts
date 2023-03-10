import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import container from '../components/container/src/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: container,
    children: [
      {
        path: '/',
        component: Home,
      },
        {
          path: '/chooseicon',
          component: () => import('../views/chooseIcon/index.vue'),
        },
      {
        path: '/choosearea',
        component: () => import('../views/chooseArea/index.vue'),
      },
      {
        path: '/trend',
        component: () => import('../views/trend/index.vue'),
      },
      {
        path: '/notification',
        component: () => import('../views/notification/index.vue'),
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue'),
      }
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router