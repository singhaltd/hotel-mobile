<script setup>
import { ref } from "vue";
const router = useRouter();
const fdisable = ref(true);
const url = useRuntimeConfig().public.BASE_URL
const token = useCookie("autKey");
const { pending, data: BookIv } = useLazyAsyncData("BookIv", () =>
  $fetch(`${url}/api/v1/history`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
);
const refresh = () => refreshNuxtData('BookIv')
</script>

<template>
  <div>
    <div class="h-5"></div>
    <div class="h-56 w-full rounded-b-3xl">
      <div class="w-full flex px-3 py-5 justify-between">
        <a @click="router.back()" class="cursor-pointer">
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
        <label>ປະຫັວດລາຍການ</label>
      </div>
      <h3 class="px-5 py-4">ລາຍການທຸລະກຳ</h3>
      <div class="px-5">
        <div class="collapse" v-for="iv in BookIv.data" :key="iv">
          <input type="checkbox" class="peer" />
          <div
            class="
              collapse-title
              rounded-3xl
              border
            "
          >
          <div class="flex justify-between">
            <div> {{iv.ref_key}} | ຈຳນວນຫ້ອງ: {{iv.rqty}} | ແຕ່ວັນທີ: {{iv.check_in_date.substring(0,10)}} ຫາວັນທີ: {{iv.check_out_date.substring(0,10)}}</div>
            <div>ກຳລັງດຳເນີນ</div>
            
          </div>
           
          </div>
          <div
            class="
              mt-2
              collapse-content
              text-primary-content
               rounded-3xl
              peer-checked:bg-base-100 peer-checked:text-base-content
            "
          >
            <div>
              <p>ວັນທີເດືອນປີຈອງ: {{iv.trn_date.substring(0,10)}}</p>
              <p>ຈຳນວນຫ້ອງ: {{iv.rqty}}</p>
              <p>ການຊຳລະ: {{iv.invoice?.payt?.info}}</p>
              <p>ລວມເງິນ: {{iv.invoice?.total}} ກີບ / ຊະລະແລ້ວ: {{iv.invoice?.paid}} ກີບ</p>
              <p>ແຕ່ວັນທີ: {{iv.check_in_date.substring(0,10) }} ຫາວັນທີ: {{iv.check_out_date.substring(0,10)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>