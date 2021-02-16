<template>
  <ul class="tabbar">
    <router-link v-for="item in routeList"
    v-slot="{ isActive}"
     :key="item.icon" tag="li" :to="item.to" class="item" >
      <span class="icon iconfont" v-html="item.activeIcon" v-if="isActive"></span>
      <span class="icon iconfont" v-html="item.icon" v-else></span>
      <p class="title">{{item.text}}</p>
    </router-link>

  </ul>
</template>

<script>
export default {
  name: 'TabBar',
  setup () {
    const routeList = [
      { icon: '&#xe696;', activeIcon: '&#xe695;', text: '首页', to: { path: '/home' } },
      { icon: '&#xe70b;', activeIcon: '&#xe70c;', text: '购物车', to: { path: '/cart' } },
      { icon: '&#xe895;', activeIcon: '&#xe896;', text: '订单', to: { path: '/order' } },
      { icon: '&#xe8c8;', activeIcon: '&#xe8c9;', text: '我的', to: { path: '/profile' } }
    ]
    return { routeList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.tabbar {
  height: 49px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid $content-bgColor;
  box-sizing: border-box;
  .item {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: $content-fontcolor;
    .icon {
      display: inline-block;
      margin-top: 4px;
      font-size: 20px;
    }
    .title{
      font-size: 10px;
      margin-top: 2px;
    }
    &.active{
      color: $tab-bar-active;
    }
  }
}
</style>
