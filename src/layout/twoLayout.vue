<template>
  <section class="layout">
    <router-view />
  </section>
  <footer class="footer">
  <TabBar></TabBar>
  </footer>
</template>
<script>
import TabBar from '@/components/TabBar'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    TabBar
  },
  name: 'Layout2'
})
</script>
<style lang="scss" scoped>
.layout {
  flex: 1;
  overflow-y: scroll;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: green; */
}
.footer {
  height: 49px;
}

</style>
