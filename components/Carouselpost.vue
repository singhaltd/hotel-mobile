<template>
  <swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="it in items" :key="it">
      <div>
        <figure>
          <img
            :src="`http://127.0.0.1:4444/peot/file?ffile=${it?.cover_image}`"
            class=""
          />
        </figure>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import SwiperClass, { Pagination, Autoplay} from "swiper";
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
      modules: [Pagination,Autoplay],
    };
  },
};
</script>