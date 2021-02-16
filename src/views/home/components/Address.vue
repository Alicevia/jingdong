<template>
  <div class="address">
    <span class="icon position iconfont">&#xe64e;</span>
    北京理工大学国防科技园2号楼10层
    <span class="icon notice iconfont">&#xe759;</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixin.scss';
.address {
  @include ellipsis;
  display: flex;
  font-size: 16px;
  color: $content-fontcolor;
  align-items: center;
  height: 44px;
  .icon {
    font-size: 18px;
    &.notice {
      margin-left: auto;
    }
    &.position {
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>
