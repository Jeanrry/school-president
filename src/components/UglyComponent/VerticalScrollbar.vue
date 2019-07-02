<template>
  <div class="ugly-vertical-scrollbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ugly-vertical-scrollbar'
}
</script>

<style scoped>
.ugly-vertical-scrollbar {
  overflow: auto;
  height: 100%;
}

.ugly-vertical-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.ugly-vertical-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
  /*background-color: blue;*/
  border-radius: 3px;
}

.ugly-vertical-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
}
.ugly-vertical-scrollbar:hover::-webkit-scrollbar-thumb:hover {
  background-color: #8c8c8c;
}
</style>
