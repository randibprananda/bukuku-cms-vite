<template>
  <main class="flex flex-col gap-y-5">
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
        placeholder="Masukan kata kunci pencarian..." v-model="searchValue">
    </div>
    <EasyDataTable show-index border-cell :headers="headers" :items="items" :search-field="searchField"
      :search-value="searchValue" />
  </main>
</template>

<script lang="ts" setup>
import books from '../dummy/books.json'
import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

const searchField = ["judul", "Penulis", "categorie", "penerbit"]
const searchValue = ref("");

const headers: Header[] = [
  { text: "JUDUL", value: "judul" },
  { text: "PENULIS", value: "Penulis" },
  { text: "KATEGORI", value: "categorie" },
  { text: "PENERBIT", value: "penerbit" },
];

const items: Item[] = books;

</script>
