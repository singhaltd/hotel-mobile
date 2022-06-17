<script setup>
import { ref } from "vue";
const token = useCookie("autKey");
const route = useRoute();
const router = useRouter();
const fdisable = ref(true);
const reqBook = ref({ adulth: 1, child: 0,rqty:1 ,check_in_date:'',check_out_date:'',room_type:route.query.id,pay_type:2,mtotal:0});
const { pending, data } = useLazyAsyncData("roomDetail", () =>
  $fetch(`/api/rooms?id=${route.query.id}`)
);

const Booking = async () => {
  await $fetch("http://127.0.0.1:4444/peot/api/v1/book", {
    method: "POST",
    body: reqBook.value,
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  }).then((res) => {
    setAccessToken(res.token);
    navigateTo("/profile");
  });
};
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
        <label>ປະຫັວດລາຍການ</label>
      </div>
      <div class="px-5">
        <div>
          <div class="flex bg-white shadow-md rounded-2xl p-2">
            <img
              :src="`http://127.0.0.1:4444/peot/file?ffile=${data.room.thumbnail[0].url}`"
              alt="Just a flower"
              class="w-[50%] object-cover rounded-xl"
            />
            <div class="flex flex-col justify-center w-full px-2 py-1">
              <p>{{ data.room.title }}</p>
              <p>ລາຄາ {{ data.price?.price }} ຄືນ</p>
            </div>
          </div>
        </div>
        <div class="h-8"></div>
        <div class="alert alert-warning">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span> ກາລຸນາກວດສອບຂໍ້ມູນໃຫ້ຖືກຕ້ອງກ່ອນການເຮັດຄຳສັ່ງຮ້ອງຂໍຈອງ</span>
          </div>
        </div>
        <div class="h-8"></div>
        <div class="shadow rounded-3xl border px-4 py-4">
          <h1>ລາຍລະອຽດ</h1>
          <div
            class="
              custom-number-input
              flex
              justify-between
              h-10
              w-full
              mt-2
              mb-2
            "
          >
            <label
              for="custom-input-number"
              class="w-full text-gray-700 text-sm font-semibold"
              >ຜູ້ໃຫຍ່
            </label>
            <div
              class="
                flex flex-row
                h-10
                w-50
                rounded-lg
                relative
                bg-transparent
                mt-1
              "
            >
              <button
                data-action="decrement"
                class="
                  bg-gray-300
                  text-gray-600
                  hover:text-gray-700 hover:bg-gray-400
                  h-full
                  w-20
                  rounded-l
                  cursor-pointer
                  outline-none
                "
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                class="
                  outline-none
                  focus:outline-none
                  text-center
                  w-full
                  bg-gray-300
                  font-semibold
                  text-md
                  hover:text-black
                  focus:text-black
                  md:text-basecursor-default
                  flex
                  items-center
                  text-gray-700
                  outline-none
                "
                name="custom-input-number"
                v-model="reqBook.adulth"
              />
              <button
                data-action="increment"
                class="
                  bg-gray-300
                  text-gray-600
                  hover:text-gray-700 hover:bg-gray-400
                  h-full
                  w-20
                  rounded-r
                  cursor-pointer
                "
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <div
            class="
              custom-number-input
              flex
              justify-between
              h-10
              w-full
              mt-2
              mb-2
            "
          >
            <label
              for="custom-input-number"
              class="w-full text-gray-700 text-sm font-semibold"
              >ເດັກນ້ອຍ
            </label>
            <div
              class="
                flex flex-row
                h-10
                w-50
                rounded-lg
                relative
                bg-transparent
                mt-1
              "
            >
              <button
                data-action="decrement"
                class="
                  bg-gray-300
                  text-gray-600
                  hover:text-gray-700 hover:bg-gray-400
                  h-full
                  w-20
                  rounded-l
                  cursor-pointer
                  outline-none
                "
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                class="
                  outline-none
                  focus:outline-none
                  text-center
                  w-full
                  bg-gray-300
                  font-semibold
                  text-md
                  hover:text-black
                  focus:text-black
                  md:text-basecursor-default
                  flex
                  items-center
                  text-gray-700
                  outline-none
                "
                name="custom-input-number"
                v-model="reqBook.child"
              />
              <button
                data-action="increment"
                class="
                  bg-gray-300
                  text-gray-600
                  hover:text-gray-700 hover:bg-gray-400
                  h-full
                  w-20
                  rounded-r
                  cursor-pointer
                "
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <div
            class="
              custom-number-input
              flex
              justify-between
              h-10
              w-full
              mt-2
              mb-2
            "
          >
            <label
              for="custom-input-number"
              class="w-full text-gray-700 text-sm font-semibold"
              >ຈຳນວນຫ້ອງ
            </label>
            <div
              class="
                flex flex-row
                h-10
                w-50
                rounded-lg
                relative
                bg-transparent
                mt-1
              "
            >
              <button
                data-action="decrement"
                class="
                  bg-gray-300
                  text-gray-600
                  hover:text-gray-700 hover:bg-gray-400
                  h-full
                  w-20
                  rounded-l
                  cursor-pointer
                  outline-none
                "
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                class="
                  outline-none
                  focus:outline-none
                  text-center
                  w-full
                  bg-gray-300
                  font-semibold
                  text-md
                  hover:text-black
                  focus:text-black
                  md:text-basecursor-default
                  flex
                  items-center
                  text-gray-700
                  outline-none
                "
                name="custom-input-number"
                v-model="reqBook.rqty"
              />
              <button
                data-action="increment"
                class="
                  bg-gray-300
                  text-gray-600
                  hover:text-gray-700 hover:bg-gray-400
                  h-full
                  w-20
                  rounded-r
                  cursor-pointer
                "
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 mx-4 border rounded-3xl mt-4 py-3">
        <label for="" class="py-5">ແຕ່ວັນທີ</label><br />
        <input
          type="date"
          placeholder="Type here"
          v-model="reqBook.check_in_date"
          class="input input-bordered input-md w-full"
        />
        <div class="h-3"></div>
        <label for="" class="py-5">ຫາວັນທີ</label><br />
        <input
          type="date"
          v-model="reqBook.check_out_date"
          placeholder="Type here"
          class="input input-bordered input-md w-full"
        />
      </div>
      <div class="px-5 mx-4 border rounded-3xl mt-4 py-3">
        <h1>ລວມລາຄາທັງໝົດ</h1>
        <div>
          <p></p>
        </div>
      </div>

      <div class="px-5 mx-4 border rounded-3xl mt-4 py-3">
        <h1>ການຊຳລະ</h1>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">ຊຳລະຜ່ານເຄົ້າເຕີ</span>
            <input
              type="radio"
              name="radio-6"
              v-model="reqBook.pay_type"
              class="radio checked:bg-blue-500"
              value="2"
            />
          </label>
        </div>
      </div>
      <div class="px-5 mt-5">
        <!-- <button class="btn btn-primary w-full rounded-3xl">ອອກຈາກລະບົບ</button> -->
        <button class="btn btn-primary btn-md w-full rounded-3xl mb-5" @click="Booking">
          ສັ່ງຈອງ
        </button>
      </div>
      <div class="h-30"></div>
    </div>
  </div>
</template>