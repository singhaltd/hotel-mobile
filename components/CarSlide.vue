<template>
  <swiper
    class="swiper"
    :modules="modules"
    direction="horizontal"
    :slides-per-view="2"
    :space-between="10"
    @swiper="setSwiperRef"
    @resize="handleResize"
  >
    <slot />

    <swiper-slide class="slide" v-for="ri in RoomType"
        :key="ri"
      ><NuxtLink
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
        :style="`background-image: url('http://127.0.0.1:4444/peot/file?ffile=/${ri.thumbnail[0]?.url}');`"
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
      </NuxtLink></swiper-slide
    >
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwiperClass, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

export default defineComponent({
  name: "swiper-example-change-direction",
  title: "Change direction",
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    RoomType: {
      type: Object,
    },
  },
  setup() {
    let swiperRef: SwiperClass | null = null;
    const setSwiperRef = (swiper: SwiperClass) => {
      swiperRef = swiper;
    };

    const handleResize = () => {
      swiperRef?.changeDirection(
        window.innerWidth <= 960 ? "vertical" : "horizontal"
      );
    };

    return {
      modules: [Navigation],
      setSwiperRef,
      handleResize,
    };
  },
});
</script>
