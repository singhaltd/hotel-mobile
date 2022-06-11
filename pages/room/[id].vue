<script setup>
const route = useRoute();
definePageMeta({});
const { pending, data: roomDetail } = useLazyAsyncData("roomDetail", () =>
  $fetch(`/api/rooms?id=${route.params.id}`)
);
watch(roomDetail, (newSroomDetail) => {
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>
<template>
  <div>
    <div class="h-screen w-screen" v-if="pending">
      <div class="rounded-md p-8 w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <carouselpostr :items="roomDetail?.thumbnail" />
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
        <h1 class="text-2xl">{{ roomDetail?.title }}</h1>
        <div class="flex justify-between">
          <div></div>
          <div>
            <label for="">ລາຄາ</label>
            <p>askdfj</p>
          </div>
        </div>
        <h1>ລາຍລະອຽດ</h1>
        <div v-html="roomDetail?.description"></div>
      </div>
      <!-- <modal-alert /> -->
      <div class="bottom-3 fixed w-full p-3 z-10">
        <div class="relative shadow p-3 rounded-3xl glass">
          <div class="flex items-center justify-between">
            <div class="w-full">
              <label>ລາຄາ</label>
              <p class="font-blod font-semibold">200000 ກີບ/ຄືນ</p>
            </div>
            <div>
              <NuxtLink class="btn btn-primary btn-md w-32 rounded-3xl"
                >ຈອງດຽວນີ້</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>