<template>
  <div class="sticky left-0 z-[999]">
    <sidebar-menu :menu="menu">
      <template v-slot:toggle-icon>
        <div class="fa-solid fa-arrow-right"></div>
      </template>
    </sidebar-menu>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menu: [
        {
          header: 'Menu Navigasi',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa-solid fa-house',
        },
        {
          href: '/buku',
          title: 'Buku',
          icon: 'fa-solid fa-book',
        },
      ],
    }
  },
}
</script>

<style>
.v-sidebar-menu .vsm--icon {
  transform: scale(0.8);
}
</style>
