<template>
  <header class="header wrap-bgback">
    <div class="left">
      <slot name="left">
        <span @click="$emit('left-click')" class="iconfont icon" v-html="left"></span>
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <span @click="$emit('right-click')">{{right}}</span>
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'middle'
    },
    right: {
      type: String,
      default: ''
    }
  },

  emits: ['left-click', 'right-click'],

  setup () {
    return {}
  }
}

</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.header {
  height: 44px;
  display: flex;
  font-size: 16px;
  color: $content-fontcolor;
  align-items: center;
  justify-content: space-between;
  background-color: $bgColor;
  .icon {
    color: #b6b6b6;
  }
  .center {
    flex: 1;
    text-align: center;
  }
  .left,
  .right {
    flex: 1;
  }
  .right{
    text-align: right;
  }
}
</style>
