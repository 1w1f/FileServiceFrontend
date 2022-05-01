<template>
  <!-- <div id="MainPage"> -->
  <!-- <div id="Navi"> -->
  <div class="main">
    <el-container>
      <!-- <div style="height=100%"> -->
      <el-aside width="250px">
        <el-col>
          <el-menu default-active="1" class="menutest">
            <el-menu-item>
              <router-link to="/MainPage/File" tag="span">我的文件</router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link to="/MainPage/Setting" tag="span">设置</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <!-- </div> -->
      <!-- </div> -->
      <router-view class="content" :key="$route.fullpath" />
      <!-- </div> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {};
  },
};
</script>

<style lang="css" scope>
.main {
  height: 100%;
}

.main .el-container {
  height: 100%;
}

.el-menu-item {
  height: 55px;
  border-color: red;
  border:2px;
  border-radius: 15;
}
</style>