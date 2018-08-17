<template>
    <section id="algorithm">
        <div class="left-algorithm">
            <ul>
                <li class="title-li" v-for="(item,index) in algorithmTap" :key="index">
                    <span class="title-algorithm">{{item.title}}</span>
                    <ul v-if="item.secondary">
                        <li class="secondary-li" v-for="items in item.secondary" :key="items">
                            <span class="title-algorithm">{{items}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="right-algorithm">

            <div class="header-right">
                图片放不进来，看文字凑合
            </div>

            <div class="body-right"> 
                <div class="content-body">
                    <h1>巴拉拉</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data(){
    return {
        algorithmTap :[{title:'基本算法',secondary:['快速排序','深搜算法']},{title:'奇怪算法',secondary:[]}]
    }
  },
  computed:{},
  methods:{}
}
</script>

<style lang='scss' scoped>
@import '@/common/css/element.scss';

    $color-basic:#515151;
    $fontsize-basic:16px;

    #algorithm {        
        font-size: $fontsize-basic;
        color: $color-basic;
        height: 100%;
        background: #f8f8f8;

        ul {
            list-style: none;
            padding-left: 20px;
        }

        .left-algorithm {
            float: left;
            width:  200px;
            height: 100%;
            border-right: 1px solid #eee;
        
            .title-li {
                letter-spacing: 2px;
                cursor: pointer;

                span {
                    display: inline-block;
                    padding: 6px;
                }
            }
        }

        .right-algorithm {

            .header-right {
                height: 60px;
                padding: 10px;
                text-align: center;
            }

            .content-body {
                max-width: 800px;
                margin: 0 auto;

                h1 {
                    font-size: 2em;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 12px;
                }
            }   
        }
    }

    
    
</style>