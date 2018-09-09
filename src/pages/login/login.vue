<template>
    <section>
        <transition name="fade">
            <el-form class="login-form form-common" :model="loginInfo" status-icon :rules="inputRules" ref="loginInfo" label-width="50px" v-if="formChange">
                <div class="form-title">登陆</div>
                <el-form-item class="form-item" prop="username">
                    <el-input v-model="loginInfo.username" auto-complete="off" :placeholder="formPlaceholder.loginUser"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="password">
                    <el-input type="password" v-model="loginInfo.password" auto-complete="off" :placeholder="formPlaceholder.loginPass"></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button class="form-button" type="primary" @click="submitForm('loginInfo')">登陆</el-button>
                </el-form-item>
                <div>
                    没有账号?<span class="href-span" @click="change_form">来交易</span>
                </div>
            </el-form>
        </transition>

        <transition name="fade">
            <el-form class="register-form form-common" :model="registerInfo" status-icon :rules="inputRules" ref="loginInfo" label-width="50px" v-if="!formChange">
                <div class="form-title">注册</div>
                <el-form-item class="form-item" prop="username">
                    <el-input v-model="registerInfo.username" auto-complete="off" :placeholder="formPlaceholder.registerUser"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="phone">
                    <el-input v-model="registerInfo.phone" auto-complete="off" :placeholder="formPlaceholder.registerPhone"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="password">
                    <el-input type="password" v-model="registerInfo.password" auto-complete="off" :placeholder="formPlaceholder.registerPass"></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button class="form-button" type="primary" @click="submitForm('loginInfo')">注册</el-button>
                </el-form-item>
                <div>
                    已有账号?<span class="href-span" @click="change_form">登陆</span>
                </div>
            </el-form>
        </transition>
    </section>
</template>

<script>

import { login , handleErr } from "@/api";

export default {
  data() {
    var phoneCheck = /^[1][3,4,5,7,8][0-9]{9}$/;

    var userRules = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('账号不能为空'));
        }

        callback();
    };

    var passRules = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('密码不能为空'));
        }
        callback();
    };

    var phoneRules = (rule, value, callback) => {
        if (!value) {
            callback(new Error('手机号不能为空'));
        }else{

            if( !phoneCheck.test(value)){
                callback(new Error('手机号不正确'));
            }
            callback();
        }
    };

    return {
        loginInfo: {
            username:'',
            password:''
        },
        registerInfo: {
            username:'',
            phone:'',
            password:''
        },
        inputRules: {
            username : [
                { validator: userRules, trigger: 'blur' }
            ],
            password : [
                { validator: passRules, trigger: 'blur' }
            ],
            phone : [
                { validator: phoneRules, trigger: 'blur' }
            ]
        },
        formPlaceholder: {
            loginUser:'请输入手机号或者邮箱',
            loginPass:'请输入密码',
            registerUser:'请输入用户名',
            registerPass:'请输入密码(不少于6位)',
            registerPhone:'请输入手机号'
        },
        formChange:true
    };
  },
  computed: {},
  methods: {
      submitForm(formName){
          this.$refs[formName].validate((valid) => {
              console.log(valid)
            if (valid) {
                console.log('here')
                login(this.loginInfo).then(res=>{
                    console.log(res)
                }).catch(err => {
                  handleErr(err)
                })
            } else {
              this.$notify.error({
                title: '错误',
                message: '大锅你不要搞事'
              });
              return false;
            }
          });
      },
      change_form(){
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
        padding:20px 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;   

        .href-span {
            color: #007fff;
            cursor: pointer;
        }

        .form-title {
            color: $color-basic;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .form-item {
            margin-right: 50px;
        }

        .form-button {
            width: 100%;
        }
    }

    // 切换动画样式
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>