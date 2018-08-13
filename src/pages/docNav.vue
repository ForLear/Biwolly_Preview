<template lang="html">
  <section :class="$style.bg_color">
    <Navbar/>
    <router-view/>
  </section>
</template>

<script>
import Navbar from '@/components/navbar/navbar'
export default {
  name: 'doc-nav',
  components: {
    Navbar,
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
}

</script>

<style lang='scss' module>
@import '@/common/css/element.scss';

.bg_color {
  background: #ecf2f3;
  width: 100%;
  height: 100%;
  font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
}
</style>