<template>
    <div>
        <el-form :model="loginInfo" status-icon :rules="loginRules" ref="loginInfo" label-width="50px" class="login-form" v-show="formChange">
            <div class="form-title">登陆</div>
            <el-form-item class="login-form-item" prop="username">
                <el-input v-model="loginInfo.username" auto-complete="off" :placeholder="loginPlaceholder.user"></el-input>
            </el-form-item>
            <el-form-item class="login-form-item" prop="password">
                <el-input type="password" v-model="loginInfo.password" auto-complete="off" :placeholder="loginPlaceholder.pass"></el-input>
            </el-form-item>
            <el-form-item class="login-form-item">
                <el-button class="login-form-button" type="primary" @click="submitForm('loginInfo')">登陆</el-button>
            </el-form-item>
            <div class="login-form-register">
                没有账号?<span class="href-span" @click="go_register">来交易</span>
            </div>
        </el-form>

        <el-form >
            <div class="form-title">注册</div>
            <el-form-item class="login-form-item" prop="username">
                <el-input v-model="loginInfo.username" auto-complete="off" :placeholder="loginPlaceholder.user"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import { login , handleErr } from "@/api";

export default {
  data() {
    var userRules = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('账号不能为空'));
        }else{
            callback();
        }
    };

    var passRules = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('密码不能为空'));
        }else{
            callback();
        }
    };

    return {
        loginInfo: {
            username:"",
            password:""
        },
        loginRules: {
            username : [
                { validator: userRules, trigger: 'blur' }
            ],
            password : [
                { validator: passRules, trigger: 'blur' }
            ]
        },
        loginPlaceholder: {
            user:'请输入手机号或者邮箱',
            pass:'请输入密码'
        },
        formChange:false
    };
  },
  computed: {},
  methods: {
      submitForm(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
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
      go_register(){
          
      }
  },
};
</script>

<style lang='scss' scoped>
    $color-basic:#515151;
    
    .login-form {
        color: $color-basic;
        width: 320px;
        height: 280px;
        background: #fff;
        border-radius: 8px;
        padding: 5px;
        text-align: center;
        padding:20px 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;   
    }
    
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
</style>