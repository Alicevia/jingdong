<template>
  <van-search class="search" shape="round" placeholder="请输入搜索关键词" >
    <template #left-icon>
      <span class="iconfont icon">&#xe651;</span>
  </template>
  </van-search>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.search {
  padding: 0;
  margin-top: 8px;
  .icon {
    color: $search-fontColor;
  }
}

</style>
