<template>
  <div class="member-type">
    <div id="slider" class="slider" @touchstart="touchstart" @touchmove="touchmove1">
      <ul>
        <li v-for="(item, index) in pre" :key="index" class="sil" :class="{'silFalse' : !item.check}"
          @click="checkSel(item, index)">
          <div class="tjFont">
            <span>{{ item.month }}</span>
          </div>
          <div class="tjFontBig1">
            <span style="font-size: 14px;">￥</span><span>{{ item.pre }}</span>
          </div>
          <div v-show="index==0 && item.check" class="frsBtn">巨划算</div>
        </li>
      </ul>
    </div>
    <div id="slider_cp" class="slider" @touchstart="touchstart" @touchmove="touchmove2">
      <ul>
        <li v-for="(item, index) in pre" :key="index" class="sil1" :class="{'silFalse' : !item.check}"
          @click="checkSel(item, index)">
          <div class="tjFont">
            <span>{{ item.month }}</span>
          </div>
          <div class="tjFontBig2">
            <span style="font-size: 14px;">￥</span><span>{{ item.pre }}</span>
          </div>
          <div v-show="index==0 && item.check" class="frsBtn">巨划算</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "member-type",
    components: {
    },
    data() {
      return {
        pre: [
          { check: true, month: '12个月', pre: '360.00' },
          { check: false, month: '6个月', pre: '180.00' },
          { check: false, month: '3个月', pre: '90.00' },
        ],
        startPointX: 0,
        changePointX: 0,
        flag: '',
        pivot: '',
        showIndex: [0, 0],
      }
    },
    computed: {},
    created() { },
    mounted() { },
    methods: {
      show(index, flag) {
        this.changePointX = this.startPointX
        let slider = document.getElementById(flag)
        slider.style.marginLeft = `-${91 * index}px`
      },
      touchstart(e) {
        this.startPointX = e.changedTouches[0].pageX
      },
      touchmove1(e) {
        this.flag = 'slider'
        this.pivot = 0
        this.ons(e)
      },
      touchmove2(e) {
        this.flag = 'slider_cp'
        this.pivot = 1
        this.ons(e)
      },
      ons(e) {
        if (this.startPointX == this.changePointX) {
          return
        }
        let currPointX = e.changedTouches[0].pageX
        let leftSlide = this.startPointX - currPointX
        if (leftSlide > 30 && this.showIndex[this.pivot] < this.pre.length - 2) {
          this.show(++this.showIndex[this.pivot], this.flag)
        } else if (leftSlide < -30 && this.showIndex[this.pivot] > 0) {
          this.show(--this.showIndex[this.pivot], this.flag)
        }
      },
      checkSel(item, index) {
        this.pre.forEach(itemSub => {
          itemSub.check = false
        })
        item.check = true
      },
    },
  }
</script>

<style>
  .member-type {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
  }

  .member-type .slider {
    overflow: hidden;
    white-space: nowrap;
    transition: 0.5s;
    padding: 0 calc(50vw - 160px);
    width: 500px;
    height: 185px;
    margin: 45px 0 0 0;
    padding: 10px;
  }

  .member-type .sil {
    width: 129px;
    height: 149px;
    text-align: center;
    display: inline-block;
    background-color: #FFEEE2;
    border: 1px solid #FF9547;
    margin: 10px;
    color: #FF9547;
  }

  .member-type .sil1 {
    width: 129px;
    height: 149px;
    text-align: center;
    display: inline-block;
    background-color: #FFEEE2;
    border: 1px solid #FF9547;
    margin: 10px;
    color: #FF9547;
  }

  .member-type .silFalse {
    background-color: #F2F6FF;
    color: #808EA1;
    border: 1px solid #D8E0F0;
  }

  .member-type li {
    position: relative;
    font-weight: bold;
  }

  .member-type .open {
    color: #3F515D;
    margin: 20px 5% 0;
    font-size: 16px;
    font-weight: bold;
  }

  .member-type .openBtn {
    background-color: #4BA2FE;
    color: #FFF;
    width: 90%;
    height: 50px;
    border: none;
    text-align: center;
    margin: 20px 5% 0;
    line-height: 50px;
    border-radius: 2px;
    font-size: 17px;
    box-shadow: 0 0.1rem 0.4rem rgba(38, 121, 219, 0.35);
  }

  .member-type .gray {
    background-color: gray;
  }

  .member-type .desc {
    color: #3F515D;
    margin: 50px 5% 15px;
    font-size: 16px;
    font-weight: bold;
  }

  .member-type .descB {
    color: #808EA1;
    margin: 10px 20px;
    font-size: 14px;
  }

  .member-type .fristImg {
    width: 80px;
    height: 30px;
    position: absolute;
    top: -15px;
    left: -1px;
  }

  .member-type .tjFont {
    margin-top: 25px;
    font-size: 18px;
  }

  .member-type .tjFontBig1 {
    margin-top: 10px;
    font-size: 27px;
  }

  .member-type .tjFontBig2 {
    margin-top: 10px;
    font-size: 27px;
  }

  .member-type .frsBtn {
    position: absolute;
    bottom: 20px;
    height: 22px;
    width: 80px;
    margin-left: 23px;
    padding-left: 8px;
    border-radius: 50px;
    font-size: 13px;
    line-height: 23px;
    background: #FF9547;
    background-size: 15px auto;
    color: #fff;
  }
</style>