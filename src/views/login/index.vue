<template>
  <div>
    <div class="bigbox">
    <!-- 窗口左边的预留区域 -->
    <div class="left">
      <img src="@/assets/logo.png" alt="">
      <!-- logo下的文字 -->
      <div class="text">
        <span>欢&nbsp;迎&nbsp;来&nbsp;到</span>
        <span>趣&nbsp;代&nbsp;码&nbsp;世&nbsp;界</span>
      </div>
    </div>
    <!-- 窗口右边的登录注册框 -->
    <div class="right">
      <!-- 表单 -->
      <div class="form">
        <h2>欢迎登录</h2>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="userName">
            <el-input
              type="input"
              v-model.number="ruleForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              show-message
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="forget">
          <span>忘记密码</span>
          <span @click="toRegister">没有账号？点击注册</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    //用户名表单验证规则
    var checkName = (rule, value, callback) => {
      // 手机号的正则表达式
      let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!value) {
        return callback(new Error("账号不能为空"));
        
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (!reg_tel.test(value)) {
            callback(new Error("用户名格式错误"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    //密码表单验证规则
    var validatePass = (rule, value, callback) => {
      // 密码的正则表达式，必须包含数字字符和特殊符号
      let reg_pas = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,\._])[0-9a-zA-Z!@#$%^&*,\\._]{8,16}$/
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg_pas.test(value)){
            callback(new Error("密码必须包含大小写字母,特殊字符和数字，且长度不低于8位！"));
      }else {
            callback();
          }
    };
    return {
      //用户名和密码
      ruleForm: {
        pass: "",
        userName: "",
      },
      //引入上方表单验证规则
      rules: {
        userName: [{ validator: checkName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }], 
      },
    };
  },
  methods: {
    // 登录按钮的回调
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置按钮的回调
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //  跳往注册页面
    toRegister(){
      this.$router.push({name:Register})
    }

  },
};
</script>

<style lang="less">

// 最外面的大盒子
.bigbox {
  width: 100%;
  //   height: 100%;
  display: flex;
  font-size: 16px;
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  //   窗口左边的预留区域
  .left {
    width: 55%;
    height: 100vh;
    /* 网页logo */
    img{
      width: 200px;
      margin: 50px 50px;
    }
    /* 欢迎词 */
    .text{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 300px;
      justify-content: center;
      gap: 20px;
      span{
        font-family: "Times New Roman", Times, serif;
        margin-left: 200px;
        font-size: 60px;
        font-weight: 900;
        color: #ffffff;
        animation: fontAnimation 5s;
      }
    }
  }
  //   窗口右边的登录注册框
  .right {
    width: 45%;
    height: 100vh;
    // background-color: blue;
    display: flex;
    align-items: center;
    /* 欢迎** */
    
    /* form表单 */
    .form {
      background-color: #f5f4f6;
      width: 480px;
      padding: 50px 20px;
      background-color:rgba(255,255,255,0.7);
      /* 欢迎登录 */
      h2{
        margin-left: 50px;
        margin-bottom: 50px;
        font-size: 25px;
        font-weight: 700;
    }
    /* 用户忘记密码或注册 */
    .forget{
      margin-bottom: -20px;
      padding: 30px;
      display: flex;
      justify-content: space-between;
      span:hover{
      color:#f3b544;
    }
    }
     
    }
  }
}
@keyframes fontAnimation{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>