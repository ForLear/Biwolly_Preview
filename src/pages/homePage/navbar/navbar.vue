<template>
  <header :cname="$style.header">
    <section :class="$style.list">
      <Left/>
      <Right/>
    </section>
  </header>
</template>

<script>
import Left from './left'
import Right from './right'
export default {
  components: {
    Left,
    Right,
  }
}
</script>

<style lang='scss' module>
@import '@/common/style/element.scss';
header {
  background: hsla(0,0%,100%,.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  min-width: 1200px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  z-index: 5;
  .list {
    @include list(row);
    justify-content: space-between;
    width: 85%;
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