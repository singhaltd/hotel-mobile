
<script setup>
import { ref } from "vue";
const config = useRuntimeConfig().public;
import { TransitionRoot } from "@headlessui/vue";
const user = ref({ username: "", password: "" });
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "ກາລຸນາປ້ອນຂໍ້ມູນ";
};
const LoginPage = async () => {
  // loading = true;
  const auth = await $fetch(`${config.base_api}/signinApi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: user.value,
  });
  console.log(auth);
  return;
};
const isShowing = ref(false);
</script>

<template>
  <div class="h-screen w-full">
    <!-- <button @click="isShowing = true">SHO</button> -->
    <TransitionRoot
      appear
      :show="true"
      as="template"
      enter="transform transition duration-[400ms]"
      enter-from="opacity-0 rotate-[-120deg] scale-50"
      enter-to="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leave-from="opacity-100 rotate-0 scale-100 "
      leave-to="opacity-0 scale-95 "
    >
      <div class="bg-gray-800 h-screen mx-auto w-full">
        <div class="p-12">
          <p class="text-5xl pt-10 text-yellow-500 font-bold">
            Welcome <br />
            Back
          </p>
          <p class="text-xl py-3 text-gray-400 font-semibold">
            Sign in to continue
          </p>
        </div>
        <VForm @submit="LoginPage">
          <div class="mx-12 p-3 rounded-xl shadow-sm bg-gray-900">
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

            <div class="p-3 mx-6 flex border-b border-gray-500">
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

              <div class="w-auto text-yellow-500">eyes</div>
            </div>
            <label class="label pl-10">
              <VErrorMessage
                name="password"
                class="label-text-alt text-[red]"
              />
            </label>
          </div>
          <div class="mx-12 p-3 justify-between flex">
            <div class="flex">
              <div
                class="
                  relative
                  inline-block
                  w-12
                  mr-2
                  align-middle
                  select-none
                  transition
                  duration-200
                  ease-in
                "
              >
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  class="
                    toggle-checkbox
                    absolute
                    block
                    w-6
                    h-6
                    rounded-full
                    bg-gray-800
                    border-4
                    appearance-none
                    cursor-pointer
                  "
                />
                <label
                  for="toggle"
                  class="
                    toggle-label
                    block
                    overflow-hidden
                    h-6
                    rounded-full
                    bg-blue-500
                    cursor-pointer
                  "
                ></label>
              </div>
              <label for="toggle" class="text-xs text-gray-300 mt-1"
                >ຈື່ຂ້ອຍໄວ້.</label
              >
            </div>
          </div>

          <div class="w-full p-12">
            <button
              type="submit"
              class="
                bg-blue-500
                p-3
                rounded-3xl
                w-full
                h-full
                hover:bg-blue-600
              "
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
    </TransitionRoot>
  </div>
</template>