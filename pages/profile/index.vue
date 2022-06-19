<script setup>
const router = useRouter();
const config = useRuntimeConfig().public;
const token = useCookie("autKey");
const url = useRuntimeConfig().public.BASE_URL;
const { pending, data: Customer } = useLazyAsyncData("Customer", () =>
  $fetch(`${config.BASE_URL}/api/v1/profile`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
);
const refresh = () => refreshNuxtData("Customer");

const LoginOut = () => {
  const token = useCookie("autKey");
  token.value = "";
  refresh();
  navigateTo("/");
};
setTimeout(() => {
  refresh();
}, 100);
</script>

<template>
  <div class="">
    <div class="h-screen w-full bg-gray-50">
      <div class="h-56 w-full absolute flex justify-center items-center">
        <img
          class="object-cover h-20 w-20 rounded-full"
          :src="
            !Customer || Customer?.cover == ''
              ? '/img/avatar.jpeg'
              : `${url}/file?ffile=${Customer?.cover}`
          "
          alt=""
        />
      </div>

      <div class="h-56 w-full bg-blue-400 rounded-b-3xl">
        <div class="h-5"></div>
        <div
          class="
            h-1/2
            w-full
            flex
            justify-between
            items-baseline
            px-3
            py-5
            sticky
            top-0
          "
        >
          <a @click="router.back()" class="z-[99] cursor-pointer">
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

          <h1 class="text-white">ໂປຣຟາຍ</h1>
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
          <div
            class="w-full h-1/2 flex flex-col justify-center items-center"
            v-if="Customer"
          >
            <h1 class="text-gray-700 font-bold">
              {{ Customer.fname }} {{ Customer.lname }}
            </h1>
          </div>
        </div>
      </div>
      <!-- <button @click="refresh">Refresh</button> -->
      <div class="w-full mt-4">
        <div class="w-full">
          <ul class="menu bg-base-100 w-full p-2 rounded-box">
            <li v-if="Customer">
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
            <li v-if="Customer">
              <NuxtLink :to="`/profile/history?cust=${Customer.id}`">
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
        <NuxtLink
          class="btn btn-primary w-full rounded-3xl"
          to="/login"
          v-if="!Customer"
          >ເຂົ້າສູ່ລະບົບ</NuxtLink
        >
        <button
          class="btn btn-primary w-full rounded-3xl"
          @click="LoginOut"
          v-if="Customer"
        >
          ອອກຈາກລະບົບ
        </button>
        <p class="text-sm text-center py-5">ເວີຊັ່ນ 1.0.0</p>
      </div>
    </div>
    <modal-about />
  </div>
</template>