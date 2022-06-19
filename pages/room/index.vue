<script setup>
definePageMeta({
  layout: "auth",
});
const url = useRuntimeConfig().public.BASE_URL;
const { pending: PRoomType, data: RoomType } = useLazyAsyncData(
  "RoomType",
  () => $fetch("/api/rooms")
);
</script>

<template>
  <div>
    <div class="flex px-5 mt-3">
      <img
        src="/img/logo.png"
        alt="Just a flower"
        class="w-16 h-16 rounded-xl"
      />
      <div class="text-2xl mt-4 pl-3">
        ໂຮງແຮມ ໂປເອັທ ລາວ
      </div>
    </div>
    <div class="w-full px-5 pb-20">
      <NuxtLink
        :to="`/room/${ri.rtid}`"
        class="
          relative
          flex flex-col
          justify-between
          bg-white
          shadow-md
          rounded-3xl
          bg-cover
          text-gray-800
          overflow-hidden
          cursor-pointer
          w-full
          object-cover object-center
          rounded-lg
          shadow-md
          h-40
          mt-4
          my-2
        "
        v-for="ri in RoomType"
        :key="ri"
        :style="`background-image: url('${url}/file?ffile=/${ri.thumbnail[0]?.url}');`"
      >
        <div class="relative flex flex-row items-end h-72 w-full">
          <div class="p-6 rounded-lg flex flex-col w-full z-10">
            <h4
              class="
                mt-1
                text-white text-md
                font-semibold
                leading-tight
                truncate
              "
            >
              {{ ri.title }}
            </h4>
            <div class="flex pt-4 text-sm text-gray-300">
              <div class="flex items-center mr-auto"></div>
              <div class="flex items-center font-medium text-white">
                10000 ກີບ
                <span class="text-gray-300 text-sm font-normal"> /ຄືນ</span>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>