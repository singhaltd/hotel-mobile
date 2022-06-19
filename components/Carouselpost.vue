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
            :src="`${url}/file?ffile=${it?.cover_image}`"
            class="object-fill"
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
    url:{
      type:String
    }
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