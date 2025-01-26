<template>
  <div class="max-w-ful">
    <NuxtPage />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Tunggu 2 detik sebelum menggulir halaman
  setTimeout(() => {
    window.scrollTo(0, 10);
  }, 6000); // 2000ms = 2 detik
});
</script>