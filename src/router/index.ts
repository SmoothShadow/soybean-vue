import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/components/layout/index.vue'),
    redirect: { name: 'home' },
    children: [
      //首页
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      //用户管理
      {
        path: '/sys/user',
        name: 'sys-user',
        component: () => import('@/views/sys/User.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router