<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide v-for="it in items" :key="it">
      <div>
        <figure>
          <img
            :src="`http://127.0.0.1:4444/peot/file?ffile=/${it?.url}`" class="w-full h-full"
          />
        </figure>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  props: {
    items: {
      type: Object,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>