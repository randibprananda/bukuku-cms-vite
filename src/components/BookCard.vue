<template>
  <div
    class="bg-white rounded-xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer max-w-[350px]">
    <div class="p-4 flex flex-col">
      <div class="bg-red-500 py-1 px-2 text-sm font-semibold text-white rounded-full cursor-pointer block self-end">{{
        category
      }}</div>
      <h1 class="mt-4 text-xl font-bold hover:underline cursor-pointer line-clamp-1">{{ title }}</h1>
      <p class="mt-2 font-sans text-gray-700 text-sm">{{ writer }}</p>
      <p class="text-sm text-black line-clamp-4 mt-3">{{ description }}</p>
    </div>
    <div class="relative">
      <img class="h-[400px] w-full object-center" :src="cover" />
      <p
        class="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500">
        Baca Sekarang</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  writer?: string
  category?: string
  cover?: string
  description?: string
}>()
</script>

<style scoped></style>
