import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import '@fortawesome/fontawesome-free/js/all'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { createStore } from 'vuex'
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

const store = createStore({
  state() {
    return {
      isExpanded: false
    }
  },
  mutations: {
    toggleExpanded(state: { expanded: boolean }) {
      !state.expanded
    }
  }
})

createApp(App)
  .component('EasyDataTable', Vue3EasyDataTable)
  .use(router)
  .use(VueSidebarMenu)
  .use(store)
  .mount('#app')
