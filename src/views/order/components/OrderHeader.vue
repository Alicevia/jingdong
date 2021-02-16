<template>
 <NavHeader title="我的订单" ></NavHeader>
</template>

<script>
import NavHeader from '@/components/NavHeader'
export default {
  components: { NavHeader },
  setup () {
    const rclick = () => {
      console.log('x')
    }
    return { rclick }
  }
}
</script>

<style lang="scss" scoped>

</style>
