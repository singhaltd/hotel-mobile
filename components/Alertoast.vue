<script>
export default {
  props: {
    check: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div>
    <input
      type="checkbox"
      id="AlertToast"
      class="modal-toggle text-center"
      :checked="check"
    />
    <div for="AlertToast" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box items-center text-center">
        <slot />
        <div v-if="type == 'error'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="red"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="py-4 text-center">ຂໍອະໄພ! {{ message }}</p>
        </div>
        <div v-else-if="type == 'success'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="py-4 text-center">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>