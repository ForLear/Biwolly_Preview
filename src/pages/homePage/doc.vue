<template>
  <section :class="$style.place">
    <el-button type="primary">123</el-button>
  </section>
</template>

<script>
import { register } from '@/api'
export default {
  name: 'doc',

  props: {},

  data() {
    return {
    }
  },

  computed: {
  },

  mounted() {
    this.a()
  },

  methods: {
    async a() {
      let params = {
        name: '很皮的大兄弟',
        email: '88888881@qq.com',
        password: '123456'
      }
      let agin = await register(params)
      console.log(agin)
    }
  }
}
</script>

<style lang="scss" module>
  @import '@/common/css/element.scss';
  .place {
    width: 100%;
    height: 300px;
    padding-top: 42px;
    background: linear-gradient(#68e9b5, #ecf2f3);
  }
</style>
