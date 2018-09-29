<template>
  <div>
    <dt :class="$style.items">
      <router-link to="/beidoudou">
        <dl :class="$style.item">
          <i :class="$style.icon_home"></i>
          <span :class="$style.home">主站</span>
        </dl>
      </router-link>
      <router-link to="">
        <dl :class="$style.item">test</dl>
      </router-link>
      <router-link to="">
        <dl :class="$style.item">
          <span :class="$style.sb">可爱网友</span>
        </dl>
      </router-link>
      <router-link to="/Balabala">
        <dl :class="$style.item">test</dl>
      </router-link>
      <a :href="down">
        <dl :class="$style.item">
          加入♂我们
        </dl>
      </a>
      <div :class="$style.ShowCode">
        <div :class="$style.QQ">
          <img :class="$style.QRCode" src="@/common/triopen/Code.png" alt="北斗华南粉丝群二维码">
        </div>
      </div>
    </dt>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        down: '/dist_test/#/fans',
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
    font-weight: bold;
    .icon_home {
      width: 91px;
      height: 42px;
      margin-right: 5px;
      margin-top: 7px;
      display: inline-block;
      background: url(@/common/triopen/Logo.png) no-repeat;
    }

    .home {
      left: 85px;
      width: 28px;
      position: absolute;
    }

    .item {
      float: left;
      height: 56px;
      line-height: 56px;
      padding: 0 16px;
      margin: 0 auto;
      position: relative;
      color: #646c7a;
      cursor: pointer;
      transition: background 0.25s;
      .sb {
        color: #fb7299;
      }
    }

    .item:hover {
      background-color: rgba(36,33,46,.4);
      color: #FFF;
      .sb {
        color: #FFF;
      }
    }

    >a {
      color: #000;
    }
  }

  .ShowCode {
      width: 259px;
      height: 134px;
      top: 56px;
      position: absolute;
      padding: 0;
      margin-top: 10px;
      margin-left: 325px;
      text-align: center;
      background: rgba(255, 255, 255, .9);
      transition: all .5s;
      opacity: 0;
      visibility: hidden;
    .QQ {
      width: 259px;
      height: 134px;
      top: 42px;
      background: url(@/common/image/QRCode.png);
      .QRCode {
        width: 100px;
        height: 100px;
        margin-right: -125px;
        margin-top: 5px;
      }
    }
  }

  .items {
    a:hover + .ShowCode, .ShowCode:hover {
      margin-top: 0;
      /* background: rgb(255, 255, 255); */
      box-shadow: 0 2px 4px rgba(0, 0, 0, .16);
      opacity: 1;
      visibility: visible;
    }
  }
</style>