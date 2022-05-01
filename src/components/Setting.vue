<template>
  <div id="Setting">
    <h1 id="title">{{ title }}</h1>

    <el-form
      id="settingForm"
      ref="form"
      label-position="right"
      :rules="rules"
      :model="settingFormData"
      label-width="300px"
    >
      <el-form-item class="formItem" label="用户名" prop="username">
        <el-input
          v-model="settingFormData.username"
          class="item"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="密码">
        <el-input
          class="item"
          v-model="settingFormData.passWord"
          show-password
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item id="formBtn">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    var diyRules=(rule,value,callBack)=>{
      console.log(rule );      
      console.log(value);
      console.log(callBack);
    };


    return {
      title: "用户设置",
      settingFormData: {
        username: "",
        passWord: "",
      },
      rules: {
        username: [
          // {validator:diyRules},
          {required: true, message: "请输入", trigger: "blur" },
          {min: 3, max: 8, message: "长度在3-8个字符之间", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    onSubmit() {
      console.log(this.settingFormData);
    },
    cancel() {
      console.log(this.settingFormData);
    },
  },
};
</script>

<style scope>
#title {
  margin: 0px;
  text-align: center;
}
#Setting {
  background: rebeccapurple;
  width: 100%;
}

#settingForm {
  text-align: center;
  margin-top: 50px;
}

#formBtn {
  text-align: left;
  /* margin-left: 25%; */
}

.item {
  width: 60%;
}

.formItem {
  text-align: left;
}
</style>