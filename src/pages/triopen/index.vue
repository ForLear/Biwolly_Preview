<template>
  <section :class="$style.index">
    <div :class="$style.banner">123</div>
  </section>
</template>

<script>
export default {
  name: 'index',

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
  @import '@/common/css/public.scss';  
  .index {
    .banner {
      width: 500px;
      height: 500px;
      background: #000;
      margin: 0 auto;

    }
  }
</style>
