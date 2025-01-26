<script>
import db from "~/plugins/firebase";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export default {
  data() {
    return {
      name: "", // Input Nama
      message: "", // Input Ucapan
      ucapanList: [], // List Ucapan
    };
  },
  methods: {
    // Fungsi untuk mengirim ucapan ke Firestore
    async submitMessage() {
      if (this.name && this.message) {
        try {
          await addDoc(collection(db, "ucapan"), {
            name: this.name,
            message: this.message,
            timestamp: serverTimestamp(),
          });

          // Reset input
          this.name = "";
          this.message = "";
        } catch (error) {
          console.error("Error menambahkan ucapan:", error);
        }
      } else {
        alert("Nama dan ucapan tidak boleh kosong!");
      }
    },

    // Fungsi untuk streaming data ucapan dari Firestore
    fetchUcapan() {
      const ucapanQuery = query(
        collection(db, "ucapan"),
        orderBy("timestamp", "desc")
      );

      // Streaming data real-time
      onSnapshot(ucapanQuery, (snapshot) => {
        this.ucapanList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    formatRelativeTime(stamp) {
      const date = stamp.toDate(); // Konversi ke Date
      return formatDistanceToNow(date, { addSuffix: true, locale: id });
    },
  },
  mounted() {
    this.fetchUcapan();
  },
};
</script>

<template>
  <div class="min-h-screen py-12">
    <div class="text-center">
      <!-- Judul -->
      <div class="font-bold font-kugile text-2xl">Ucapan dan Do'a</div>
      <div class="mt-4">
        Berikan do'a dan ucapan anda untuk kami yang berbahagia
      </div>

      <!-- Form Input -->
      <div class="mt-3 mx-8">
        <form @submit.prevent="submitMessage">
          <!-- Input Nama -->
          <div class="mb-4">
            <input
              v-model="name"
              type="text"
              placeholder="Nama"
              class="w-full p-2 border rounded"
            />
          </div>
          <!-- Input Ucapan -->
          <div class="mb-4">
            <textarea
              v-model="message"
              placeholder="Ucapan"
              class="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>
          <!-- Tombol Kirim -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-rose-800 flex items-center px-4 py-2 rounded hover:bg-rose-600 text-white gap-3"
            >
              Kirim <span class="i-ri-send-plane-2-fill"></span>
            </button>
          </div>
        </form>
      </div>

      <!-- Daftar Ucapan -->
      <div class="h-[400px] overflow-scroll mx-4 rounded mt-4 p-3 bg-rose-800">
        <div class="text-center font-bold font-kugile mt-2 text-white">List Ucapan</div>
        <div class="list-ucapan" v-if="ucapanList.length > 0">
          <div v-for="ucapan in ucapanList" :key="ucapan.id">
            <CardGreating
              :name="ucapan.name"
              :message="ucapan.message"
              :time="formatRelativeTime(ucapan.timestamp)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
