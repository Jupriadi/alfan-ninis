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
  <div>
    <Transition name="fade" mode="out-in">
      <div v-if="!open" key="cover">
        <Cover @open="openInvitation" />
      </div>
      <div v-else key="hero" class="w-full h-full">
        <Hero id="beranda" />
        <Couple id="pasangan" />
        <Agenda id="agenda" />
        <Lokasi id="lokasi" />
        <Ucapan id="ucapan" />
        <Footer />
        <Menu @selected="handleMenu" :active="activeMenu" class="z-50" />
      </div>
    </Transition>
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
