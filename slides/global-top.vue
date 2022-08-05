<!-- global-top.vue -->
<!-- hide the footer from "cover" layout -->
<template>
  <footer style="font-size: 0.55rem;line-height: 1rem;">
    <div class="absolute bottom-0 left-1">
      <img src="https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png" width="60">
    </div>
    <div class="absolute bottom-1 left-89 text-gray-700">
      ITT E.Agnelli - Informatica - TPSI - prof. Antonio Mancuso - a.s. 2021-2022 - v {{ $slidev.configs.version || 0 }} 
    </div>
    <div v-if="$slidev.nav.currentPage !== 1 && $slidev.nav.currentPage != $slidev.nav.total+1 " class="absolute bottom-1 right-1 text-gray-700">
      {{ $slidev.nav.currentPage -1 }} / {{ $slidev.nav.total -1 }}
    </div>
  </footer>
</template>