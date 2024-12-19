
<script>
export default {
  name: "GoogleMapDirections",
  data() {
    return {
      latitude: -6.2, // Ganti dengan koordinat tujuan
      longitude: 106.816666,
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
      <div class="font-bold">Rumah Mempelai Pria</div>
      <div class="">Dusun Teliah, Desa Sakra Selatan, Kec. Sakra</div>
      <div class="font-kugile font-bold text-lg">Lombok Timur</div>
      <div class="flex justify-center mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3317.439964868734!2d116.49351317501491!3d-8.69597599135268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnNDUuNSJTIDExNsKwMjknNDUuOSJF!5e1!3m2!1sen!2sid!4v1734609557688!5m2!1sen!2sid"
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