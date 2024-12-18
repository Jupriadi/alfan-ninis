<template>
  <div class="fixed bottom-0 mb-28 me-3 end-0">
    <audio ref="audio" :src="src" autoplay loop />
    <button @click="playPause">
        <div class="bg-gray-800 text-white p-2 rounded-full w-[45px] aspect-[1/1] flex items-center justify-center">
            <span v-if="playing" class="i-ri-pause-circle-line text-3xl"></span>
            <span v-else class="i-ri-play-circle-line text-3xl"></span>
        </div>
    </button>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const audio = ref(null);
const playing = ref(true);

const playPause = () => {
  if (audio.value.paused) {
    audio.value.play();
    playing.value = true;
  } else {
    audio.value.pause();
    playing.value = false;
  }
};
</script>