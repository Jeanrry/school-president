<template>
  <div class="ugly-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ugly-container'
}
</script>

<style scoped>
  @media (max-width: 3000px){
    /*>1199的设备 */
    .ugly-container {
      width: 1580px;
      margin: 0 auto;
    }
    .ugly-container-fluid {
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 1919px){
    /*<=1199的设备 */
    .ugly-container {
      width: 1180px;
      margin: 0 auto;
    }
    .ugly-container-fluid {
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 1199px){
    /*<=1199的设备 */
    .ugly-container {
      width: 980px;
      margin: 0 auto;
    }
    .ugly-container-fluid {
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 991px){
  /*<=991的设备*/
    .ugly-container {
      width: 740px;
      margin: 0 auto;
    }
    .ugly-container-fluid {
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 767px){
  /*<=767的设备*/
    .ugly-container {
      width: 100%;
      margin: 0;
    }
    .ugly-container-fluid {
      width: 100%;
      margin: 0;
    }
  }
</style>
