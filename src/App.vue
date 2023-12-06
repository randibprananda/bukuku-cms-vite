<template>
  <div class="w-full h-screen">
    <Navbar />
    <Sidebar />
    <div class="w-full h-[calc(100vh-60px-40px)] bg-slate-50">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
