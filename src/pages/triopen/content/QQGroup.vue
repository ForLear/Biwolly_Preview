<template>
  <section :class="$style.QQGroup">
    <div :class="$style.triopen"></div>
  </section>
</template>

<script>
  export default {
    name: 'QQGroup',

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
  .QQGroup {
    height: 100%;
    background: #FFF;
    border-top: 1px solid #fb7299;
    border-bottom: 1px solid #fb7299;
    .triopen {
      width: 713px;
      height: 420px;
      margin: 0 auto;
      background: url(@/common/triopen/triopen.png) no-repeat;
    }
  }
</style>
