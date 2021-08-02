<template>
  <div class="user-container">
    <Back column="安全设置" />
    <ul class="group-links">
      <router-link to="/password" tag="a" class="arrow"> 我的账户 </router-link>
      <router-link to="/password" tag="a" class="arrow">
        修改登陆密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow"> 设置资金密码 </router-link>
      <router-link to="aa" tag="a" class="arrow"> 绑定手机号 </router-link>
      <router-link to="aa" tag="a" class="arrow"> 绑定银行卡 </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.logout {
  position: absolute;
  left: 50%;
  bottom: 60px;
  width: 165px;
  height: 58px;
  margin-left: -82px;
  background-color: #2d3339;
  border-radius: 100px;
  text-align: center;
  line-height: 58px;
  color: #fff;
  font-size: 15px;
  border: none;
  outline: none;
}
</style>
