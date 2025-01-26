<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      guest: null,
    };
  },
  mounted() {
    this.getGuestName();
  },
  methods: {
    getGuestName() {
      const route = useRoute();
      const name = route.query.to;
      // alert(name)
      this.guest = name;
    },
  },
};
</script>
<style>
.slideshow {
  /* Ukuran dan posisi */
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;

  /* Animasi */
  animation: fadeBackground 12s infinite;
}

/* Keyframes untuk mengganti latar belakang */
@keyframes fadeBackground {
  0% {
    background-image: url('~/public/img/hero_bg.jpg');
  }
  33% {
    background-image: url('~/public/img/1.jpg');
  }
  66% {
    background-image: url('~/public/img/2.jpg');
  }
  100% {
    background-image: url('~/public/img/3.jpg'); /* Kembali ke awal */
  }
}
</style>
<template>
  <div class="h-screen w-full bg-cover bg-center slideshow">
  <!-- <div class="h-screen w-full bg-cover bg-[url('~/public/img/hero_bg.jpg')]"> -->
    <div
      class="h-full w-full flex justify-center items-center relative bg-gradient-to-t from-black"
    >
      <div class="absolute top-0  mt-[30px]">
        <div class="text-center hero-text">
          <!-- <div>
            <span class="i-ri-hearts-fill text-gray-100 text-xl"></span>
          </div> -->
          <div class="text-gray-800" data-aos-duration="800" data-aos="fade-up">The Wedding Of :</div>
          <div class="text-7xl font-luci text-rose-800" data-aos-duration="1500" data-aos="fade-down">
            Alfan <span class="text-4xl font-angelos">&</span> Ninis
          </div>
          <dir class="text-sm text-gray-800">
            WE INVITE YOU TO CELEBRATE OUR WEDDING
          </dir>
        </div>
      </div>
      <div class="absolute bottom-0 mb-40" v-if="guest">
        <div class="text-center hero-text"  data-aos-duration="1000" data-aos="fade-down">
          <div class="text-orange-200 fong-bold">Kepada :</div>
          <div class="font-kugile text-xl text-white">
            {{ guest }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>