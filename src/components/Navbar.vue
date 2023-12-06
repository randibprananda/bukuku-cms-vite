<template>
  <div class="w-full bg-[#42b883] h-[60px] flex justify-between items-center px-5 pl-[4.5%]">
    <div class="flex items-center gap-x-4">
      <img src="../assets/logo.svg" class="w-10 h-10" alt="Logo">
      <h1 class="text-2xl font-bold text-white">Bukuku CMS</h1>
    </div>
    <Profile />
  </div>
</template>

<script setup lang="ts">
import Profile from './Profile.vue'
</script>
