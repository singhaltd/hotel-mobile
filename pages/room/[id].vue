<script setup>
import {ref} from 'vue'
const route = useRoute();
const token = useCookie("autKey");
const alertLogin = ref(false)
const url = useRuntimeConfig().public.BASE_URL;
const check = ref(false)
definePageMeta({});
const roomDetail = await $fetch(`/api/rooms?id=${route.params.id}`);
const Booknow = (str)=> {
  if(token.value !== ''){
   check.value = true
  }
}
</script>
<template>
  <div>
    <div
      class="
        w-full
        flex
        justify-between
        items-baseline
        fixed
        h-10
        glass
        z-10
        px-3
        py-2
      "
    >
      <a @click="router.back()" class="z-90 pointer relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </a>
    </div>
    <carouselpostr :items="roomDetail.room?.thumbnail" :url="url" />
    <div
      class="
        rounded-t-3xl
        z-0
        bg-white
        px-5
        pt-5
        pb-4
        z-50
        absolute
        w-full
      "
    >
      <h1 class="text-2xl">{{ roomDetail.room?.title }}</h1>
      <div class="flex justify-between">
        <div></div>
        <div>
          <label for="">ລາຄາ</label>
          <p>{{ roomDetail.price?.price }}ກີບ/ຄືນ</p>
        </div>
      </div>
      <h1>ລາຍລະອຽດ</h1>
      <div v-html="roomDetail.room?.description"></div>
      <div class="fixed bottom-8 w-full px-5 z-10">
        <div class="relative shadow p-3 rounded-3xl glass">
          <div class="flex items-center justify-between">
            <div class="w-full">
              <label>ລາຄາ</label>
              <p class="font-blod font-semibold">
                {{ roomDetail.price?.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}ກີບ/ຄືນ
              </p>
            </div>
            <div>
              <button
                class="btn btn-primary btn-md w-32 rounded-3xl"
                @click="Booknow(roomDetail?.room?.rtid)"
                >ຈອງດຽວນີ້</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-alert :check="check" /> 
  </div>
</template>