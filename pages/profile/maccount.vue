<script setup>
import { ref } from "vue";
const router = useRouter();
const fdisable = ref(true);
</script>

<template>
  <div>
    <div class="h-56 w-full bg-blue-400 rounded-b-3xl">
      <div class="w-full flex px-3 py-5 justify-between">
        <a @click="router.back()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <label>ບັນຊີຂ້ອຍ</label>
        <botton class="btn" v-if="fdisable == true" @click="fdisable = false"
          >ແກ້ໄຂ</botton
        >
      </div>
      <div class="px-5 bg-white pt-5">
        <div class="flex flex-row space-x-4 w-full text-xs">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຊື່ແທ້</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ນາມສະກຸນ</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
        </div>
        <div class="flex flex-row space-x-4 w-full text-xs">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຊື່ແທ້</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ນາມສະກຸນ</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
        </div>
        <div class="flex flex-row space-x-4 w-full text-xs">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຊື່ແທ້</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ນາມສະກຸນ</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
        </div>
        <div class="flex flex-row space-x-4 w-full text-xs">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຊື່ແທ້</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ນາມສະກຸນ</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
        </div>
        <div class="flex flex-row space-x-4 w-full text-xs">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຊື່ແທ້</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ນາມສະກຸນ</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max-w-xs"
              :disabled="fdisable"
            />
          </div>
        </div>
      </div>
      <div class="px-5 mt-10">
        <!-- <button class="btn btn-primary w-full rounded-3xl">ອອກຈາກລະບົບ</button> -->
        <button class="btn btn-primary w-full rounded-3xl"  v-if="fdisable == false">ບັນທຶກ</button>
      </div>
    </div>
  </div>
</template>