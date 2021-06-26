import { createRouter, createWebHistory } from 'vue-router'


const category = () => import('../views/category/category.vue');
const car = () => import('../views/car/car.vue');
const home = () => import('../views/home/home.vue');
const user = () => import('../views/user/user.vue');


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: "home",
    path: "/home",
    component: home
  }
  , {
    name: "category",
    path: "/category",
    component: category
  }
  , {
    name: "car",
    path: "/car",
    component: car
  }
  , {
    name: "user",
    path: "/user",
    component: user
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
