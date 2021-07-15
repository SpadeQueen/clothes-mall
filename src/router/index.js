import { createRouter, createWebHistory } from 'vue-router'


const Category = () => import('../views/category/category.vue');
const Car = () => import('../views/car/car.vue');
const Home = () => import('../views/home/home.vue');
const User = () => import('../views/user/user.vue');
const Details = () => import('../views/details/details.vue')


const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    name: "Home",
    path: "/Home",
    component: Home
  }
  , {
    name: "Category",
    path: "/Category",
    component: Category
  }
  , {
    name: "Car",
    path: "/Car",
    component: Car
  }
  , {
    name: "User",
    path: "/User",
    component: User
  }
  , {
    name: "Details",
    path: "/Details/::iid",
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
