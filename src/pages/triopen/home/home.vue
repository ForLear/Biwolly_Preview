<template>
  <section :class="$style.home" id="home">
    <canvas id="canvas" class="canvas"></canvas>
    <div :class="$style.place">
      <div :class="$style.content">
        <div style="width: 500px; height: 300px; color: #fff;margin: auto;">
          <span style="font-size: 60px;">看到这些星星没?</span><br />
          <span style="font-size: 50px;">biu~</span>
        </div>

        <div :class="$style.btn_group">
          <a class="btn draw-btn pointer">123</a>
          <a class="btn photo-btn pointer">123</a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import { starDraw } from '@/common/js/Stars'
  export default {
    name: 'home',

    components: {
    },

    props: {},

    data() {
      return {
      }
    },

    computed: {
    },

    mounted() {
      starDraw()
    },

    methods: {
    },

  }
</script>

<style lang="scss" module>
  @import '@/common/css/element.scss';
  .home {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    .place {
      height: 800px;
      padding-top: 42px;
      background: linear-gradient(-160deg, #0b152e, #58aec4);
      .content {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -40%);
        text-align: center;

        .btn_group {
          position: relative;
          color: #fff;
          font-size: 20px;
          text-align: center;
        }
      }
    }
  }
</style>

<style>
  .btn {
    display: inline-block;
    color: #fff;
    padding: 20px 70px;
    background-color: rgba(36,33,46,0.32);
    border: 1px solid rgba(255,255,255,0.4);
    transform-origin: center center 0px;
    transition: all 0.2s ease;
  }
  .draw-btn {
    transform: matrix3d(1, 0, 0, 0.001, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    margin-right: 128px;
  }
  .photo-btn {
    transform: matrix3d(1, 0, 0, -0.001, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  .pointer {
    cursor: pointer;
  }

  .btn:hover {
    transform: none;
    background-color: rgba(255,255,255,0.2);
  }
  .canvas {
    position: fixed;
    z-index: 0;
  }
</style>