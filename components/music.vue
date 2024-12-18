<template>
    <div>
      <audio ref="audio" :src="src" autoplay loop />
      <button @click="playPause">{{ playing ? 'Berhenti' : 'Putar' }}</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  defineProps({
    src: {
      type: String,
      required: true
    }
  })
  
  const audio = ref(null)
  const playing = ref(true)
  
  const playPause = () => {
    if (audio.value.paused) {
      audio.value.play()
      playing.value = true
    } else {
      audio.value.pause()
      playing.value = false
    }
  }
  </script>