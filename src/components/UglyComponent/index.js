import container from './Container.vue'
import UInput from './UInput.vue'
import autoComplete from './AutoComplete.vue'
import verticalScrollbar from './VerticalScrollbar.vue'
// 这里是重点
const UglyComponent = {
  install: function (Vue) {
    Vue.component('container', container)
    Vue.component('UglyInput', UInput)
    Vue.component('UglyAutoComplete', autoComplete)
    Vue.component('VerticalScrollbar', verticalScrollbar)
  }
}

// 导出组件
export default UglyComponent
