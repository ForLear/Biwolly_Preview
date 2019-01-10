<template>
  <section :class="$style.content">
    <div :class="$style.place">
      <div :class="$style.a1">12345</div>
      <div :class="$style.a2">12345</div>
      <div :class="$style.a3">12345</div>
      <div :class="$style.a4">12345</div>
      <div :class="$style.a5">12345</div>
      <div :class="$style.a6">12345</div>
    </div>
  </section>
</template>

<script lang="ts">
import { register, login, handleErr } from '@/api'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'doc',
  data() {
    return {
    }
  },

  computed: {
  },

  created() {
    this.login()
  },

  mounted() {
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
      text-align: center;
      background: linear-gradient(#68e9b5, #ffffff);
    }
  }

  @keyframes myfirst
  {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @-moz-keyframes myfirst /* Firefox */
  {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @-webkit-keyframes myfirst /* Safari 和 Chrome */
  {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @-o-keyframes myfirst /* Opera */
  {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  div.a1
  {
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
  }
  div.a2
  {
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
  }
  div.a3
  {
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
    animation-delay: 6s;
    -webkit-animation-delay: 6s;
  }
  div.a4
  {
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
    animation-delay: 6s;
    -webkit-animation-delay: 6s;
  }
  div.a5
  {
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
    animation-delay: 12s;
    -webkit-animation-delay: 12s;
  }
  div.a6
  {
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
    animation-delay: 12s;
    -webkit-animation-delay: 12s;
  }

  .a1, .a2, .a3, .a4, .a5, .a6 {
    opacity: 0;
    font-size: 30px;
  }
</style>
