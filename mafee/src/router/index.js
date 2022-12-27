import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutUsView.vue"),
    },
     
    {
      path: "/blogmain",
      name: "blogmain",
      component: () => import("../views/BlogMainView.vue"),
    },
    {
      path: "/blogtopic",
      name: "blogtopic",
      props: true,
      props(route) {
        return {  postid: route.query.postid }
      },
      component: () => import("../views/BlogTopicView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/contactus",
      name: "contactus",
      component: () => import("../views/ContactUsView.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/MyAccountView.vue"),
    },
    {
      path: "/reservation",
      name: "reservation",
      component: () => import("../views/ReservationView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/workwithus",
      name: "workwithus",
      component: () => import("../views/WorkWithUsView.vue"),
    },    
  ]
})

export default router
