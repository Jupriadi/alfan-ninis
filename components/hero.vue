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
<template>
  <div class="h-screen w-full bg-cover bg-[url('~/public/img/hero_bg.jpg')]">
    <div
      class="h-full w-full flex justify-center items-center relative bg-gradient-to-b from-black"
    >
      <div class="absolute top-0 mt-24">
        <div class="text-center hero-text">
          <div>
            <span class="i-ri-hearts-fill text-gray-100 text-xl"></span>
          </div>
          <div class="text-orange-400">The Wedding Of :</div>
          <div class="text-7xl font-luci text-white">
            Agus <span class="text-4xl font-angelos">&</span> Uliana
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 mb-40" v-if="guest">
        <div class="text-center hero-text">
          <div class="text-orange-600">Kepada</div>
          <div class="font-kugile text-white">
            {{ guest }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>