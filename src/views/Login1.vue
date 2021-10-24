<template>
  <div class="login-container">
      <el-row>
        <el-col :span="16">
          <div class="login_left">
            <img src="../assets/images/login/login.png" >

          </div>
        </el-col>
        <el-col :span="8">
          <div class="login-logo">
            <img src="../assets/images/login/logo1.png">
          </div>
          <div class="login_main">
            <div class="login_form">
              <div class="login_form-wrap">
              <div class="login-form-header">
                <span class="login-form-header-bold"><b>ESURE'S CMC</b></span><br>
                <span class="login-form-header-small">Welcome, we missed you!</span>
              </div>
              <div class="login-form-main">
                <el-form ref="form" :model="form" size="mini">
                  <el-form-item class="form-item-st" style="margin-bottom: 30px;">
                    <el-input v-model="form.name"  style="padding-left: 20px;" placeholder="Enter you email">
                      <template v-slot:prefix @click="show"><img src="../assets/images/login/login-icon.png" style="margin-bottom: -2px;"></template>

                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="form.password" style="padding-left: 20px;" placeholder="Enter you password" show-password>
                      <template v-slot:prefix @click="show"><img src="../assets/images/login/password-icon.png" style="margin-bottom: -2px;"></template>

                    </el-input>
                  </el-form-item>
                  <el-row>
                    <el-col :span="14">
                      <el-form-item class="input-code">
                        <span class="input-label">Verification code</span>

                        <el-input v-model="form.code" style="width: 112px;height: 24px">

                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <div class="code-show-wrap">
                        <p class="code-show-content">8866</p>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <el-checkbox v-model="form.remember"><span class="rememberme-content">Remember me</span></el-checkbox>
                    </el-col>
                    <el-col :span="12">
                      <a><span class="forgotpass-content">Forgot Password?</span></a>
                    </el-col>
                    <el-col :span="24">
                      <el-button class="btn-login"  @click.native.prevent="handleLogin"><span class="login-content">Sign In</span></el-button>
                    </el-col>
                  </el-row>
                </el-form>

              </div>
              </div>
            </div>
          </div>
          <div class="terms">
            <span>Global Safe Terms and Conditions | Privacy Policy | Security Policy</span>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return{
      form: {
        name: '',
        password:'',
        code:'',
        remember:''
      }
    }
  }
}
</script>
<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #373C56;
$black:#373C56;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */

.login-container {
  .el-input {
    display: inline-block;
    height: 15px;
    width: 218.61px;

    input {
      border: 0px;
      padding: 12px 5px 12px 15px;
      height: 15px;
      caret-color: $cursor;
      color: $cursor;
      font-size: 11px;
      font-style: normal;
      line-height: 12.1px;

      &:-webkit-autofill {
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border-bottom: 1px solid #EBEBEB;
  }

  .el-checkbox__inner{
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 10px;
    background: #EBEBEB;
  }
  .input-code .el-form-item__content{
    line-height: 22px !important;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$cursor: #373C56;



.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login_left{
    img {

    }

  }
  .login_main{
    height: 100%;
    width: 100%;

  }
  .login_form {
    position: absolute;
    width: 290px;
    height: 367px;
    right: 19vw;
    top: 210px;
    float: right;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

  }
  .login_form-wrap{
    margin:24px 27px 32.56px 40px;

  }
  .login-form-header{

    font-style: normal;
    margin-bottom: 30px;

  }
  .login-form-header-bold{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight:300;
    font-size: 18px;
    line-height: 110%;
    /* or 20px */


    color: #282C40;
  }
  .login-form-header-small{
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 110%;
    /* or 12px */


    color: rgba(40, 44, 64, 0.6);
  }

  .icon-restyle{
    color: $cursor;

  }

  form-item-st{
    margin-bottom: 35px;
  }

  .code-show-wrap{
    background: #374151;
    border-radius: 6px;
    width: 65px;
    height: 34px;
    display: flex;
    float: right;
      margin: 12px 0px 0px ;
  }
  .code-show-content{
    /* text-base/SemiBold */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    /* Gray 3 */

    color: #828282;


    /* Inside Auto Layout */

    flex: none;
    order: 7;
    flex-grow: 0;
    margin: auto;
  }
  .rememberme-content{
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 110%;
    /* identical to box height, or 11px */


    color: rgba(130, 134, 154, 0.6);
  }
  .forgotpass-content{
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 110%;
    /* identical to box height, or 11px */


    color: #F0AE4B;

  }
  .btn-login{
    background: linear-gradient(180deg, #FFB648 0%, #FDC064 100%);
    border-radius: 10px;
    width: 218.61px;
    height: 41.04px;
    margin-top: 20px;
  }
  .login-content{
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 110%;
    /* or 17px */


    color: #FFFFFF;

    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  }
  .login-logo{
    position: absolute;
    top: 44px;
    right: 100px;

  }
  .terms{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */
    right: 75px;
    bottom: 44px;
    position: absolute;


    color: #0074BD;
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
  .input-label{
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 110%;
    color: #82869A;
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

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
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

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
