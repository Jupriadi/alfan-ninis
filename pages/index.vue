<script setup>
import { useHead } from '#imports'


useHead({
  title: "Pernikahan Alfan & Ninis",
  meta: [
    {
      name: "description",
      content:
        "pernikahan Alfan & Ninis, 02 Februari 2025.",
    },
    { property: "og:title", content: "Pernikahan Alfan & Ninis" },
    {
      property: "og:description",
      content:
        "pernikahan Alfan & Ninis, 02 Februari 2025.",
    },
    { property: "og:image", content: "https://alfan-ninis.vercel.app/img/2.jpg" }, // Gambar akan diakses di https://yourdomain.com/img/couple.jpg
    { property: "og:url", content: "https://alfan-ninis.vercel.app" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Pernikahan Alfan & Ninis" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@yourTwitterHandle" },
  ],
});
</script>

<script>
export default {
  data() {
    return {
      open: false,
      activeMenu: "beranda",
    };
  },
  methods: {
    openInvitation() {
      this.open = true;
    },
    handleMenu(triger) {
      this.activeMenu = triger;
      // alert(triger)
      this.$nextTick(() => {
        const targetElement = document.getElementById(this.activeMenu);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
};
</script>

<template>
  <div class="grid lg:grid-cols-4 w-full">
    <div
      class="lg:col-span-3 w-full h-screen bg-cover bg-[url('~/public/img/2.jpg')] hi hidden lg:block"
    >
      <div
        class="h-full relative w-full bg-black bg-opacity-50 flex justify-center items-center text-center"
      >
        <div>
          <div
            class="lg:text-xl font-kugile text-white absolute top-0 start-0 mt- w-full"
          >
            <div
              class="w-full mt-32 flex justify-center items-center font-luci text-3xl gap-4"
            >
              A <span class="i-ri-hearts-fill text-2xl"></span> N
            </div>
          </div>
          <div class="mb-4 text-white" data-aos="fade-down">
            The Wedding Of:
          </div>
          <div class="text-7xl font-luci text-white" data-aos="fade-up">
            Alfan <span class="text-4xl font-angelos">&</span> Ninis
          </div>
          <div
            class="font-kugile mt-4 text-rose-300 fong-bold text-lg"
            data-aos="zoom-in"
          >
            Mingu . 02 Januari 2025
          </div>
        </div>
      </div>
    </div>
    <div class="lg:h-screen lg:overflow-y-scroll w-full">
      <Transition class="w-full" name="fade" mode="out-in">
        <div v-if="!open" key="cover">
          <Cover @open="openInvitation" />
        </div>
        <div v-else key="hero" class="w-full h-full relative overflow-hidden">
          <Hero id="beranda" />
          <Hadits id="hadits" />
          <Couple id="pasangan" />
          <Agenda id="agenda" />
          <Lokasi id="lokasi" />
          <Gallery id="gallery" />
          <Ucapan id="ucapan" />
          <Music src="/backsong.mp3" />
          <Footer />
          <Menu @selected="handleMenu" :active="activeMenu" class="z-50" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
/* Animasi Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
