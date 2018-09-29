<template>
  <section :class="$style.center">
    <!-- Navbar -->
    <article>
      <h1>傻逼网友展示</h1>
      <div :class="$style.one"></div>
      <div :class="$style.two"></div>
      <div :class="$style.three"></div>
      <div :class="$style.fuor"></div>
      <div :class="$style.five"></div>
      <div :class="$style.bigBro"></div>
    </article>

    
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
  margin: 56px 0 0 0;
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
  .five {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/common/triopen/网友5.png) no-repeat;
  }
}
</style>
