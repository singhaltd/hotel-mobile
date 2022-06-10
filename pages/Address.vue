<script setup>
const router = useRouter();
</script>

<template>
  <div>
    <div class="w-full bg-blue-400 sticky-top top-0">
      <div class="w-full flex px-3 py-5">
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
        <label class="ml-4">ສະຖານທີ</label>
      </div>
    </div>
    <div class="px-5">
      <div class="bg-white p-5 rounded-t-3xl">
        <div>
          <img
            class="mx-auto"
            src="https://static.wixstatic.com/media/b63a3b_ebcc0237c57249be89746c101862de38~mv2.png/v1/crop/x_0,y_0,w_894,h_1848/fill/w_65,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LAO%20POET%20HOTEL%20Logo%20(BW)%20Isolated.png"
          />
          <h1>ສະຖານທີ</h1>
          <p class="text-md mt-4">
            ຫ່າງຈາກຫໍພິພິທະພັນແຫ່ງຊາດ, ວັດວາອາຮາມໃຫຍ່, ອານຸສາວະລີ Patuxay,
            ແມ່ນໍ້າຂອງ, ສວນສາທາລະນະ ແລະສະຖານທີ່ທ່ອງທ່ຽວອີກຫຼາຍແຫ່ງ:
            ໂຮງແຮມຖືກຈັດໃສ່ຢ່າງຄົບຖ້ວນເພື່ອຄວາມສະດວກຂອງທ່ານ.
            ສຳລັບຜູ້ທີ່ມັກກິນແບບຜະຈົນໄພ,
            ພວກເຮົາຍັງອ້ອມຮອບໄປດ້ວຍຮ້ານອາຫານທີ່ໜ້າຕື່ນຕາຕື່ນໃຈຫຼາກຫຼາຍ,
            ຮ້ານອາຫານແຄມທາງທີ່ຄຶກຄັກ ແລະ ຕະຫຼາດກາງຄືນວຽງຈັນທີ່ຕ້ອງເບິ່ງ,
            ສະເໜີໃຫ້ອາຫານແຊບໆຂອງອາຫານທ້ອງຖິ່ນ.
          </p>
        </div>
        <section class="mt-10">
          <p>ສິ່ງອໍານວຍຄວາມສະດວກ ແລະການບໍລິການ</p>
          <div class="flex justify-between mt-5">
            <div class="text-[10pt] pr-5">
              ບາເທິງຫຼັງຄາ ແລະຮ້ານອາຫານທີ່ມີທິວທັດເມືອງ<br />
              ສະລອຍນ້ຳເທິງຫຼັງຄາ
              <br />
              ຮ້ານອາຫານຢູ່ຊັ້ນສອງ
              <br />
              ສະຖານທີ່ປະຊຸມ
              <br />
              ການເກັບຮັກສາກະເປົາ
              <br />
              ບ່ອນຈອດລົດທີ່ປອດໄພ
              <br />
              Wi-Fi ຟຣີ
              <br />
              ນ້ຳດື່ມບັນຈຸຂວດຟຣີ
              <br />
              ເຫຼົ້າວິສກີລາວຟຣີ
            </div>
            <div class="text-[10pt]">
              ບໍລິການຊັກ ແລະຊັກແຫ້ງ<br />
              ບໍລິການໄປຮັບ ແລະສົ່ງສະໜາມບິນ ຟ<br />
              ຫ້ອງເຊື່ອມຕໍ່<br />
              ລົດຖີບ<br />
              ຮ້ານ<br />
              ຫ້ອງ​ບໍ​ລິ​ການ<br />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>