<template>
    <div>
        <transition name="fade">
            <el-form class="login-form form-common" :model="loginInfo" status-icon :rules="loginRules" ref="loginInfo"
                label-width="50px" v-show="formChange">
                <div class="form-title">登陆</div>
                <el-form-item class="login-form-item" prop="username">
                    <el-input v-model="loginInfo.email" auto-complete="off" :placeholder="loginPlaceholder.user">
                    </el-input>
                </el-form-item>
                <el-form-item class="login-form-item" prop="password">
                    <el-input type="password" v-model="loginInfo.password" auto-complete="off"
                        :placeholder="loginPlaceholder.pass"></el-input>
                </el-form-item>
                <el-form-item class="login-form-item">
                    <el-button class="login-form-button" type="primary" v-loading="loading" :disabled="loading"
                        @click="submitForm('loginInfo')">登陆</el-button>
                </el-form-item>
                <div>
                    没有账号?<span class="href-span" @click="change_form">来交易</span>
                </div>
            </el-form>
        </transition>

        <transition name="fade">
            <el-form class="register-form form-common" :model="loginInfo" status-icon :rules="loginRules"
                ref="loginInfo" label-width="50px" v-show="!formChange">
                <div class="form-title">注册</div>
                <el-form-item class="login-form-item" prop="username">
                    <el-input v-model="loginInfo.email" auto-complete="off" :placeholder="loginPlaceholder.user">
                    </el-input>
                </el-form-item>
                <el-form-item class="login-form-item" prop="password">
                    <el-input type="password" v-model="loginInfo.password" auto-complete="off"
                        :placeholder="loginPlaceholder.pass"></el-input>
                </el-form-item>
                <el-form-item class="login-form-item" prop="password">
                    <el-input type="password" v-model="loginInfo.password" auto-complete="off"
                        :placeholder="loginPlaceholder.pass"></el-input>
                </el-form-item>
                <el-form-item class="login-form-item">
                    <el-button class="login-form-button" type="primary" @click="submitForm('loginInfo')">注册</el-button>
                </el-form-item>
                <div>
                    <span class="href-span" @click="change_form">返回登录</span>
                </div>
            </el-form>
        </transition>
    </div>
</template>

<script>

    import { login, handleErr, wrap } from "@/api";

    export default {
        data() {
            var userRules = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('账号不能为空'));
                } else {
                    callback();
                }
            };

            var passRules = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码不能为空'));
                } else {
                    callback();
                }
            };

            return {
                loading: false,
                loginInfo: {
                    email: "",
                    password: ""
                },
                loginRules: {
                    email: [
                        { validator: userRules, trigger: 'blur' }
                    ],
                    password: [
                        { validator: passRules, trigger: 'blur' }
                    ]
                },
                loginPlaceholder: {
                    user: '请输入手机号或者邮箱',
                    pass: '请输入密码'
                },
                formChange: true
            };
        },
        computed: {},
        methods: {
            submitForm(formName) {
                this.loading = true
                this.$refs[formName].validate(async valid => {
                    if (valid) {
                        sessionStorage.setItem('loginInfo', JSON.stringify({ access_token: 'ok' }))
                        this.$router.push({
                            path: '/doc'
                        })
                        // let [agin, err] = await wrap(login(this.loginInfo))
                        // if (agin) {
                        //     sessionStorage.setItem('loginInfo', JSON.stringify(agin))
                        //     this.$router.push({
                        //         path: '/doc'
                        //     })
                        // }
                        // this.loading = false
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '大锅你不要搞事'
                        });
                        return false;
                    }
                });
            },
            change_form() {
                this.formChange = !this.formChange
            }
        },
    };
</script>

<style lang='scss' scoped>
    $color-basic:#515151;

    .form-common {
        color: $color-basic;
        width: 320px;
        height: auto;
        max-height: 320px;
        background: #fff;
        border-radius: 4px;
        text-align: center;
        padding: 20px 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }

    .login-form {

        .form-title {
            color: $color-basic;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .login-form-item {
            margin-right: 50px;
        }

        .login-form-button {
            width: 100%;
        }

        .href-span {
            color: #007fff;
            cursor: pointer;
        }
    }



    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }
</style>