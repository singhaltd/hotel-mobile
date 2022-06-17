<template>
  <div v-if="data.error !== ''">
    {{data}}
    <input
      type="checkbox"
      id="AlertLogin"
      class="modal-toggle text-center"
      :checked="data.isactive ? data.isactive : false"
    />
    <label for="AlertLogin" class="modal modal-bottom sm:modal-middle" v-if="data.error == false">
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
        <p class="py-4 text-center">ຂໍອະໄພ! ສະມັກສະມາຊິກບໍ່ສຳເລັດ</p>
        <div class="modal-action">
          <button :click="data.isactive = data.isactive = false" class="btn btn-error rounded-3xl w-full"
            >ຕົກລົງ</button
          >
        </div>
      </div>
    </label>
    <label for="AlertLogin" class="modal modal-bottom sm:modal-middle" v-else>
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
        <p class="py-4 text-center">ສະມັກສະມາຊິກສຳເລັດ</p>
        <div class="modal-action">
          <NuxtLink to="/login" class="btn btn-error rounded-3xl w-full"
            >ເຂົ້າສູ່ລະບົບ</NuxtLink
          >
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
    props:{
        data:Object
    },
    computed:{
      isactive(val){
        return val
      }
    }
};
</script>

<style>
</style>