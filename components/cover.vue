<template>
  <div class="w-full h-screen bg-cover bg-[url('~/public/img/cover_bg.jpg')]">
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
            A <span class="i-ri-hearts-fill text-2xl"></span> U
          </div>
        </div>
        <div class="mb-4 text-white">The Wedding Of:</div>
        <div class="text-7xl font-luci text-white">
          Agus <span class="text-4xl font-angelos">&</span> Uliana
        </div>
        <div class="font-kugile mt-4 text-rose-300">
          Minggu . 22 Desember 2024
        </div>

        <div
          class="text-white absolute bottom-0 start-0 mt- w-full"
        >
          <div
            class="w-full mb-32 flex justify-center items-center   gap-4"
          >
            <button @click="$emit('open')" class="bg-white btn-open px-4 py-2 rounded text-gray-500">Buka Undangan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>