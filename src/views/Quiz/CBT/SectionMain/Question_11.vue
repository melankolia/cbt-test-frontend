<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base my-2">Step 19</p>
    <p class="font-airbnb-medium mt-2 mb-4">
      Sekarang kondisikan dirimu dengan pikiran baru yang positif
    </p>
    <p class="font-airbnb-medium mt-2 mb-4">Bagaimana perasaanmu sekarang?</p>
    <div class="flex flex-row space-x-8 my-10 align-center justify-center">
      <a-radio-group
        v-model="data.answer"
        default-value="Marah"
        button-style="solid"
      >
        <a-radio-button value="Marah" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Angry" width="124px" height="124px" alt="angry" />
            <p>Marah</p>
          </div>
        </a-radio-button>
        <a-radio-button value="Cemas" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Worried" width="124px" height="124px" alt="worried" />
            <p>Cemas</p>
          </div>
        </a-radio-button>
        <a-radio-button value="Bahagia" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Happy" width="124px" height="124px" alt="happy" />
            <p>Bahagia</p>
          </div>
        </a-radio-button>
        <a-radio-button value="Sedih" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Sad" width="124px" height="124px" alt="sad" />
            <p>Sedih</p>
          </div>
        </a-radio-button>
        <a-radio-button value="Malu" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Shy" width="124px" height="124px" alt="shy" />
            <p>Malu</p>
          </div>
        </a-radio-button>
        <a-radio-button value="Tenang" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Calm" width="124px" height="124px" alt="shy" />
            <p>Tenang</p>
          </div>
        </a-radio-button>
        <a-radio-button
          value="Percaya Diri"
          style="width: 124px; height: 124px"
        >
          <div class="flex-col align-center justify-center">
            <img :src="Confident" width="124px" height="124px" alt="shy" />
            <p>Percaya Diri</p>
          </div>
        </a-radio-button>
        <a-radio-button value="Sabar" style="width: 124px; height: 124px">
          <div class="flex-col align-center justify-center">
            <img :src="Patient" width="124px" height="124px" alt="shy" />
            <p>Sabar</p>
          </div>
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import { Radio } from "ant-design-vue";
import Angry from "../../../../assets/images/expressions/angry-48.png";
import Worried from "../../../../assets/images/expressions/worried-face-48.png";
import Happy from "../../../../assets/images/expressions/happy-48.png";
import Sad from "../../../../assets/images/expressions/sad-48.png";
import Shy from "../../../../assets/images/expressions/flushed-face-48.png";
import Calm from "../../../../assets/images/expressions/calm.png";
import Confident from "../../../../assets/images/expressions/confident.png";
import Patient from "../../../../assets/images/expressions/patient.png";

export default {
  components: {
    "a-radio-group": Radio.Group,
    "a-radio-button": Radio.Button,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  data() {
    return {
      Angry,
      Worried,
      Happy,
      Sad,
      Shy,
      Calm,
      Confident,
      Patient,
    };
  },
};
</script>

<style></style>
