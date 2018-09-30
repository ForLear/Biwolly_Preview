<template>
  <el-button>{{name}}</el-button>
</template>

<script>
export default {
  name: 'component_name',

  props: {
    name: {
      type: String,
      default: '没有名字',
    }
  },

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
</style>
