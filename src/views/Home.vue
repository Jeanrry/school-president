<template>
  <div class="home" v-wechat-title="this.title">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      title: '首页'
    }
  }
}
</script>
