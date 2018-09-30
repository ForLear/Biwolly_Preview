<template>
  <section :class="$style.index">
    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <QQGroup />

  </section>
</template>

<script>
  import Navbar from './navbar/navbar'
  import QQGroup from './content/QQGroup'
  export default {
    name: 'component_name',

    components: {
      Navbar,
      QQGroup,
    },

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
  .index {
    padding: 56px 30px 0 30px;
  }
</style>