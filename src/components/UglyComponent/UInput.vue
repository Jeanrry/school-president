<template>
  <div class="ugly-input">
    <input
        class="ugly-input__input"
        :class="uglyInputClass"
        type="text"
        :placeholder="placeholder"
        :value="value"
        ref="input"
        :disabled="disabled"
        @focus="inputFocused"
        @blur="inputBlurd"
        @input="$emit('valueChanged', $event.target.value)"/>
    <ugly-icon
        v-if="icon !== ''"
        :icon="icon"
        class="ugly-input__icon">
    </ugly-icon>
    <ugly-icon
        v-if="leftIcon !== ''"
        :icon="leftIcon"
        class="ugly-input__left-icon">
    </ugly-icon>
    <button
        v-if="clearable && value !== ''"
        class="ugly-input__clear-btn"
        @click="clearBtnOnclick">
      <ugly-icon icon="icon-guanbi"></ugly-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ugly-input',
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
    icon: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'jia'
    }
  },
  model: {
    prop: 'value',
    event: 'valueChanged'
  },
  computed: {
    uglyInputClass () {
      return {
        'ugly-input--jia': this.size === 'jia',
        'ugly-input--yi': this.size === 'yi',
        'ugly-input--bing': this.size === 'bing',
        'ugly-input--ding': this.size === 'ding',

        'ugly-input__input--card': this.card,
        'ugly-input__input--icon': this.icon !== '',
        'ugly-input__input--left-icon': this.leftIcon !== '',
        'ugly-input__input--clearable': this.clearable && this.value !== ''
      }
    }
  },
  methods: {
    clearBtnOnclick () {
      this.$emit('valueChanged', '')
      this.$refs.input.focus()
    },
    inputFocused () {
      this.$emit('uglyInputFocused', '')
    },
    inputBlurd () {
      this.$emit('uglyInputBlurd', '')
    }
  }
}
</script>

<style scoped>
.ugly-input {
  position: relative;
  display: inline-block;
  width: 200px;
}

.ugly-input + .ugly-input {
  margin-left: 10px;
}

.ugly-input__input {
  height: 40px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1px solid #A8A8A8;
  border-radius: 4px;
  outline: medium;
}

.ugly-input__input:focus {
  border: 1px solid #177cb0;
}

.ugly-input__input:disabled {
  cursor: not-allowed;
  background-color: #E8F2F7;
  border: 1px solid #A8A8A8;
  color: #A8A8A8;
}

.ugly-input__input--card {
  border-radius: 0;
}

.ugly-input__input--icon {
  padding-right: 35px;
}

.ugly-input__input--left-icon {
  padding-left: 35px;
}

.ugly-input__input--clearable {
  padding-right: 30px;
}

.ugly-input__icon {
  position: absolute;
  right: 5px;
  line-height: 40px;
  color: #A8A8A8;
  font-size: 18px;
}
.ugly-input__left-icon {
  position: absolute;
  left: 10px;
  line-height: 40px;
  color: #A8A8A8;
  font-size: 18px;
}
.ugly-input__clear-btn {
  position: absolute;
  right: 5px;
  line-height: 40px;
  color: #A8A8A8;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline:none;
}
.ugly-input__clear-btn:hover {
  color: #000000;
}

.ugly-input--jia {
  font-size: 14px;
  height: 40px;
}
.ugly-input--jia .ugly-input__icon, .ugly-input--jia .ugly-input__left-icon, .ugly-input--jia .ugly-input__clear-btn {
  line-height: 40px;
}

.ugly-input--yi {
  font-size: 14px;
  height: 36px;
}
.ugly-input--yi+.ugly-input__icon, .ugly-input--yi+.ugly-input__left-icon, .ugly-input--yi+.ugly-input__clear-btn {
  line-height: 36px;
}

.ugly-input--bing {
  font-size: 13px;
  height: 32px;
}
.ugly-input--bing+.ugly-input__icon, .ugly-input--bing+.ugly-input__left-icon, .ugly-input--bing+.ugly-input__clear-btn {
  line-height: 32px;
}

.ugly-input--ding {
  font-size: 12px;
  height: 28px;
}
.ugly-input--ding+.ugly-input__icon, .ugly-input--ding+.ugly-input__left-icon, .ugly-input--ding+.ugly-input__clear-btn {
  line-height: 28px;
}
</style>
