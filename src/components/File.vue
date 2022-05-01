<template>
  <div id="File">
    <span class="FileItem" v-for="(file, i) in files" :key="i">
      <span class="FileItem">{{ file.name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "file",
  data() {
    return {
      title: "file组件",
      files: [
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
      ],
    };
  },
};
</script>

<style scope>
#File div {
  border: 0px;
  margin: 0px;
  width: 100%;
}
.FileItem {
  margin: 0px;
}
</style>