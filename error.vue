<template>
  <div>
    
    <div>
      <input type="checkbox" id="ErrorHandle" :checked="true" class="modal-toggle text-center" />
      <div for="ErrorHandle" class="modal modal-middle">
        <div class="modal-box items-center text-center">
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
          <p class="py-4 text-center">ຂໍອະໄພ ເກີດຂໍ້ຜິດພາດ</p>
          <p class="text-start">
            ບໍ່ສາມາດເຊື່ອມຕໍ່ຫາເຊີເວີໄດ້
          </p>
          <button @click="handleError" class="btn w-full btn-error rounded-3xl mt-3">Clear errors</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script> 