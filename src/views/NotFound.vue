<template>
  <div class="not-found" v-wechat-title="this.title">
    <img class="not-found__img" src="../assets/notFound.png" height="500" width="500" alt="404"/>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      title: '404'
    }
  }
}
</script>

<style scoped>
  .not-found {
    width: 100px;
    height: 100px;
  }

  .not-found__img {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
