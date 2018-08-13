<template>
  <section :class="$style.place">
    <el-button type="primary">123</el-button>
  </section>
</template>

<script>
import { register, login, handleErr } from '@/api'
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
      try {
        let params = {
          email: '88888881@qq.com',
          password: '123456'
        }
        let agin = await login(params)
      } catch(err) {
        handleErr(err)
      }
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
