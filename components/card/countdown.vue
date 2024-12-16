<script>
export default {
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      targetDate: new Date("2024-12-22T10:00:00"), // Tanggal acara
      timer: null,
    };
  },
  methods: {
    calculateCountdown() {
      const now = new Date(); // Waktu saat ini
      const target = this.targetDate; // Waktu target
      const difference = target - now; // Selisih waktu dalam milidetik

      if (difference > 0) {
        this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      } else {
        clearInterval(this.timer); // Hentikan interval jika waktu habis
      }
    },
  },
  mounted() {
    // Jalankan timer saat komponen dimuat
    this.calculateCountdown(); // Hitung langsung saat halaman pertama kali dimuat
    this.timer = setInterval(this.calculateCountdown, 1000); // Hitung setiap detik
  },
  beforeUnmount() {
    // Bersihkan timer jika komponen dihancurkan
    clearInterval(this.timer);
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-4">
    <h1 class="text-2xl text-gray-700 font-bold my-4 text-center font-kugile">Hitung Mundur</h1>
    <div class="flex font-kugile gap-2 text-white text-3xl font-semibold">
      <div class="bg-orange-600 rounded-lg p-4 text-center">
        <div>{{ countdown.days }}</div>
        <div class="text-[8pt]">Hari</div>
      </div>
      <div class="bg-orange-500 rounded-lg p-4 text-center">
        <div>{{ countdown.hours }}</div>
        <div class="text-[8pt]">Jam</div>
      </div>
      <div class="bg-orange-400 rounded-lg p-4 text-center">
        <div>{{ countdown.minutes }}</div>
        <div class="text-[8pt]">Menit</div>
      </div>
      <div class="bg-orange-300 rounded-lg p-4 text-center">
        <div>{{ countdown.seconds }}</div>
        <div class="text-[8pt]">Detik</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
}
</style>
