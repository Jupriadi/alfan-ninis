<script>
export default {
    data() {
        return {

            menus:[
                {
                    label:'Beranda',
                    key:"beranda",
                    icon:'i-ri-dashboard-line'
                },
                {
                    label:'Pasangan',
                    key:'pasangan',
                    icon:'i-ri-user-heart-line'
                },
                {
                    label:'Agenda',
                    key:'agenda',
                    icon:'i-ri-calendar-line',
                },
                {
                    label:'Lokasi',
                    key:'lokasi',
                    icon:'i-ri-map-pin-line',
                },
                {
                    label:'Ucapan',
                    key:'ucapan',
                    icon:'i-ri-chat-heart-line',
                },
            ]
        }
    },
    props:{
        active:String
    }
}
</script>
<template>
    <div class="fixed bottom-0 start-0 w-full">
        <div class="w-full flex justify-between px-8 py-3 bg-gray-100">
            <div v-for="item in menus " :key="item">
                <button @click="$emit('selected',item.key)" :class="active == item.key ? 'text-rose-500':''">
                    <span class="text-2xl" :class="item.icon"></span>
                    <div class="text-[8pt]">
                        {{ item.label }}
                    </div>
                </button>

            </div>
        </div>
    </div>
</template>