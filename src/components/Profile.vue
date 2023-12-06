<template>
  <div class="flex items-center space-x-5">
    <div class="flex flex-col">
      <h1 class="font-semibold text-md">{{ user.fullname }}</h1>
      <h2 class="text-sm text-end">{{ user.role }}</h2>
    </div>
    <img class="w-11 h-11 rounded-full" :src="user.avatar" alt="Rounded avatar">
  </div>
</template>

<script setup lang="ts">
import user from '../dummy/user.json'
</script>
