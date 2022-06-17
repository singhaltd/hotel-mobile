
<script setup>
import { ref } from "vue";
defineProps({
  itpop: ref(Object),
});
</script>
<template>
  <div class="pop">
    <input
      type="checkbox"
      id="my-modal-4"
      :checked="itpop.data.length > 0 ? true : false"
      class="modal-toggle"
    />
    <label for="my-modal-4" class="modal cursor-pointer">
      <label class="modal-box relative p-0" for="">
        <img
          src="https://th.bing.com/th/id/R.1a496cbbf298005c97f1de81e162a227?rik=9%2bps6WjAcfyPPQ&pid=ImgRaw&r=0"
          alt="Just a flower"
          class="w-full rounded-xl"
        />
      </label>
    </label>
  </div>
</template>
