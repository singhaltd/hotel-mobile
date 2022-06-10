<script setup>
definePageMeta({
  layout: "auth",
});
const { pending: PRoomType, data: RoomType } = useLazyAsyncData(
  "RoomType",
  () => $fetch("/api/rooms")
);
const { pending, data: slide } = useLazyAsyncData("slide", () =>
  $fetch("/api/carousel?con_type=SLI")
);
watch(slide, (newSlide) => {
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <div>
    <div class="relative text-gray-600">
      <input
        for="boxSearch"
        class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
        <svg
          class="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </div>
    <div class="px-5">
      <div class="rounded-2xl max-h-40 overflow-clip">
        <Carouselpost :items="slide.data" />
      </div>
    </div>
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
        <NuxtLink
          to="/room"
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
        </NuxtLink>
        <NuxtLink
          to="/Address"
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
        </NuxtLink>

        <NuxtLink
          to="/blog"
          class="
            flex flex-col
            items-center
            justify-center
            w-20
            h-20
            bg-indigo-200
            rounded-2xl
            text-indigo-500
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
          <i class="far fa-mountains"></i>
          <p class="text-sm mt-1">ຂ່າວສານ</p>
        </NuxtLink>
        <label
          for="AlertNot"
          class="
            flex flex-col
            items-center
            justify-center
            w-20
            h-20
            bg-pink-200
            rounded-2xl
            text-pink-500
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
          <i class="far fa-umbrella-beach"></i>
          <p class="text-sm mt-1">ອື່ນໆ</p>
        </label>
      </div>
      <h4 class="font-semibold">ຫ້ອງພັກ ຂອງພວກເຮົາ</h4>
      <div
        class="
          grid
          m-0
          grid-cols-2
          space-x-4
          overflow-y-scroll
          flex
          justify-center
          items-center
          w-full
        "
      >
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
            h-64
            my-2
          "
          v-for="ri in RoomType"
          :key="ri"
          :style="`background-image: url('http://127.0.0.1:4444/file?ffile=/${ri.thumbnail[0]?.url}');`"
        >
          <!-- <div
            class="
              absolute
              bg-gradient-to-t
              from-green-400
              to-blue-400
              opacity-50
              inset-0
              z-0
            "
          ></div> -->
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
      <h4 class="font-semibold">ຂ່າວສານ</h4>
      <div class="grid grid-cols-1">
        <div class="">
          <div class="flex bg-white shadow-md rounded-2xl p-2">
            <img
              src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
              alt="Just a flower"
              class="w-16 object-cover h-16 rounded-xl"
            />
            <div class="flex flex-col justify-center w-full px-2 py-1">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <h2 class="text-sm font-medium">Massive Dynamic</h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-5
                    w-5
                    text-gray-500
                    hover:text-blue-400
                    cursor-pointer
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  ></path>
                </svg>
              </div>
              <div class="flex pt-2 text-sm text-gray-400">
                <div class="flex items-center mr-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <p class="font-normal">4.5</p>
                </div>
                <div class="flex items-center font-medium text-gray-900">
                  $1800
                  <span class="text-gray-400 text-sm font-normal"> /wk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-alert-not />
  </div>
</template>
