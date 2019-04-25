<template>
  <div class="achievement-list" v-wechat-title="this.title">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <h1 style="color: red">一致性 Consistency</h1>
           <i class="header-icon el-icon-info"></i>
          <h4 style="margin: 0 8px 0 auto;">2018-12-32</h4>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>

    <!--<el-collapse accordion>-->
    <!--</el-collapse>-->

    <!--<el-collapse-item title="可控 Controllability">-->
      <!--<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
      <!--<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->
    <!--</el-collapse-item>-->

    <!--<collapse v-show="collapseShow"></collapse>-->
    <collapse-item title="测试 title" >
      <div>第一条测试info</div>
      <div>第二条测试info</div>
    </collapse-item>
  </div>
</template>

<script>
// import Collapse from '../components/collapse/Collapse'
export default {
  name: 'AchievementList',
  // components: {
  //   Collapse
  // },
  data () {
    return {
      title: '成就',
      achievementData: [],
      collapseShow: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.achievementData = [
        {

        }
      ]
    }
  }
}
</script>

<style scoped>
.achievement-list {
  padding: 20px 20px 40px 20px;
}
</style>
