<template>
  <section>
    <div @click="cons">{{ title }}</div>
    <el-button size="mini" style="margin: 15px;" @click="luckDraw(1)">单抽</el-button>
    <el-button size="mini" style="margin: 15px;" @click="luckDraw(10)">十连抽</el-button>
    <br />
    <span>抽奖次数: {{ frequency }}</span><br />
    <!-- <span>辣鸡卡: {{  }}</span> -->
    <span>SSR: {{ ssr }}</span><br />
    <span>保底SSR: {{ bgSsr }}</span><br />
    <span>剩余{{ BG }}发保底</span>
  </section>
</template>

<script>
  export default {
    name: 'luckTen',

    props: {
      title: String,
    },

    data() {
      return {
        /* 保底判断 */
        ssrFlag: false,
        srFlag: false,
        rFlag: false,

        num: '',
        frequency: 0,
        ssr: 0,
        sr: 0,
        r: 0,
        bgSsr: 0,
        bgSr: 0,

        BG: 100,
      }
    },

    computed: {
    },

    watch: {
      // ssr(newVal, oldVal) {
      //   this.BG = 100
      // },
    },

    mounted() {
      console.log(this.title)
    },

    methods: {
      /* 打印 */
      cons() {
        console.log(this.title)
      },

      /* 十连抽 */
      luckDraw(fre) {
        try {
          /* 判断当前是否为百连保底 */
          this.BG <= 10 ? this.ssrFlag = true : ''
          /* 转换数据类型 */
          const par = parseInt(fre)
          if (typeof par === 'number' && par.toString() !== 'NaN') {
            /* 初始化ssr概率 初始化抽奖数组 */
            const [ssr, arr] = [Math.trunc((Math.random()) * 100), []]
            /* 开始抽奖 */
            for (let i = 0; i < par; i++) {
              this.BG--
              if (this.BG > 0) {
                /* 选定随机抽奖结果 */
                const piovt = Math.trunc((Math.random()) * 100)
                /* 中 */
                if (piovt === ssr) {
                  arr.push('SSR')
                  this.ssr++
                  this.BG = 100
                } else {
                  arr.push('辣鸡卡')
                }
              } else {
                arr.push('SSR')
                this.BG = 100
                this.ssr++
                this.bgSsr++
              }
            }

            console.log(this.BG, arr)

            /* 抽奖次数刷新 */
            if(fre === 1) {
              this.frequency += 1
            } else if(fre === 10) {
              this.frequency += 10
            }
            return arr[arr.length - 1] || '啥都没中'
          } else {
            console.log('抽奖失败')
          }
        } catch (err) {

        } finally {
          this.ssrFlag = false
          this.srFlag = false
        }
      },

      // 计算无视
      sum(num, ...args) {
        let base = num
        args.forEach(item => {
          num += (100 - num) * item / 100
        })
        
        // 伤害比例
        const hurt = Math.round((1 - (1 - base / 100) * 3) * 100),
              impHurt = Math.round((1 - (1 - num / 100) * 3) * 100),
              imp = Math.round((impHurt - hurt) / impHurt * 100)
        console.log(`基础无视为${base}%, 提升至${num}%,  对300防boss造成伤害四舍五从${hurt}%提升入为${impHurt}%, 提升了${imp}%`)
      }
    },

  }
</script>

<style lang="scss" module>
</style>
