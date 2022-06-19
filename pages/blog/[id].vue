<script setup>
definePageMeta({});
const router = useRouter();
const config = useRuntimeConfig().public;
const route = useRoute();
const { pending, data: BlogDetail } = useLazyAsyncData("BlogDetail", () =>
  $fetch(`/api/carousel?id=${route.params.id}`)
);
const refresh = () => refreshNuxtData("BlogDetail");
</script>
<template>
  <div class="p-0">
    <div class="fixed z-10 w-full h-10 glass px-5">
      <a @click="router.back()" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mt-2"
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
    </div>
    <div
      class="
        relative
        flex flex-col
        justify-between
        bg-white
        shadow-md
        bg-cover
        text-gray-800
        overflow-hidden
        w-full
        object-cover object-center
        shadow-md
        rounded-b-3xl
        h-60
      "
      :style="`background-image: url('${config.BASE_URL}/file?ffile=/${BlogDetail.data?.cover_image}');`"
    ></div>
    <div class="px-5 mt-5">
      {{ BlogDetail.data?.body }}
    </div>
  </div>
</template>
<style>
</style>