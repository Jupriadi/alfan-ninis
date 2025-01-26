<template>
  <div class="gallery-container px-6">
    <!-- Gambar besar dengan animasi -->
    <div class="font-kugile pt-6 pb-4 text-xl text-center font-bold">
      Gallery
    </div>
    <div class="main-image relative ">
      <transition name="fade" mode="out-in">
        <img
          :key="selectedImage.src"
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="w-full  object-cover rounded-lg height-[100px] "
        />
      </transition>
    </div>

    <!-- Thumbnails -->
    <div class="thumbnails mt-4 flex space-x-2 overflow-x-auto">
      <div
        v-for="(image, index) in images"
        :key="index"
        @click="changeImage(image)"
        :class="{
          'thumbnail cursor-pointer w-20 h-20 border border-2 border-orange-600 rounded-xl shadow-xl':
            selectedImage.src === image.src,
          'thumbnail cursor-pointer w-20 h-20': selectedImage.src !== image.src,
        }"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const images = [
  { src: "/img/cover_bg.jpg", alt: "Image 1" },
  { src: "/img/hero_bg.jpg", alt: "Image 2" },
  { src: "/img/1.jpg", alt: "Image 3" },
//   { src: "/img/2.jpg", alt: "Image 4" },
  { src: "/img/3.jpg", alt: "Image 5" },
];

const selectedImage = ref(images[0]); // Gambar pertama yang akan ditampilkan
let intervalId;

const changeImage = (image) => {
  selectedImage.value = image;
};

// Berganti gambar setiap 5 detik
const startAutoChange = () => {
  let currentIndex = 0;
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Berganti gambar secara looping
    selectedImage.value = images[currentIndex];
  }, 5000); // Setiap 5000ms atau 5 detik
};

onMounted(() => {
  startAutoChange();
});

onBeforeUnmount(() => {
  clearInterval(intervalId); // Bersihkan interval ketika komponen di-unmount
});
</script>
  
  <style scoped>
/* Efek transisi animasi */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Styling thumbnail */
.thumbnail:hover {
  border: 2px solid #000;
}

/* Border aktif untuk thumbnail yang sedang dipilih */
.thumbnail.cursor-pointer.border-4 {
  border: 4px solid #3b82f6; /* Tailwind blue-500 */
}
</style>
  