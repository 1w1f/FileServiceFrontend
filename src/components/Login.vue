<template>
  <div id="login">
    <div class="loginForm">
      <h1 class="title">请登录</h1>
      <el-input
        v-model="username"
        class="loginInput"
        placeholder="请输入用户名"
      ></el-input>
      <el-input
        class="loginInput"
        v-model="password"
        placeholder="请输入密码"
      ></el-input>
      <router-link to="/MainPage" id="LoginBtn" tag="el-button"
        >登录</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      password: "",
      username: "",
    };
  },
};
</script>

<style scope>
.loginInput {
  width: 40%;
  height: 15%;
  display: block;
  margin: 5px auto;
}

.title {
  margin: 0px;
  display: inline-block;
}

.el-input {
  margin: 5px, auto;
}

#LoginBtn {
  display: block;
  margin: 0px auto;
}
#login {
  margin: 0px;
  padding: 0px;
  background-color: beige;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginForm {
  width: 50%;
  height: 70%;
  text-align: center;
  background: blue;
  border:20px;
  border-radius: 15px;
}
</style>