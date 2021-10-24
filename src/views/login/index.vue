<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="false" label-position="left">

      <div class="title-container">
        <h3 class="title"><div class="login-logo">
          <img src="@/assets/images/login/logo1.png" width="131" height="69">
        </div></h3>
      </div>
      <div class="title-container">
        <div class="title">
          <b>ĐĂNG NHẬP</b>
        </div>
        <p class="title-small">Giao diện admin</p>
      </div>
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="nhập username"
          name="username"
          type="text"
          tabindex="1"
        >
          <template v-slot:prefix><img src="@/assets/images/login/user.png" style="margin-top: 8px;"></template>

        </el-input>

      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="nhập mật khẩu"
          name="password"
          tabindex="2"
          @keyup.enter.native="handleLogin"
        >
          <template v-slot:prefix><img src="@/assets/images/login/lock.png" style="margin-top: 8px;"></template>

        </el-input>
      </el-form-item>

      <div class="btn-wrap">
        <el-row>
          <el-col :span="12">
            <a><span class="forgotpass-content">Forgot Password?</span></a>
          </el-col>
          <el-col :span="8" :offset="8">
            <el-button :loading="loading" class="login-button" type="primary" style="width:100%;height:40px" @click.native.prevent="handleLogin">Đăng nhập</el-button>

          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('username không hợp lệ'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('password phải lớn hơn 6 ký tự'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #373C56;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    width: 85%;

    input {
      border: 0px;
      color: $cursor;
      padding-top: 8px;
      margin-left: 30px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      /* identical to box height, or 150% */

      text-align: center;

      &:-webkit-autofill {
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item--small .el-form-item__content{
    line-height: 24px;
  }
  .el-input--small .el-input__inner {

  }
  .el-form-item {
    background: #FFFFFF;
    box-shadow: 0px 1px 0px #E7E7E7;

  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background: url("../../assets/images/login/BG-01 1.png") no-repeat bottom fixed;
  overflow: hidden;
  background-position: bottom;
  background-size: 100% auto;
  -webkit-background-size: 100% auto;
  -moz-background-size: 100% auto;
  -o-background-size: 100% auto;

  .login-form {
    position: relative;
    width: 472px;
    max-width: 100%;
    padding: 100px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .login-button{
    margin-top: 12px;
    text-align: center;
    background: #2FBBB2;
    border-radius: 8px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    margin-bottom: 24px;

    .title {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height, or 150% */

      text-align: center;

      color: #3D3D3D;

    }
    .title-small{
      text-align: center;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      margin-top: 5px;
      /* identical to box height, or 143% */
      color: #8E8E8E;
    }
  }
  .forgotpass-content{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    color: #54CCB6;

  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
