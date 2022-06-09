<script setup>
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div class="px-5">
    <h1 class="text-2xl py-2">ຂ່າວສານ</h1>
    <NuxtLink
      to="/blog/1"
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
      style="
        background-image: url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80');
      "
    >
      <div
        class="absolute bg-gradient-to-t to-blue-400 opacity-50 inset-0 z-0"
      ></div>
      <div class="relative flex flex-row items-end h-72 w-full">
        <div class="p-6 rounded-lg flex flex-col w-full z-10">
          <h4
            class="mt-1 text-white text-xl font-semibold leading-tight truncate"
          >
            Loremipsum..
          </h4>
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <h2 class="text-sm flex items-center text-gray-300 font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Dubai
              </h2>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>



<style>
</style>