import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      component: () => import('@/views/reception/home.vue'),
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
  ],
})

export default router
