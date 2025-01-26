<script>
export default {
  methods: {
    saveToGoogleCalendar() {
      const title = "Pernikahan Alfan dan Ninis";
      const description =
        "Acara pernikahan Alfan dan Ninis. Jangan lewatkan momen spesial ini!";
      const location = "Alamat Acara, Kota, Negara";
      const startDate = "20241222T090000Z"; // Tanggal mulai: 22 Desember 2024, 09:00 UTC
      const endDate = "20241222T100000Z"; // Tanggal selesai: 22 Desember 2024, 10:00 UTC

      // URL Google Calendar dengan parameter acara
      const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
      )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
        description
      )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

      // Buka URL di tab baru
      window.open(googleCalendarURL, "_blank");
    },
  },
};
</script>
<template>
  <div class="bg-white border mx-8 rounded-xl border-rose-800">
    <div class="p-6">
      <div class="text-center font-rustic text-2xl text-rose-800 font-bold" data-aos="fade-up" data-duration="800">
        Save The Date
      </div>
      <div class="text-center text-gray-600 font-bold font-kugile">
        <strong>Ahad</strong>, 02 Februari 2025
      </div>

      <div class="grid grid-cols-2 mt-8">
        <!-- <div class="text-center font-kugile" data-aos="fade-left" data-aos-duration="1500">
          <div class="font-black">Ahad</div>
          <div class="font-black text-6xl w-full flex justify-center">
            <div class=" h-[80px] rounded p-3">02</div>
          </div>
          <div class="mt-2 font-bold">Februari</div>
          <div class="font-bold ms-2 -mt-2 tracking-[10pt]">2025</div>
        </div> -->
        <div class="text-center  border-gray-500" data-aos="fade-right" data-aos-duration="1500">
          <div class="Waktu">
            <div class="text-center font-bold font-kugile">
               Akad Nikah
            </div>
            <div
              class="font-kugile h-[80px]  rounded p-3 flex-col"
            >
              <div class="font-bold text-3xl">09:00</div>
              <div class="font-bold">Wita</div>
            </div>
            <div class="text-center">
              <div class="mt-2 font-bold font-kugile">Sampai</div>
              <div class="font-bold -mt-2">SELESAI</div>
            </div>
          </div>
        </div>
        <div class="text-center border-s border-gray-500" data-aos="fade-right" data-aos-duration="1500">
          <div class="Waktu">
            <div class="text-center font-bold font-kugile">
               Resepsi
            </div>
            <div
              class="font-kugile h-[80px]  rounded p-3 flex-col"
            >
              <div class="font-bold text-3xl">11:00</div>
              <div class="font-bold">Wita</div>
            </div>
            <div class="text-center">
              <div class="mt-2 font-bold font-kugile">Sampai</div>
              <div class="font-bold -mt-2">SELESAI</div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <CardCountdown />
      </div>
      <div>
        <div class="mt-16 flex justify-center">
          <button
            class="text-center flex items-center justify-center gap-2 bg-rose-900 hover:bg-rose-700 w-full rounded py-2 text-white"
            @click="saveToGoogleCalendar"
          >
            <span class="i-ri-calendar-check-fill"></span>
            <span>Simpan Tanggal</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>