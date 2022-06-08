<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide>
      <div>
        <figure>
          <img
            :src="`https://th.bing.com/th/id/OIP.VueUEdTMVEbhVrhu7l_EhgHaE8?pid=ImgDet&rs=1`"
          />
        </figure>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <figure>
          <img
            :src="`https://th.bing.com/th/id/OIP.VueUEdTMVEbhVrhu7l_EhgHaE8?pid=ImgDet&rs=1`"
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