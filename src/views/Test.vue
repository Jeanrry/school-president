<template>
  <div class="test" v-wechat-title="this.title">
    <vertical-scrollbar style="height: 100%">
      <!--<button @click="togglebox">按钮</button>-->
      <!--<transition name="mybox">-->
        <!--<div class="box" v-show="boxshow">-->
          <!--<h1>hahaha</h1>-->
          <!--<h1>hahaha</h1>-->
          <!--<h1>hahaha</h1>-->
          <!--<h1>hahaha</h1>-->
        <!--</div>-->
      <!--</transition>-->
      <!--<div style="font-size: 30px">-->
        <!--<ugly-icon icon="icon-yundong"></ugly-icon>-->
        <!--<ugly-icon icon="icon-youtong"></ugly-icon>-->
        <!--<ugly-icon icon="icon-Txu"></ugly-icon>-->
        <!--<ugly-icon icon="icon-yanjing"></ugly-icon>-->
        <!--<ugly-icon icon="icon-yanjing2"></ugly-icon>-->
      <!--</div>-->
      <ugly-button>123</ugly-button>
      <ugly-button type="primary">123</ugly-button>
      <ugly-button type="success">123</ugly-button>
      <ugly-button type="info">123</ugly-button>
      <ugly-button type="warning">123</ugly-button>
      <ugly-button type="danger">123</ugly-button>

      <ugly-button plain>123</ugly-button>
      <ugly-button type="primary" plain>123</ugly-button>
      <ugly-button type="success" plain>123</ugly-button>
      <ugly-button type="info" size="bing" plain>123</ugly-button>
      <ugly-button type="warning" plain>123</ugly-button>
      <ugly-button type="danger" plain>123</ugly-button>

      <ugly-button round>123</ugly-button>
      <ugly-button type="primary" round>123456789</ugly-button>
      <ugly-button type="success" round>123</ugly-button>
      <ugly-button type="info" round>123</ugly-button>
      <ugly-button type="warning" round>123</ugly-button>
      <ugly-button type="danger" round disabled>123</ugly-button>

      <ugly-button round text>123</ugly-button>
      <ugly-button type="primary" round text>123</ugly-button>
      <ugly-button type="success" round text>123</ugly-button>
      <ugly-button type="info" round text>123</ugly-button>
      <ugly-button type="warning" round text>123</ugly-button>
      <ugly-button type="danger" round text>123</ugly-button>
      <ugly-button type="danger" round disabled text>123</ugly-button>

      <ugly-button icon="icon-fanhui">blabla</ugly-button>
      <ugly-button size="yi">blabla</ugly-button>
      <ugly-button size="bing">blabla</ugly-button>
      <ugly-button size="ding">blabla</ugly-button>

      <ugly-button card plain>123</ugly-button>
      <ugly-button type="primary" card>123</ugly-button>
      <ugly-button type="success" card plain>123</ugly-button>
      <ugly-button type="info" size="bing" card plain>123</ugly-button>
      <ugly-button type="warning" card plain>123</ugly-button>
      <ugly-button type="danger" card plain>123</ugly-button>

      <!--<ugly-container class="ugly-container-fluid">-->
        <!--<ugly-row :gutter="30">-->
          <!--<ugly-column class="col-10" style="background-color: #409eff">-->
            <!--<div style="width: 100%; height: 100px; background-color: red"></div>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5 hidden-md" style="height: 300px; background-color: #666666">-->
            <!--<label>-->
              <!--<input style="height: 40px; width: 100%; border: 0; padding-left: 10px; box-sizing:border-box;"/>-->
            <!--</label>-->
            <!--<div style="width: 100%; height: 50px;background-color: #222a3a"></div>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5" style="height: 300px; background-color: #456">-->
            <!--<label>-->
              <!--<input style="height: 40px; width: 100%"/>-->
            <!--</label>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-10" style="background-color: #409eff">-->
            <!--<div style="width: 100%; height: 100px; background-color: red"></div>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5 hidden-md" style="height: 300px; background-color: #666666">-->
            <!--<label>-->
              <!--<input style="height: 40px; width: 100%; border: 0; padding-left: 10px; box-sizing:border-box;"/>-->
            <!--</label>-->
            <!--<div style="width: 100%; height: 50px;background-color: #222a3a"></div>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5" style="height: 300px; background-color: #456">-->
            <!--<label>-->
              <!--<input style="height: 40px; width: 100%"/>-->
            <!--</label>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-10" style="background-color: #409eff">-->
            <!--<div style="width: 100%; height: 100px; background-color: red"></div>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5 hidden-md" style="height: 300px; background-color: #666666">-->
            <!--<label>-->
              <!--<input style="height: 40px; width: 100%; border: 0; padding-left: 10px; box-sizing:border-box;"/>-->
            <!--</label>-->
            <!--<div style="width: 100%; height: 50px;background-color: #222a3a"></div>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5" style="height: 300px; background-color: #456">-->
            <!--<label>-->
              <!--<input style="height: 40px; width: 100%"/>-->
            <!--</label>-->
          <!--</ugly-column>-->
          <!--<ugly-column class="col-5" style="height: 300px; background-color: #567"></ugly-column>-->
          <!--<ugly-column class="col-10 col-xl-5 col-lg-10 col-sm-20"-->
                       <!--style="height: 300px; background-color: #678"></ugly-column>-->
        <!--</ugly-row>-->
      <!--</ugly-container>-->

      {{ inputData }}
      <ugly-input
          style="margin-top: 100px"
          placeholder="未禁用"
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="未禁用"
          card
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          disabled placeholder="禁用"
          icon="icon-rili"
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          icon="icon-rili"
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          leftIcon="icon-yundong"
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          clearable
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          clearable
          card
          v-model="inputData">
      </ugly-input>

      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          clearable
          size="jia"
          card
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          clearable
          size="yi"
          card
          v-model="inputData">
      </ugly-input>
      <ugly-input
          style="margin-top: 100px"
          placeholder="禁用"
          clearable
          size="bing"
          card
          v-model="inputData">
      </ugly-input>

      <ugly-auto-complete
          style="margin-top: 100px; width: 100px"
          placeholder="禁用"
          clearable
          size="ding"
          :fetch-suggestions="querySearchAsync"
          v-model="inputData">
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
      </ugly-auto-complete>

      <div></div>
      <ugly-input
          style="margin-top: 100px; width: 100%"
          placeholder="未禁用"
          card
          v-model="inputData">
      </ugly-input>
    </vertical-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      title: '测试',
      show: true,
      fClass: '',
      boxshow: false,
      inputData: '123',
      suggestionList: [
        {
          title: 1,
          value: '111'
        },
        {
          title: 2,
          value: '222'
        },
        {
          title: 3,
          value: '333'
        },
        {
          title: 4,
          value: '444'
        },
        {
          title: 5,
          value: '555'
        },
        {
          title: 6,
          value: '666'
        },
        {
          title: 7,
          value: '777'
        }
      ]
    }
  },
  methods: {
    fade () {
      this.fClass = 'animated fadeInUp'
    },
    togglebox () {
      this.boxshow = !this.boxshow
    },
    querySearchAsync (queryString, cb) {
      cb(this.suggestionList)
    }
  }
}
</script>

<style scoped>
  .test {
    height: 100%;
  }
  .box {
    max-height: 500px;
    overflow: hidden;
  }

  .mybox-leave-active {
    /*transition:  all .2s ease;*/
  }

  .mybox-enter-active {
    transition: all 1s ease;
  }

  .mybox-leave-active, .mybox-enter {
    max-height: 0 !important;
  }

  .mybox-leave, .mybox-enter-active {
    max-height: 500px;
  }
</style>
