import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Usuarios from '../views/Usuarios.vue'
import DetallesUsuarios from '../views/DetallesUsuarios.vue'

const routes = [
  {
    path:'/',
    name:'home',
    component: Home
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios
  },
  {
    path: '/usuarios/:id',
    name: 'detalles',
    component: DetallesUsuarios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
