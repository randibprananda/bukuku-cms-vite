<template>
  <div class="flex w-full h-full justify-evenly flex-col items-center">
    <h1 class="text-2xl font-bold">List Buku Tersedia</h1>
    <div class="w-[80%]">
      <Table />
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from '../components/Table.vue'
</script>

<style scoped></style>
