<script setup>
definePageMeta({
  layout: "auth",
});
const router = useRouter();
const config = useRuntimeConfig().public;
const blogs = await $fetch("/api/carousel?con_type=NEW");
</script>
<template>
  <div>
    <div class="w-full flex px-3 py-5 justify-between">
      <a @click="router.back()" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <label>ຂ່າວສານ</label>
    </div>
    <div class="px-5">
      <h1 class="text-2xl py-2">ຂ່າວສານ</h1>
      <NuxtLink
        :to="`/blog/${bi.id}`"
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
          my-2
        "
        v-for="bi in blogs.data"
        :key="bi"
        :style="`background-image: url('${config.BASE_URL}/file?ffile=/${bi?.cover_image}');`"
      >
        <div
          class="absolute bg-gradient-to-t to-blue-400 opacity-50 inset-0 z-0"
        ></div>
        <div class="relative flex flex-row items-end h-72 w-full">
          <div class="p-6 rounded-lg flex flex-col w-full z-10">
            <h4
              class="
                mt-1
                text-white text-xl
                font-semibold
                leading-tight
                truncate
              "
            >
              {{ bi.title }}
            </h4>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>



<style>
</style>