<template>
  <section :class="$style.center">
    <div :class="$style.slider">
      <el-carousel trigger="click" height="300px" arrow="never">
        <el-carousel-item>
          <div :class="$style.one"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div :class="$style.two"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div :class="$style.three"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div :class="$style.fuor"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div :class="$style.five"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div :class="$style.bigBro"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'navbar',

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
  margin: 10px 0 0 0;
  text-align: center;
  .slider {
    width: 400px;
  }
  .bigBro {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/assets/triopen/bigBro.png) no-repeat;
  }
  .one {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/assets/triopen/inter1.png) no-repeat;
  }
  .two {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/assets/triopen/inter2.png) no-repeat;
  }
  .three {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/assets/triopen/inter3.png) no-repeat;
  }
  .fuor {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/assets/triopen/inter4.png) no-repeat;
  }
  .five {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    display: inline-block;
    background: url(@/assets/triopen/inter5.png) no-repeat;
  }
}
</style>