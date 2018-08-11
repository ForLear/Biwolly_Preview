<template>

    <el-form :model="loginInfo" status-icon :rules="loginRules" ref="loginInfo" label-width="50px" class="demo-ruleForm">
      <el-form-item  prop="username">
        <el-input v-model="loginInfo.username" auto-complete="off" :placeholder="loginPlaceholder.user"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" v-model="loginInfo.password" auto-complete="off" :placeholder="loginPlaceholder.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginInfo')">登陆</el-button>
      </el-form-item>
    </el-form>

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
        }
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
      }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
</style>