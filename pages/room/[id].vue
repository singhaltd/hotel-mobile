<script setup>
const route = useRoute();
definePageMeta({});
const  roomDetail  =await $fetch(`/api/rooms?id=${route.params.id}`)
</script>
<template>
  <div>
    <carouselpostr :items="roomDetail.room?.thumbnail" />
    <div
      class="
        rounded-t-3xl
        shadow
        z-0
        bg-white
        px-5
        pt-5
        pb-24
        z-50
        absolute
        w-full
      "
    >
      <h1 class="text-2xl">{{roomDetail.room?.title}}</h1>
      <div class="flex justify-between">
        <div></div>
        <div>
          <label for="">ລາຄາ</label>
          <p>{{roomDetail.price?.price}}ກີບ/ຄືນ</p>
        </div>
      </div>
      <h1>ລາຍລະອຽດ</h1>
      <div v-html="roomDetail.room?.description"></div>
    </div>
    <!-- <modal-alert /> -->
    
    <div class="bottom-3 fixed w-full p-3 z-10">
      <div class="relative shadow p-3 rounded-3xl glass">
        <div class="flex items-center justify-between">
          <div class="w-full">
            <label>ລາຄາ</label>
            <p class="font-blod font-semibold">{{roomDetail.price?.price}}ກີບ/ຄືນ</p>
          </div>
          <div>
            <NuxtLink :to="`/booking?id=${roomDetail?.room?.rtid}`" class="btn btn-primary btn-md w-32 rounded-3xl">ຈອງດຽວນີ້</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>