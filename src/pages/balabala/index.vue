<template>
  <div class="balabala">
  </div>
</template>

<script>
let obj = {
  a: 1,
  b: 2,
  c: 998,
}
Object.defineProperty(obj, 'c', {
  set(n) {
    console.log(`赋值时触发,给c赋了个${n}`)
  },
  get() {
    return
  }
})
obj.c = 3
console.log(obj.c)
export default {
  name: 'balabala',

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
</style>
