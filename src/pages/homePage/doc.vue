<template>
  <section :class="$style.place">
    123
  </section>
</template>

<script>
export default {
  name: 'doc',

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
  @import '@/common/css/element.scss';
  .place {
    width: 100%;
    height: 300px;
    padding-top: 42px;
    background: linear-gradient(#68e9b5, #ecf2f3);
  }
</style>
