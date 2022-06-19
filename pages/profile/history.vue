<script setup>
import { ref } from "vue";
const router = useRouter();
const fdisable = ref(true);
const url = useRuntimeConfig().public.BASE_URL;
const AlertToast = ref({ error: false, message: "", type: "" });
const token = useCookie("autKey");
const { pending, data: BookIv } = useLazyAsyncData("BookIv", () =>
  $fetch(`${url}/api/v1/history`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
);
const refresh = () => refreshNuxtData("BookIv");
setTimeout(() => {
  refresh();
}, 1000);

const BookStat = async (ivid, bookid) => {
  await $fetch(`${url}/api/v1/bookStat/${ivid}/${bookid}`, {
    method: "PUT",
    body: { status: "C" },
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  }).then((res) => {
    AlertToast.value.error = true;
    AlertToast.value.message = "ທ່ານຍົກເລີກການຈອງແລ້ວ";
    AlertToast.value.type = "success";
    setTimeout(() => {
      AlertToast.value.error = false;
      AlertToast.value.message = "";
      AlertToast.value.type = "";
      refresh();
    }, 1000);
  });
};
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
        <div class="collapse" v-for="iv in BookIv?.data" :key="iv">
          <input type="checkbox" class="peer" />
          <div class="collapse-title rounded-3xl border">
            <div class="flex justify-between">
              <div>
                {{ iv.ref_key }} | ຈຳນວນຫ້ອງ: {{ iv.rqty }} | ແຕ່ວັນທີ:
                {{ iv.check_in_date.substring(0, 10) }} ຫາວັນທີ:
                {{ iv.check_out_date.substring(0, 10) }}
              </div>
              <div>
                <div
                  class="badge badge-success mt-2 mr-3"
                  v-if="iv.stat == 'B'"
                >
                  ຢືນຢັນການຈອງແລ້ວ
                </div>
                <div class="badge badge-error mt-2 mr-3" v-if="iv.stat == 'C'">
                  ຖືກຍົກເລີກ
                </div>
                <div
                  class="badge badge-primary mt-2 mr-3"
                  v-if="iv.stat == 'I'"
                >
                  ກຳລັງໃຊ້ງານຢູ່
                </div>
                <div
                  class="badge badge-success mt-2 mr-3"
                  v-if="iv.stat == 'O'"
                >
                  ສຳເລັດ
                </div>
                <div class="flex" v-if="iv.stat == 'B'">
                  <div class="badge badge-warning mt-2 mr-3">ກຳລັງດຳເນີນ</div>
                </div>
              </div>
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
            <div class="flex justify-between">
              <div>
                <p>ວັນທີເດືອນປີຈອງ: {{ iv.trn_date.substring(0, 10) }}</p>
                <p>ຈຳນວນຫ້ອງ: {{ iv.rqty }}</p>
                <p>ການຊຳລະ: {{ iv.invoice?.payt?.info }}</p>
                <p>
                  ລວມເງິນ: {{ iv.invoice?.total }} ກີບ / ຊະລະແລ້ວ:
                  {{ iv.invoice?.paid }} ກີບ
                </p>
                <p>
                  ແຕ່ວັນທີ: {{ iv.check_in_date.substring(0, 10) }} ຫາວັນທີ:
                  {{ iv.check_out_date.substring(0, 10) }}
                </p>
              </div>
              <button
                class="btn btn-sm btn-error rounded-3xl"
                v-if="iv.stat == 'B'"
                @click="BookStat(iv?.invoice?.ivid, iv.ref_key)"
              >
                ຍົກເລີກ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alertoast
      :check="AlertToast.error"
      :type="AlertToast.type"
      :message="AlertToast.message"
    >
      <button
        @click="CloseAlertToast"
        class="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </button>
    </Alertoast>
  </div>
</template>