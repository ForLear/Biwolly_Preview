<template>
    <section :class="$style.content">
        <div v-loading="load" :class="$style.place">
            <!-- 十连抽 -->
            <luck-ten title="抽奖"></luck-ten>
            <el-button size="mini">点</el-button>
            <div style="height: 3000px;width: 500px"></div>
            <el-button size="mini" @click="top">点我</el-button>
        </div>
    </section>
</template>

<script lang="ts">
    import { viewport } from '@Fn/viewport'
    import LuckTen from '@/components/luckDraw/luckTen'
    import {
        register,
        login,
        wrap
    } from '@/api'
    import {
        mapMutations,
        mapGetters
    } from 'vuex'
    export default {
        name: 'doc',
        components: {
            LuckTen,
        },
        data() {
            return {
                load: false
            }
        },

        computed: {},

        watch: {},

        created() {
            // viewport(window, document)
        },

        mounted() {
            // this.login()
        },

        methods: {
            /* 登录测试 */
            async login() {
                let params = {
                    email: '88888881@qq.com',
                    // password: '123456'
                    password: '123456'
                }
                // this.load = true
                const [agin, err] = await wrap(login(params))
                console.log(agin, err)
                // this.load = false
            },
            top(e) {
                document.body.scrolltop = 0
                e.pageY = 0
                console.log(e.pageY)
                // alert(document.documentElement)
            },
        },
    }
</script>

<style lang="scss" module>
    @import '@/common/css/element.scss';

    .content {
        width: 100%;
        height: 100%;
        background-color: #fff;

        .place {
            height: 300px;
            padding-top: 42px;
            text-align: center;
            background: linear-gradient(#68e9b5, #ffffff);
            text-align: center;

            .testImg {
                height: 100%;
            }
        }
    }
</style>