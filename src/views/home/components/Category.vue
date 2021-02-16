<template>
  <van-grid column-num="5" :border='false' class="category" :gutter="0" style="padding: 0">
    <van-grid-item
      class="item"
      v-for="item in iconsList"
      :key="item.imgName"
      :icon="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      :text="item.desc"
    />
  </van-grid>
</template>

<script>
export default {
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin-top: 16px;
  .item {
    margin-bottom: 16px;
     ::v-deep .van-grid-item__content.van-grid-item__content--center{
       padding: 0;
    }
  }
}
</style>
