<template>
  <div
    class="flex flex-row items-center px-3 mt-8 rounded-xl"
    style="background-color: #d6efff"
  >
    <a-icon type="info-circle" />
    <ul class="ml-3 m-4">
      <li class="font-bold">Keterangan :</li>
      <li>- Bacalah petunjuk ini seluruhnya sebelum mulai mengisi.</li>
      <li>
        - Pertanyaanberikut berhubungan dengan masalah yang mungkin mengganggu
        anda selama 14 hari terakhir.
      </li>
      <li>
        - Apabila Anda menganggap pertanyaan itu anda alami dalam 14 hari
        terakhir, Pilihlah jawaban Ya pada dropdown.
      </li>
      <li>
        - Apabila Anda menganggap pertanyaan itu Tidak anda alami dalam 14 hari
        terakhir, Pilihlah jawaban Tidak pada dropdown.
      </li>
      <li>
        - Jika anda tidak yakin dengan jawabannya, berilah jawaban yang paling
        sesuai di antara Ya dan Tidak.
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";

export default {
  components: {
    "a-icon": Icon,
  },
};
</script>

<style></style>
