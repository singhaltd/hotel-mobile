
<script setup>
import { ref } from "vue";
import { setAccessToken } from "~~/auth";
definePageMeta({
  layout: "auth",
});
const config = useRuntimeConfig().public;
const user = ref({ username: "", password: "" });
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "ກາລຸນາປ້ອນຂໍ້ມູນ";
};
const AlertToast = ref({ error: false, message: "", type: "" });
const LoginPage = async () => {
  await $fetch(`${config.BASE_URL}/api/v1/login`, {
    method: "POST",
    body: user.value,
  })
    .then((res) => {
      setAccessToken(res.token);
      navigateTo("/profile");
    })
    .catch((error) => {
      AlertToast.value.error = true;
      AlertToast.value.message = "ຊື່ຜູ້ໃຊ້ ແລະ ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ";
      AlertToast.value.type = "error";
    });
};
const CloseAlertToast = () => {
  AlertToast.value.error = false;
  AlertToast.value.message = "";
  AlertToast.value.type = "";
};
</script>

<template>
  <div class="h-screen w-full">
    <div class="bg-gray-800 h-screen mx-auto w-full">
      <div class="p-12">
        <p class="text-5xl pt-10 text-yellow-500 font-bold">
          LAO PEOT <br />
          Hotel
        </p>
      </div>
      <VForm @submit="LoginPage">
        <div class="mx-5 p-3 rounded-xl shadow-sm bg-gray-900">
          <div class="p-3 mx-6 border-b border-gray-500">
            <VField
              name="username"
              :rules="isRequired"
              v-model="user.username"
              placeholder="ຊື່ຜຸ້ໃຊ້, ເບີໂທ ແລະ ອີເມວ໌"
              type="text"
              class="
                bg-transparent
                text-blue-500
                w-full
                focus:outline-none focus:rang
              "
            />
            <label class="label">
              <VErrorMessage
                name="username"
                class="label-text-alt text-[red]"
              />
            </label>
          </div>

          <div class="p-3 mx-6 flex border-b border-gray-500 mt-5">
            <VField
              name="password"
              :rules="isRequired"
              v-model="user.password"
              placeholder="ລະຫັດຜ່ານ"
              type="password"
              class="
                bg-transparent
                text-blue-500
                focus:outline-none focus:rang
                w-full
              "
            />
          </div>
          <label class="label pl-10">
            <VErrorMessage name="password" class="label-text-alt text-[red]" />
          </label>
        </div>

        <div class="w-full py-10 px-5">
          <button
            type="submit"
            class="bg-blue-500 p-3 rounded-3xl w-full h-full hover:bg-blue-600"
          >
            ເຂົ້າສູ່ລະບົບ
          </button>
          <p class="mx-auto text-center mt-3 text-gray-400">
            ຍັງບໍ່ເຄີຍມີບັນຊີ?
            <NuxtLink to="register" class="text-md font-semibold"
              >ສະມັກສະມາຊິກ</NuxtLink
            >
          </p>
        </div>
      </VForm>
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