<template>
  <section :class="$style.ingress">
    <div>
      <lottie :options="anim" :height="500" :width="500" />
      <div :class="$style.cont"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ingress',
  data() {
    return {
      anim: {},
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
  .ingress {
    height: 100%;
    background-color: #FFF;
    .cont {
      width: 100px;
      height: 100px;
      background-color: red;
      margin: 0 auto;
    }
  }
</style>
