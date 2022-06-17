<script setup>
import { ref } from "vue";
const user = ref({ username: "", password: "",fname:"",lname:"",mobile:"",email:"",cpassword:"" });
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "ກາລຸນາປ້ອນຂໍ້ມູນ";
};
const alertMessage = ref({error:'',isactive:false})
const router = useRouter();
const fdisable = ref(true);
const RegisterPage= async ()=> {
  await $fetch("http://127.0.0.1:4444/api/v1/register", {
    method: "POST",
    body: user.value,
  }).then((res) => {
    console.log(res.error)
    alertMessage.value.error = res.error
    alertMessage.value.isactive = true
  });
}
</script>

<template>
  <div>
    <div class="h-56 w-full rounded-b-3xl">
      <div class="w-full flex bg-white px-3 py-3 justify-between sticky top-0">
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
        <label>ສະມັກສະມາຊິກ {{alertMessage.error}}</label>
      </div>
      
      <dialog-mess  :data="alertMessage"/>
      <VForm @submit="RegisterPage">
        <div class="px-5 bg-white pt-5">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຊື່ແທ້</span>
            </label>
            <VField
              name="fname"
              :rules="isRequired"
              v-model="user.fname"
              type="text"
              class="input input-md input-border border border-gray-300"
            />
            <label class="label">
              <VErrorMessage name="fname" class="label-text-alt text-[red]" />
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ນາມສະກຸນ</span>
            </label>
            <VField
              name="lname"
              :rules="isRequired"
              v-model="user.lname"
              type="text"
              class="input input-md input-border border border-gray-300"
            />
            <label class="label">
              <VErrorMessage name="lname" class="label-text-alt text-[red]" />
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ເບີໂທ</span>
            </label>
            <VField
              name="mobile"
              :rules="isRequired"
              v-model="user.mobile"
              type="text"
              class="input input-md input-border border border-gray-300"
            />
            <label class="label">
              <VErrorMessage name="mobile" class="label-text-alt text-[red]" />
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ອີເມວ໌</span>
            </label>
            <VField
              name="email"
              :rules="isRequired"
              v-model="user.email"
              type="text"
              class="input input-md input-border border border-gray-300"
            />
            <label class="label">
              <VErrorMessage name="email" class="label-text-alt text-[red]" />
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ລະຫັດຜ່ານ</span>
            </label>
            <VField
              name="password"
              :rules="isRequired"
              v-model="user.password"
              type="text"
              class="input input-md input-border border border-gray-300"
            />
            <label class="label">
              <VErrorMessage
                name="password"
                class="label-text-alt text-[red]"
              />
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">ຢຶນຢັນລະຫັດຜ່ານ</span>
            </label>
            <VField
              name="cpassword"
              :rules="isRequired"
              v-model="user.cpassword"
              type="text"
              class="input input-md input-border border border-gray-300"
            />
            <label class="label">
              <VErrorMessage
                name="cpassword"
                class="label-text-alt text-[red]"
              />
            </label>
          </div>
        </div>
        <div class="px-5 mt-5">
          <!-- <button class="btn btn-primary w-full rounded-3xl">ອອກຈາກລະບົບ</button> -->
          <button class="btn btn-primary btn-md w-full rounded-3xl">
            ສະມັກສະມາຊິກ
          </button>
        </div>
      </VForm>
      <div class="h-[60px]"></div>
    </div>
  </div>
</template>