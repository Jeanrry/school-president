<template>
  <div class="encyclopedia" v-wechat-title="this.title">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="员工 " name="first" style="height: calc(100vh - 120px);">
        <ugly-vertical-scrollbar>
          <Employee class="markdown"></Employee>
        </ugly-vertical-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Employee from '../assets/encyclopediaMarkdown/Employee.md'
export default {
  name: 'Encyclopedia',
  data () {
    return {
      title: '游戏百科',
      activeName: 'first'
    }
  },
  components: {
    Employee
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.encyclopedia {
  height: 100%;
}
.markdown {
}
.markdown h1 {
  font-size: 2em;
}
</style>
