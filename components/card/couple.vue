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
        class="w-[170px] aspect-[1/1] border border-rose-800 border-4 shadow-lg rounded-full overflow-hidden"
      >
        <img src="~/public/img/couple.jpg" :alt="avatar" srcset="" />
      </div>
    </div>
    <div class="text-center">
      <div class="text-rose-800 font-rustic mt-3 font-bold text-xl">
        {{ name }}
      </div>
      <div class="font-kugile">{{ status }} :</div>
      <div class="text-gray-700">{{ parrent }}</div>
    </div>

  </div>
</template>