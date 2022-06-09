<script setup>
const route = useRoute();
definePageMeta({});
const { pending, data: roomDetail } = useLazyAsyncData("roomDetail", () =>
  $fetch(`/api/carousel?id=${route.params.id}`)
);
watch(roomDetail, (newSroomDetail) => {
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>
<template>
  <div>
    <carouselpost :items="[roomDetail.data]" class="h-[400px]" />
    <div class="rounded-t-3xl shadow z-0 bg-white px-5 pt-5 pb-24 -mt-20 z-50 absolute w-full">
      <h1 class="text-2xl">ຫ້ອງທຳມະດາ</h1>
      <div class="flex justify-between">
          <div></div>
          <div>
              <label for="">ລາຄາ</label>
              <p>askdfj</p>
          </div>
      </div>
      <h1>ສິ່ງອຳນວຍຄວາມສະດວກ</h1>
      <div class="p-3 space-y-4 z-0">
        <div
          class="
            flex
            items-center
            justify-between
            overflow-y-scroll
            text-gray-500
            cursor-pointer
            space-x-3
          "
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              w-20
              h-20
              bg-green-200
              rounded-2xl
              text-green-600
              shadow
              hover:shadow-md
              cursor-pointer
              mb-2
              p-1
              bg-white
              transition
              ease-in
              duration-300
            "
          >
            <i class="far fa-hotel"></i>
            <p class="text-sm mt-1">ຫ້ອງພັກ</p>
          </div>
          <div
            class="
              flex flex-col
              items-center
              justify-center
              w-20
              h-20
              bg-yellow-200
              rounded-2xl
              text-yellow-600
              shadow
              hover:shadow-md
              cursor-pointer
              mb-2
              p-1
              bg-white
              transition
              ease-in
              duration-300
            "
          >
            <i class="far fa-bus"></i>
            <p class="text-sm mt-1">ສະຖານທີ</p>
          </div>
        </div>
      </div>
      <h1>ລາຍລະອຽດ</h1>
      <div class="text-center">
          asdfjklasdjfasldj
          asdfjasldfj
      </div>
    </div>
    <modal-alert/>

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
</template>