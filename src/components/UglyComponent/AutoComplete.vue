<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="ugly-auto-complete">
    <input
        class="ugly-auto-complete__input"
        :class="uglyAutoCompleteClass"
        type="text"
        :placeholder="placeholder"
        :value="value"
        ref="input"
        :disabled="disabled"
        @focus="inputFocused"
        @blur="inputBlured"
        @input="$emit('valueChanged', $event.target.value)"/>
    <div
        v-if="inputFocus"
        class="ugly-autocomplete-suggestion"
        @mouseover="dropdownMouseover"
        @mouseout="dropdownMouseout"
        @click="dropdownClick">

      <ugly-vertical-scrollbar class="ugly-autocomplete-suggestion__scrollbar">
        <ul>
          <!--<template v-slot:header></template>-->
          <li v-for="item in suggestionList" :key="item.value" @click="listClick(item)" class="ugly-autocomplete-suggestion__dropdown-list">{{ item.title }}
          </li>
        </ul>
      </ugly-vertical-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ugly-auto-complete',
  model: {
    prop: 'value',
    event: 'valueChanged'
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    card: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'jia'
    },
    fetchSuggestions: {
      type: Function,
      default: function () {
        console.log('默认函数')
      }
    }
  },
  data () {
    return {
      inputFocus: false,
      dropdownMouseOver: false,
      suggestionList: []
    }
  },
  computed: {
    uglyAutoCompleteClass () {
      return {
        'ugly-auto-complete--jia': this.size === 'jia',
        'ugly-auto-complete--yi': this.size === 'yi',
        'ugly-auto-complete--bing': this.size === 'bing',
        'ugly-auto-complete--ding': this.size === 'ding',

        'ugly-auto-complete__input--card': this.card,
        'ugly-auto-complete__input--clearable': this.clearable && this.value !== ''
      }
    }
  },
  methods: {
    clearBtnOnclick () {
      this.$emit('valueChanged', '')
      this.$refs.input.focus()
    },
    inputFocused () {
      this.inputFocus = true
      let a = []
      this.fetchSuggestions(this.value, function (value) {
        a = value
      })
      this.suggestionList = a
    },
    inputBlured () {
      if (!this.dropdownMouseOver) {
        this.inputFocus = false
      }
    },
    dropdownMouseover () {
      this.dropdownMouseOver = true
    },
    dropdownMouseout () {
      this.dropdownMouseOver = false
    },
    dropdownClick () {
    },
    listClick (value, mark) {
      if (!mark) {
        mark = 'value'
      }
      this.$emit('valueChanged', value[mark])
      this.inputFocus = false
    }
  }
}
</script>

<style scoped>
  .ugly-auto-complete {
    position: relative;
    display: inline-block;
    width: 200px;
  }

  .ugly-auto-complete + .ugly-auto-complete {
    margin-left: 10px;
  }

  .ugly-auto-complete__input {
    height: 40px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    border: 1px solid #A8A8A8;
    border-radius: 4px;
    outline: medium;
  }

  .ugly-auto-complete__input:focus {
    border: 1px solid #177cb0;
  }

  .ugly-auto-complete__input:disabled {
    cursor: not-allowed;
    background-color: #E8F2F7;
    border: 1px solid #A8A8A8;
    color: #A8A8A8;
  }

  .ugly-auto-complete__input--card {
    border-radius: 0;
  }

  .ugly-auto-complete__input--clearable {
    padding-right: 30px;
  }

  .ugly-auto-complete__clear-btn {
    position: absolute;
    right: 5px;
    line-height: 40px;
    color: #A8A8A8;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline:none;
  }
  .ugly-auto-complete__clear-btn:hover {
    color: #000000;
  }

  .ugly-autocomplete-suggestion {
    position: absolute;
    top: 50px;
    background-color: #fff;
    height: 220px;
    border: 1px solid #e4e7ed;
    width: 100%;
    z-index: 100;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .ugly-autocomplete-suggestion__scrollbar {
    height: 100%;
    width: 100%;
  }

  .ugly-auto-complete--jia {
    font-size: 14px;
    height: 40px;
  }
  .ugly-auto-complete--jia+.ugly-auto-complete__clear-btn {
    line-height: 40px;
  }
  .ugly-auto-complete--jia+.ugly-autocomplete-suggestion {
    top: 50px;
  }

  .ugly-auto-complete--yi {
    font-size: 14px;
    height: 36px;
  }
  .ugly-auto-complete--yi+.ugly-auto-complete__clear-btn {
    line-height: 36px;
  }
  .ugly-auto-complete--yi+.ugly-autocomplete-suggestion {
    top: 44px;
  }

  .ugly-auto-complete--bing {
    font-size: 13px;
    height: 32px;
  }
  .ugly-auto-complete--bing+.ugly-auto-complete__clear-btn {
    line-height: 32px;
  }
  .ugly-auto-complete--bing+.ugly-autocomplete-suggestion {
    top: 40px;
  }

  .ugly-auto-complete--ding {
    font-size: 12px;
    height: 28px;
  }
  .ugly-auto-complete--ding+.ugly-auto-complete__clear-btn {
    line-height: 28px;
  }
  .ugly-auto-complete--ding+.ugly-autocomplete-suggestion {
    top: 36px;
  }

  .ugly-auto-complete__input--card. .ugly-autocomplete-suggestion {
    border-radius: 0;
  }

  .ugly-autocomplete-suggestion__dropdown-list {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
</style>
