
<script setup>
import { ref } from "vue";
defineProps({
  itpop: ref(Object),
  url:ref(String)
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
          :src="`${url}`"
          alt="Just a flower"
          class="w-full rounded-xl"
        />
      </label>
    </label>
  </div>
</template>
