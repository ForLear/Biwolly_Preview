<template>
  <div class="double_fish">
    <span :class="$style.top_name">一看就很贫穷的鱼鱼专用页面</span>
  </div>
</template>

<script>
  export default {
    name: 'double_fish',

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
  .top_name {
    flex: 1;
    justify-content:first baseline;
    font-size: 74px;
  }
</style>
