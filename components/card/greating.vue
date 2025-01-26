<script>
export default {
    props:{
        name:String,
        message:String,
        time:String
    }
}
</script>
<template>
    <div class="text-start mb-1 border-b p-4 rounded">
        <div class=" text-rose-200 font-bold ">{{ name }}</div>
        <div class="text-gray-100 text-sm">
            {{ message }}
        </div>
        <div class="text-xs text-gray-300">
            {{ time }}
        </div>
    </div>
</template>