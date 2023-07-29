<!--
  @Author: yangshilin
  @Date: 2023-07-02 15:43:17
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:38:36
  @FilePath: src\views\login\index.vue
  @Description: desc
 -->
<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="formRef"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              show-password
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              class="login-btn"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
//引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
//引入路由
import { useRouter } from "vue-router";
import { ElNotification, FormInstance, FormRules } from "element-plus";
//引入获取时间
import { getTime } from "@/utils/time";
//获取路由
let $router = useRouter();
//创建用户仓库
let userStore = useUserStore();
//获取表单ref实例
const formRef = ref<FormInstance>();

interface RuleForm {
  username: string;
  password: string;
}
//收集账号和密码的数据
const loginForm = reactive<RuleForm>({
  username: "",
  password: "",
});
//定义表单校验需要配置对象
const rules = reactive<FormRules<RuleForm>>({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 15,
      message: "密码长度至少6位",
      trigger: "change",
    },
  ],
});
//定义变量控制按钮加载效果
let loading = ref(false);
//登录按钮回调
const login = async () => {
  //保证全部的表单校验通过再发请求
  await formRef.value?.validate();
  //开始加载效果
  loading.value = true;
  try {
    await userStore.userLogin(loginForm);
    //使用编程式导航跳转到首页
    $router.push("/");
    ElNotification({
      type: "success",
      message: "登录成功",
      title: `HI,${getTime()}好`,
    });
  } catch (e) {
    //弹出对应的错误消息提示
    ElNotification({
      type: "error",
      message: (e as Error).message,
    });
  }
  //关闭加载效果
  loading.value = false;
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat center/100% 100%;
  .login-form {
    position: relative;
    color: white;
    top: 36vh;
    width: 65%;
    left: 14vh;
    padding: 40px;
    background: url("@/assets/images/login_form.png") no-repeat center/100% 100%;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
