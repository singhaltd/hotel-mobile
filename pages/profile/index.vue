<script setup>
import ModalAbout from "~~/components/ModalAbout.vue";

definePageMeta({});
</script>

<template>
  <div class="">
    <div class="h-screen w-full bg-gray-50">
      <div class="h-56 w-full absolute flex justify-center items-center">
        <img
          class="object-cover h-20 w-20 rounded-full"
          src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
          alt=""
        />
      </div>

      <div class="h-56 w-full bg-blue-400 rounded-b-3xl">
        <div class="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
          <h1 class="text-white">Profile</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <div
          class="
            bg-white
            h-1/2
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
          "
        >
          <div class="w-full h-1/2 flex justify-between items-center px-3 pt-2">
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-gray-500 text-xs">ສຳເລັດ</h1>
              <h1 class="text-gray-600 text-sm">340</h1>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-gray-500 text-xs">ກຳລັງດຳເນີນ</h1>
              <h1 class="text-gray-600 text-sm">$2,004</h1>
            </div>
          </div>
          <div class="w-full h-1/2 flex flex-col justify-center items-center">
            <h1 class="text-gray-700 font-bold">Maria R.</h1>
            <h1 class="text-gray-500 text-sm">New York, USA</h1>
          </div>
        </div>
      </div>
      <div class="w-full mt-4">
        <div class="w-full">
          <ul class="menu bg-base-100 w-full p-2 rounded-box">
           
            <li>
              <NuxtLink to="/profile/maccount">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                ບັນຊີຂ້ອຍ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/profile/history">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                ປະຫັວດລາຍການ
              </NuxtLink>
            </li>
            <li>
              <label for="AlerAbout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                ກ່ຽວກັບ
              </label>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="px-5 mt-10">
        <!-- <button class="btn btn-primary w-full rounded-3xl">ອອກຈາກລະບົບ</button> -->
        <button class="btn btn-primary w-full rounded-3xl">ເຂົ້າສູ່ລະບົບ</button>
        <p class="text-sm text-center py-5">ເວີຊັ່ນ 1.0.0</p>
      </div>
    </div>
    <modal-about/>
  </div>
</template>