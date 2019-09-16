<template>
  <div>
    <dt :class="$style.items">
      <router-link to="/Producthome">
        <dl :class="$style.item">
          <i :class="$style.icon_home"></i>
          主站
        </dl>
      </router-link>
      <router-link to="Trie">
        <dl :class="$style.item">算法</dl>
      </router-link>
      <router-link to="">
        <dl :class="$style.item">组件库</dl>
      </router-link>
      <router-link to="/Balabala">
        <dl :class="$style.item">吧啦吧啦</dl>
      </router-link>
      <a :href="down">
        <dl :class="$style.item">
            <i :class="$style.icon_phone"></i>
            下载APP
        </dl>
      </a>
      <div :class="$style.APK">
        <img :class="$style.QRCode" src="" alt="二维码">
      </div>
    </dt>
  </div>
</template>

<script>
export default {
  data() {
    return {
      down: '#',
    }
  },
  created() {
  },
  methods: {
    
  },
}
</script>

<style lang='scss' module>
  @import '@/common/css/element.scss';
  .items {
    @include list(row);
    clear: both;
    .icon_home {
      width: 23px;
      height: 13px;
      margin-right: 5px;
      display: inline-block;
      background-image: url(@/common/image/home.svg);
    }
    .icon_phone {
      width: 12px;
      height: 11px;
      margin-right: 1px;
      display: inline-block;
      background-image: url(@/common/image/phone.svg);
    }
    .item {
      float: left;
      height: 100%;
      line-height: 42px;
      padding: 0 8px;
      margin: 0 auto;
      cursor: pointer;
      transition: background 0.25s;
    }
    .item:hover {
      background: #FFF;
      background-color: hsla(0,0%,100%,.3);
    }
    >a {
      color: #000;
    }
  }
  .APK {
    width: 259px;
    height: 134px;
    top: 42px;
    position: absolute;
    padding: 0;
    margin-top: 10px;
    margin-left: 227px;
    text-align: center;
    transition: all .5s;
    background: url(@/common/image/QRCode.png);
    opacity: 0;
    visibility: hidden;
    .QRCode {
      width: 100px;
      height: 100px;
      margin-right: -125px;
      margin-top: 5px;
    }
  }
  .items {
    a:hover + .APK {
      margin-top: 0;
      /* background: rgb(255, 255, 255); */
      box-shadow: 0 2px 4px rgba(0,0,0,.16);
      opacity: 1;
      visibility: visible;
    }
  }
</style>