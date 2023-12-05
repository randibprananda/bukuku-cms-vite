import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Buku from './views/Buku.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/buku',
      name: 'Buku',
      component: Buku
    }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
