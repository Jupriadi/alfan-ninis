<script>
export default {
    props:{
        name:String,
        status:String,
        parrent:String,
        avatar:String,
    }
}
</script>
<template>
  <div class="">
    <div class="flex justify-center">

      <div
      data-aos="fade-up" data-aos-duration="2000"
        class="w-[190px] aspect-[5/6] border border-rose-800 border-4 shadow-lg rounded-t-full overflow-hidden"
      >
        <img v-bind:src="avatar" :alt="name" srcset="" />
      </div>
    </div>
    <div class="text-center" data-aos="fade-left" data-aos-duration="1000">
      <div  class="text-rose-800 font-kugile mt-3 font-bold text-xl">
        {{ name }}
      </div>
      <div class="font-kugile">{{ status }} :</div>
      <div class="text-gray-700 font-bold">{{ parrent }}</div>
    </div>

  </div>
</template>