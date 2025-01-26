
<script>
export default {
  name: "GoogleMapDirections",
  data() {
    return {
      latitude: -8.69174537751301, // Ganti dengan koordinat tujuan
      longitude:  116.55207990000001,
    };
  },
  methods: {
    openGoogleMap() {
      const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}`;
      window.open(mapLink, "_blank");
    },
  },
};
</script>
<template>
  <div class="py-32">
    <div class="text-center font-kugile font-bold text-2xl">Lokasi Acara</div>
    <div class="mt-8 text-center" data-aos="zoom-out" data-aos-duration="2000">
      <div class="font-bold">Aula Kantor Desa</div>
      <div class="">Peneda Gandor, Kec. Labhuan Haji</div>
      <div class="font-kugile font-bold text-lg">Lombok Timur</div>
      <div class="flex justify-center mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4770458814014!2d116.55207990000001!3d-8.6917878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc4e48ffe12c29%3A0x450ebd801a0d7c9e!2sKantor%20Desa%20Peneda%20Gandor!5e1!3m2!1sid!2sid!4v1737880804430!5m2!1sid!2sid"
          class="w-full mx-4 rounded-lg"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <!-- <button
            @click="openGoogleMap"
            class="bg-rose-800 hover:bg-rose-700 text-white px-4 py-2 rounded"
          >
            <span class="i-ri-map-pin-line"></span> Buka Map
          </button> -->
      </div>
    </div>
  </div>
</template>