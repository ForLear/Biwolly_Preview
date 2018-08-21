<template>
  <section :class="$style.info" :userName="userName">
    <div :class="$style.user_header">
      <b>{{ userName }}</b>
      <div :class="$style.user_config"></div>
    </div>
    
  </section>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: '一个无名氏来到了这里',
    },
  },
}
</script>

<style lang='scss' module>
  .info {
    text-align: center;
    .user_header {
      height: 101px;
      b {
        margin-bottom: 8px;
      }
    }
    .user_config {
      position: relative;
      margin: 0 20px;
    }
  }
</style>