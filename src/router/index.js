// Composables
import { createRouter, createWebHistory } from 'vue-router'
import userStore from '@/store'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/constrained/DefaultView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: { authRequired: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'board',
        name: 'Board',
        meta: { authRequired: true },
        component: () => import(/* webpackChunkName: "board" */ '@/views/Board.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/logout',
    component: () => import('@/views/Logout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const username = userStore.state.username;
  if (to.matched.some(function (routeInfo) {
    return routeInfo.meta.authRequired;
  }) && username === null) {
    alert('Login Please!');
    next('/login');
  } else {
    // console.log("routing success : '" + to.path + "'");
    next();
  }
})

export default router
