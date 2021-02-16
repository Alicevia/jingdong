<template>
  <div class="order wrap-plr18">
    <OrderHeader />
    <div class="divider"></div>
  </div>
</template>

<script>
import OrderHeader from './components/OrderHeader'
export default {
  components: { OrderHeader },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.order {
  height: 100%;
  background-color: $dark-bgColor;

}
</style>
