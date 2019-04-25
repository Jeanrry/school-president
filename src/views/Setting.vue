<template>
  <div class="setting" v-wechat-title="this.title">
    <el-scrollbar  style="height: 100%">
      <h1>设置</h1>
      <el-button type="primary">blabla</el-button>
      <el-button class="iconfont icon-tianjia" v-for="i in 500" :key="i">
        新增群组{{ i }}
      </el-button>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      title: '设置'
    }
  }
}
</script>

<style scoped>
.setting {
  height: 100%;
}
</style>
