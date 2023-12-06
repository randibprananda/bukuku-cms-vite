<template>
  <div class="w-full h-full flex justify-evenly items-center flex-col">
    <h1 class="text-3xl font-semibold">Rekomendasi Buku Minggu Ini</h1>
    <div class="grid grid-cols-3 gap-x-20">
      <div v-for="book in recomendationBook">
        <BookCard :title="book.judul" :writer="book.Penulis" :cover="book.img" :description="book.description"
          :category="book.categorie" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import books from '../dummy/books.json'

const recomendationBook = books.slice(0, 3)

console.log()
</script>

<style scoped></style>
