<template>
  <div class="w-full h-screen bg-cover bg-center bg-[url('~/public/img/cover_bg.jpg')] ">
    <div
      class="h-full relative w-full bg-black bg-opacity-50 flex justify-center items-center text-center"
    >
      <div>
        <div
          class="lg:text-xl font-kugile text-white absolute top-0 start-0 mt- w-full "
        >
          <div
            class="w-full mt-32 flex justify-center items-center font-luci text-3xl gap-4"
          >
            A <span class="i-ri-hearts-fill text-2xl"></span> N
          </div>
        </div>
        <div class="mb-4 mt-32 text-white" data-aos="fade-down">The Wedding Of:</div>
        <div class="text-7xl font-hugh text-white" data-aos="fade-up">
          Alfan <span class="text-4xl font-angelos">&</span> Ninis
        </div>
        <div class="font-kugile mt-4 text-rose-100 fong-bold text-lg" data-aos="zoom-in">
          Minggu . 02 Februari 2025
        </div>

        <div
          class="text-white absolute bottom-0 start-0 mt- w-full"
        >
          <div
            class="w-full mb-32 flex justify-center items-center   gap-4"
          >
            <button @click="$emit('open')" class="bg-rose-800 btn-open px-4 py-2 rounded text-gray-100"><span class="i-ri-mail-open-line"></span> Buka Undangan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>