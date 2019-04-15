<template>
  <div class="students-list" v-wechat-title="this.title">
    <h1>学生列表</h1>
  </div>
</template>

<script>
export default {
  name: 'Students',
  data () {
    return {
      title: '学生列表'
    }
  }
}
</script>

<style scoped>

</style>
