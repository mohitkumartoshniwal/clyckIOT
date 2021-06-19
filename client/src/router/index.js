import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";
import "firebase/auth";
import dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/signup.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard,
    meta: {requiresAuth: true}
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/working',
    name: 'working',
    component: () => import('../views/working.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router
