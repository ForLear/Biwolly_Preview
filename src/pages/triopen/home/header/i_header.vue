<template>
  <section>
    <header :class="$style.header">
      <div :class="$style.list">
        <Left />
      </div>
    </header>
    <router-view />
  </section>
</template>

<script>
import Left from './left'
export default {
  name: 'i_header',

  components: {
    Left,
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
@import '@/common/style/element.scss';
.header {
  background-color: rgba(36,33,46,0.48) !important;
  box-shadow: none !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  min-width: 1200px;
  /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
  z-index: 5;
  font-size: 14px;
  font-family: "Microsoft YaHei", "Microsoft Sans Serif", "Microsoft SanSerf", "\5FAE\8F6F\96C5\9ED1";
  .list {
    @include list(row);
    justify-content: space-between;
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  dt {
    padding: 0 20px;
  }
  >a {
    text-decoration: none;
  }
}
</style>
