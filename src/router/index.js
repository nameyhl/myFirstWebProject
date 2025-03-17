import { createRouter, createWebHistory } from 'vue-router'

let routes = [
  {
    path: '/',
    redirect: '/reception',
  },
  {
    path: '/manage',
    name: 'manageHome',
    component: () => import('@/views/manage/home.vue'),
    children: [
      {
        path: '/user',
        name: 'userManage',
        component: () => import('@/views/manage/user/index.vue'),
      },
      {
        path: '/classify',
        name: 'classifyManage',
        component: () => import('@/views/manage/classify/index.vue'),
      },
    ],
  },
  {
    path: '/reception',
    name: 'receptionHome',
    redirect: '/detail',
    component: () => import('@/views/reception/home.vue'),
    children: [
      {
        path: '/detail',
        name: 'user',
        component: () => import('@/views/reception/detail/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 通配符路由
    component: () => import('@/views/404/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
