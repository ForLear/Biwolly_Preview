<template>
  <div>
    <dt :class="$style.items">
      <dl :class="$style.item">
        <router-link :to="'/profile'">
          <img :src="photo" :class="$style.photo"/>
        </router-link>
        <section :class="$style.user">
          <user-info :userName="name"></user-info>
        </section> 
      </dl>

      <dl :class="$style.item">
        <span>占位符</span>
      </dl>
      <dl :class="$style.item">占位符</dl>
      <dl :class="$style.item">占位符</dl>
      <dl :class="$style.item">占位符</dl>
      <dl :class="$style.item_btn">
        <div :class="$style.web"><span>占位符</span></div>
        <web :class="$style.web_ui"></web>
      </dl>
    </dt>
  </div>
</template>

<script>
  import UserInfo from './userinfo'
  import Web from './web'
  export default {
    components: {
      UserInfo,
      Web,
    },
    data () {
      return {
        photo: '',
        name: '',
        id: '',
      };
    },
    created() {
    },
    methods: {
      
    }
  }
</script>

<style lang='scss' module>
  @import '@/common/css/element.scss';
  .items {
    @include list(row);
    clear: both;
    padding-right: 78px;
    .item {
      float: right;
      height: 42px;
      line-height: 42px;
      padding: 0 8px;
      margin: 0 auto;
      transition: background .25s;
      &:nth-child(n+2) {
        cursor: pointer;
      }
      .photo {
        width: 36px;
        height: 36px;
        transform: scale(1);
        /* position: absolute; */
        border: 1px solid rgba(255,255,255,0);
        border-radius: 50%;
        margin-top: 3px;
        transition: all .3s;
        cursor: pointer;
        z-index: 2;
      }
      .user {
        width: 260px;
        height: 260px;
        position: absolute;
        padding: 50px 0 0;
        margin-left: -111px;
        background-color: hsla(0,0%,0%,0);
        box-shadow: 0 2px 4px rgba(0,0,0,0);
        border-radius: 0 0 4px 4px;
        line-height: normal;
        opacity: 0;
        z-index: -5;
        transition: all .3s;
        visibility: hidden;
      }
    }
    .item:hover {
      &:nth-child(1) {
        .photo {
          width: 36px;
          height: 36px;
          transform: scale(1.7);
          border: 1px solid #FFF;
          border-radius: 50%;
          margin-top: 27px;
          cursor: pointer;
          z-index: 2;
        }
        .user {
          margin-top: -40px;        
          background-color: rgb(255, 255, 255);
          box-shadow: 0 2px 4px rgba(0,0,0,.16);
          opacity: 1;
          visibility: visible;
        }
      }
      &:nth-child(n+2) {
        background: #FFF;
        background-color: hsla(0,0%,100%,.3);
      }
    }
    >a {
      color: #000;
    }
    .item_btn {
      float: right;
      height: 42px;
      line-height: 42px;
      margin: 0 auto;
      .web {
        right: 0;
        width: 58px;
        height: 48px;
        padding: 0;
        margin-right: 108px;
        font-size: 14px;
        color: #fff;
        background-color: #fb7299;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
        position: absolute;
        border-radius: 0 0 6px 6px;
        transition: background .25s;
      }
      .web_ui {
        margin-top: 10px;
        margin-right:108px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s;
      }
    }
    .item_btn:hover {
      .web {
        background-color: #ff85ad;
      }
      .web_ui {
        margin-top: 0;
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>