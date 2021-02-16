<template>
  <div class="home wrap-plr18">
    <Address />
    <Search />
    <Banner />
    <Category />
    <div class="divider"></div>
    <near-by />
  </div>
</template>

<script>
import Address from './components/Address'
import Search from './components/Search'
import Banner from './components/Banner'
import Category from './components/Category'
import NearBy from './components/NearBy.vue'
export default {
  components: { Address, Search, Banner, Category, NearBy },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.home {
}
</style>
