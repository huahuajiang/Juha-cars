<template>
  <div class="user-container">
    <Back column="修改登陆密码" />
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="原始密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <button type="button" class="button-vcode">获取验证码</button>
          <el-input v-model="form.name" placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black"
            >确认</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Password",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
<style lang="scss"></style>
