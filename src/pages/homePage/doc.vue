<template>
  <section :class="$style.content">
    <div :class="$style.place">
    </div>
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

  created() {
    // this.login()
    this.test()
  },

  methods: {
    /* 登录测试 */
    async login() {
      try {
        let params = {
          email: '88888881@qq.com',
          password: '123456'
        }
        let agin = await login(params)
      } catch(err) {
        handleErr(err)
      }
    },

    test() {
      console.log(require.ensure([], () => {
        console.log(12345)
      }))
    }
  },
}
</script>

<style lang="scss" module>
  @import '@/common/css/element.scss';
  .content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .place {
      height: 300px;
      padding-top: 42px;
      background: linear-gradient(#68e9b5, #ffffff);
    }
  }
</style>
