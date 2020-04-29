<template>
    <section :class="$style.content">
        <div v-loading="load" :class="$style.place">
            <!-- 十连抽 -->
            <luck-ten title="抽奖"></luck-ten>
        </div>
    </section>
</template>

<script lang="ts">
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
        data() {
            return {
                load: false,
            }
        },

        computed: {},

        watch: {},

        created() {
        },

        mounted() {
            // console.log(this)
            // this.login()
        },

        methods: {
            /* 登录测试 */
            async login() {
                // let params = {
                //     email: '88888881@qq.com',
                //     // password: '123456'
                //     password: '123456'
                // }
                // this.load = true
                // const [agin, err] = await wrap(login(params))
                // console.log(agin, err)
                // this.load = false

                const [url] = ['https://randomuser.me/api/']
                let agin = await this.api('get', url)
                console.log(agin)
            },

            async api(post = 'post', url, params = {}) {
                let POST = {}
                switch(post) {
                    case 'post': 
                        POST = {
                            method: 'POST',
                            mode: 'cors',
                            credentials: 'include',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: JSON.stringify(params)
                            /* body: `对象名=${params}` */
                        }
                        break   
                    case 'get': 
                    default: 
                        break
                }
                try {
                    const agin = await fetch(url, POST)
                    return agin.ok ? await agin.json() : console.error('not ok!')
                } catch (err) {
                    console.error('Network is not ok!!')
                    const result = Object.create(null)
                    result.status = false
                    return result
                }
                // return await fetch(url, POST)
            }
        },
    }
</script>

<style lang="scss" module>
    @import '@/common/style/element.scss';

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