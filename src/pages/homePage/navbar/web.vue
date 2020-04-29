<template>
  <ul :class="$style.web_ui">
    <li>
      <div :class="$style.batman"></div>
      <span>莫其咯</span>
    </li>
    <li>
      <div :class="$style.fatman"></div>
      <span>一带哟</span>
    </li>
    <router-link tag="li" to="/">
      <div :class="$style.sick"></div>
      <span>马萨卡</span>
    </router-link>
    <li>
      <div :class="$style.glass"></div>
      <span>哄冻泥?</span>
    </li>
    <li>
      <div :class="$style.man"></div>
      <span>哄豆哒</span>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang='scss' module>
  @import '@/common/style/element.scss';
  .web_ui {
    @include list(row);
    width: 360px;
    height: 64px;
    position: absolute;
    right: 0;
    top: 42px;
    padding: 0;
    background: #FFF;
    border-radius: 0 0 4px 4px;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    z-index: 1;
    > li {
      width: 72px;
      height: 54px;
      color: #f25d8e;
      line-height: 30px;
      padding-top: 30px;
      text-align: center;
      list-style: none;
      cursor: pointer;
      transition: all .3s;
      div {
        width: 24px;
        height: 18px;
        top: 13px;
        position: absolute;
        margin-left: 24px;
        transition: all .3s;
      }
      span {
        margin-top: 20px;
        text-decoraction: none;
      }
      .batman {
        width: 24px;
        height: 18px;
        background: url(@/assets/image/batman.svg);
      }
      .fatman {
        width: 20px;
        height: 18px;
        background: url(@/assets/image/fatman.svg);
      }
      .sick {
        width: 20px;
        height: 18px;
        background: url(@/assets/image/sick.svg);
      }
      .glass {
        width: 20px;
        height: 18px;
        background: url(@/assets/image/glass.svg);
      }
      .man {
        width: 18px;
        height: 18px;
        background: url(@/assets/image/man.svg);
      }
    }
    li:hover {
      background: #e5e9ef;
      .batman {
        top: 10px;
      }
      .fatman {
        top: 10px;
      }
      .sick {
        top: 10px;
      }
      .glass {
        top: 10px;
      }
      .man {
        top: 10px;
      }
    }
    a {
      width: 100%;
      height: 100%;
      color: #f25d8e;
      text-decoration: none;
    }
  }
</style>

<style lang="scss">

</style>