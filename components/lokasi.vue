<script>
export default {
  methods: {
    openMap() {
      // Koordinat lokasi
      const latitude = -8.69604194420651;
      const longitude = 116.49579403072832;

      // URL Google Maps dengan koordinat
      const googleMapsUrl = `https://www.google.com/maps/place//@-8.6959013,116.494421,18.7z/data=!4m6!1m5!3m4!2zOMKwNDEnNDUuOSJTIDExNsKwMjknNDQuOSJF!8m2!3d-8.6960847!4d116.4958161?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;

      // Redirect ke URL Google Maps
      window.open(googleMapsUrl, "_blank"); // Membuka di tab baru
      // Jika ingin di tab yang sama, gunakan: window.location.href = googleMapsUrl;
    },
  },
};
</script>
<template>
  <div class="py-32">
    <div class="text-center font-kugile font-bold text-2xl">Lokasi Acara</div>
    <div class="mt-8 text-center">
      <div class="font-bold">Rumah Mempelai Pria</div>
      <div class="">Dusun Teliah, Desa Sakra Selatan, Kec. Sakra</div>
      <div class="font-kugile font-bold text-lg">Lombok Timur</div>
      <div class="flex justify-center mt-6">
        
          <button
            @click="openMap"
            class="bg-rose-800 hover:bg-rose-700 text-white px-4 py-2 rounded"
          >
            <span class="i-ri-map-pin-line"></span> Buka Map
          </button>
      </div>
    </div>
  </div>
</template>