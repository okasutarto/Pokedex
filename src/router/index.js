import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Dashboard from '../views/Dashboard.vue'
import FavPokemon from '../views/FavPokemon.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: FavPokemon
    }
  ]
})

export default router
