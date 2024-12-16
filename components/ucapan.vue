<template>
    <div class="min-h-screen bg-gray-100 py-12">
        <div class="text-center ">

            <div class="font-bold font-kugile text-2xl">Ucapan dan Do'a</div>
            <div class="mt-4">
                Berikan do'a dan ucapan anda untuk kami yang berbahagia
            </div>
            <div class="mt-3">
                <div class="mx-8">
                    <form action="">
                        <BaseInput placeholder="Nama" />
                        <BaseInput textarea placeholder="Ucapan" />
                        <div class="mt-3 flex justify-end">
                            <button class="bg-rose-800 flex items-center px-4 py-2 rounded hover:bg-rose-600 text-white gap-3">Kirim <span class="i-ri-send-plane-2-fill"></span> </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="h-[400px] overflow-scroll border mx-4 rounded mt-4 p-3">
                <div class="list-ucapan">

                </div>
            </div>
        </div>
    </div>
</template>