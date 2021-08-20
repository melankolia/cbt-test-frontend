<template>
  <div class="flex flex-col justify-between min-h-screen">
    <svg
      height="100%"
      width="100%"
      id="svg"
      viewBox="0 0 1440 700"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <path
        d="M 0,700 C 0,700 0,233 0,233 C 96.42105263157893,275.82296650717706 192.84210526315786,318.64593301435406 276,317 C 359.15789473684214,315.35406698564594 429.0526315789474,269.2392344497608 541,253 C 652.9473684210526,236.76076555023923 806.9473684210526,250.3971291866029 910,257 C 1013.0526315789474,263.6028708133971 1065.157894736842,263.17224880382776 1145,258 C 1224.842105263158,252.82775119617227 1332.421052631579,242.91387559808612 1440,233 C 1440,233 1440,700 1440,700 Z"
        stroke="none"
        stroke-width="0"
        fill="#0693e388"
        class="transition-all duration-300 ease-in-out delay-150"
        transform="rotate(-180 720 350)"
      ></path>
      <path
        d="M 0,700 C 0,700 0,466 0,466 C 105.96172248803828,435.28229665071774 211.92344497607655,404.5645933014354 310,399 C 408.07655502392345,393.4354066985646 498.26794258373207,413.02392344497605 583,429 C 667.7320574162679,444.97607655502395 747.0047846889952,457.3397129186603 846,459 C 944.9952153110048,460.6602870813397 1063.712918660287,451.61722488038276 1166,451 C 1268.287081339713,450.38277511961724 1354.1435406698565,458.1913875598086 1440,466 C 1440,466 1440,700 1440,700 Z"
        stroke="none"
        stroke-width="0"
        fill="#0693e3ff"
        class="transition-all duration-300 ease-in-out delay-150"
        transform="rotate(-180 720 350)"
      ></path>
    </svg>
    <div>
      <p
        class="font-airbnb-bold text-3xl p-4 text-white w-1/2 mb-14"
        style="background-color: #1890ff"
      >
        Register
      </p>
      <a-card hoverable style="padding: 1rem 0">
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <a-form-model-item prop="name">
            <a-input v-model="form.name" size="large" placeholder="Full Name">
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item prop="username">
            <a-input
              v-model="form.username"
              size="large"
              placeholder="Username"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item prop="password">
            <a-input-password
              v-model="form.password"
              size="large"
              type="password"
              placeholder="Password"
              allow-clear
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-model-item>
          <a-form-model-item style="margin-bottom: 0">
            <a-button
              :loading="loading"
              class="mt-4"
              size="large"
              block
              type="primary"
              @click="handleRegister"
            >
              <span class="font-airbnb-medium tracking-wider">Register </span>
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </div>
  </div>
</template>

<script>
import { Card, FormModel, Input, Icon, Button } from "ant-design-vue";
import { MAIN_PAGE } from "@/router/name.types";
import AuthService from "@/services/resources/auth.service";

export default {
  components: {
    "a-card": Card,
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-input": Input,
    "a-input-password": Input.Password,
    "a-icon": Icon,
    "a-button": Button,
  },
  data() {
    return {
      form: {
        name: "",
        username: "",
        password: "",
      },
      rules: {
        name: {
          required: true,
          message: "Please input your fullname",
          trigger: "change",
        },
        username: {
          required: true,
          message: "Please input your username",
          trigger: "change",
        },
        password: {
          required: true,
          message: "Please input your password",
          trigger: "change",
        },
      },
      loading: false,
    };
  },
  methods: {
    handleRegister() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submitData();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitData() {
      this.loading = true;
      AuthService.register(this.form)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.$message.success("Register Successfull");
            this.$router.push({ name: MAIN_PAGE });
          } else {
            this.$message.error(
              result || "Register Failed, Please try again later !",
              2.5
            );
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error(
            err?.response?.data?.result ||
              "Register Failed, Please try again later !",
            2.5
          );
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
