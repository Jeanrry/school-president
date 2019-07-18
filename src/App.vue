<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header style="padding: 0">
        <el-menu
            mode="horizontal"
            @select="handleSelect"
            background-color="#9B90C2"
            text-color="#fff"
            active-text-color="#C6C0C8">
          <img style="float: left; width: 40px; height: 40px; margin: 10px 10px 10px 40px" src="@/assets/logo.png" class="app-logo-img" alt="logo"/>
          <el-menu-item index="0" style="margin-left: 20px">处理中心</el-menu-item>
          <el-menu-item index="1" style="float: right; margin-right: 20px">处理中心</el-menu-item>
          <el-submenu index="2" style="float: right">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" style="float: right"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <nav-menu :is-collapse-prop="isCollapse"></nav-menu>
        <el-main style="padding: 0;">
          <router-view/>
        </el-main>
        </el-container>
      </el-container>
    <!--</el-container>-->

  </div>
</template>

<script>
import navMenu from '@/components/NavMenu'
export default {
  components: { navMenu },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    // 点击展开收起
    toggleSideBar () {
      this.isCollapse = !this.isCollapse
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style src="@/assets/css/app.css"></style>
