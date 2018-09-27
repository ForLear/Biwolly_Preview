<template>
  <section :class="$style.center">
    <h1>惊险刺激的华南分部</h1>
    <h3>傻逼网友展示</h3>
    <div :class="$style.bigBro"></div>
  </section>
</template>

<script>
export default {
  name: 'component_name',

  props: {},

  data() {
    return {
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  },

}
</script>

<style lang="scss" module>
.center {
  text-align: center;
  .bigBro {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/common/triopen/大兄弟.png) no-repeat;
  }
  .one {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/common/triopen/网友1.png) no-repeat;
  }
  .two {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/common/triopen/网友2.png) no-repeat;
  }
  .three {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/common/triopen/网友3.png) no-repeat;
  }
  .fuor {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/common/triopen/网友4.png) no-repeat;
  }
}
</style>
