<script>
export default {
    props:{
        name:String,
        message:String
    }
}
</script>
<template>
    <div class="text-start mb-1 border p-4 bg-white rounded">
        <div class=" text-gray-700 font-bold mb-1 text-sm">{{ name }}</div>
        <div class="text-gray-600 text-xs">
            {{ message }}
        </div>
    </div>
</template>