<template>
  <div class="near">
    <h3 class="article">附近店铺</h3>
    <van-card
      v-for="item in list"
      :key="item._id"
      class="card"
      :desc="`月售${item.sales} 起送${item.expressLimit} 基础运费${item.expressPrice}`"
    >
      <template #title>
        <h2 class="title">{{ item.name }}</h2>
      </template>
      <template #tags>
        <p class="discounts">{{ item.slogan }}</p>
      </template>

      <template #thumb>

        <img class="image" :src="item.imgUrl" alt="" />
      </template>
    </van-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { reqNearList } from '@/api/shop.js'
const useNearByList = () => {
  const list = ref([])
  const getList = async () => {
    const [err, data, res] = await reqNearList()
    console.log(data, res)
    if (!err) {
      list.value = data
    }
  }
  return { list, getList }
}
export default {
  setup () {
    const { list, getList } = useNearByList()
    getList()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.near {
  .article {
    margin: 16px 0;
    font-size: 18px;
    font-weight: 400;
  }
  .card {
    padding: 0;
    background-color: white;
    ::v-deep .van-card__thumb{
      width: 68px;
    }
    &:last-child{
      .discounts{
        border-bottom: none;
      }
    }
    .title {
      margin: 0;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .image{
      width: 56px;
      height: 56px;
    }
    .discounts {
      color: $hightlight-fontColor;
      margin: 0;
      margin-top: 8px;
      padding-bottom: 15px;
      border-bottom: 1px solid $content-bgColor;

    }
  }
}
</style>
