<template>
  <div class="content">
    <div class="header">
      <div class="logo"><img src="./image/logo.png" alt="" /></div>
      <div class="nav">
        <ul>
          <li>首页</li>
          <li>作品</li>
          <li>论坛</li>
          <li>创作</li>
        </ul>
      </div>
      <div class="search">
        <div class="c1">
          作品
          <svg
            t="1678158581908"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4830"
            width="16"
            height="16"
          >
            <path
              d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z"
              p-id="4831"
            ></path>
          </svg>
        </div>
        <svg
          t="1678158204315"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2773"
          width="20"
          height="20"
        >
          <path
            d="M939.904756 905.321487 685.013561 650.430293c27.446389-29.671163 49.319585-63.491009 65.076186-100.738071 18.178883-42.974782 27.396244-88.604147 27.396244-135.620159 0-47.020105-9.217361-92.652541-27.395221-135.630393-17.550543-41.493987-42.668799-78.751283-74.656838-110.737276-31.98804-31.985993-69.247382-57.103225-110.743416-74.653768-42.979899-18.17786-88.617451-27.394198-135.64165-27.394198-47.020105 0-92.652541 9.217361-135.629369 27.395221-41.492963 17.54952-78.750259 42.666752-110.736252 74.653768s-57.103225 69.244312-74.653768 110.737276c-18.17786 42.977852-27.395221 88.609264-27.395221 135.629369 0 47.016012 9.217361 92.644354 27.395221 135.619136 17.550543 41.490917 42.666752 78.746166 74.653768 110.731135s69.243289 57.101178 110.736252 74.649675c42.977852 18.17786 88.610288 27.395221 135.629369 27.395221 47.025222 0 92.660728-9.216338 135.64165-27.394198 23.60062-9.980784 45.823803-22.416598 66.493533-37.164171l258.067689 258.067689c6.994633 6.99361 16.160827 10.490415 25.32702 10.490415s18.332387-3.496805 25.32702-10.490415C953.891976 941.987284 953.891976 919.309731 939.904756 905.321487zM429.047844 690.831336c-152.617067 0-276.779741-124.153463-276.779741-276.760297 0-152.617067 124.162674-276.780764 276.779741-276.780764 152.629348 0 276.802255 124.163697 276.802255 276.780764C705.850098 566.677873 581.677191 690.831336 429.047844 690.831336z"
            fill="#272636"
            p-id="2774"
          ></path>
        </svg>
      </div>
      <div class="sign_login" v-if="!token">
        <div class="sign" @click="toSign">登录</div>
        <div class="login" @click="toLogin">注册</div>
      </div>
      <div class="haveToken" v-else>
        <div class="user">
          <img :src="img" />
        </div>
        <div class="login2" @click="outLogin">退出登录</div>
      </div>
    </div>
    <div class="body">
      <div class="tab">
        <el-tabs v-model="activeName">
          <el-tab-pane label="全部" name="first"></el-tab-pane>
          <el-tab-pane label="最新热门" name="second"></el-tab-pane>
          <el-tab-pane label="最新精华" name="third"></el-tab-pane>
          <el-tab-pane label="最新回复" name="fourth"></el-tab-pane>
          <el-tab-pane label="最新发表" name="wu"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="table" @click="toDetail" >
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="date" label="标题" width="800">
          </el-table-column>
          <el-table-column prop="name" label="标签" width="120">
          </el-table-column>
          <el-table-column prop="province" label="作者" width="120">
            <template v-slot="">
              <div class="biglafei">
                <div class="lafei"><img src="./image/1.jpeg" alt="" /></div>
                <div class="lafei2">小帖</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="查看/回复" width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="发表时间"
            width="300"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
      <el-pagination :layout="pagination" :total="50" class="page" style="margin-bottom:10px" @current-change="handleCurrentChange"> 
      </el-pagination>
      <div class="bigfooter">
        <div id="wangeditor">
        <div class="bigBox">
          <div class="box1">
            <span>标题</span>
            <input type="text" placeholder="文章标题"  v-model="textTitle" @input="titleChange"/>
          </div>
          <span class="box2">还可输入{{eltit}}个字符</span>
        </div>
        <div class="downbox">内容</div>
        <div ref="editorElem" class="editorElem"></div>
      </div>
      <div class="footer">
        <div class="left">
          <div class="top">标签</div>
          <div class="input">{{tagText}}</div>
          <div class="tag" hit>
            <el-tag type="info" hit @click="tag1">标签一</el-tag>
            <el-tag type="info" hit @click="tag2">标签二</el-tag>
            <el-tag type="info" hit @click="tag3">标签三</el-tag>
            <el-tag type="info" hit @click="tag4">标签四</el-tag>
            <el-tag type="info" hit @click="tag5">标签五</el-tag>
          </div>
        </div>
        <div class="right">
          <input type="text" placeholder="发表帖子"/>
          <el-button type="primary">发表帖子</el-button>
        </div>
      </div>
      </div>
    </div>
    <div class="laster">
      <div class="img"><img src="./image/logo.png" alt=""></div>
      <div class="text">
        <span>© Copyright 2022, 趣代码世界. All Rights Reserved.</span>
        <span>皖ICP备2022015871号</span>
        <span>皖公网安备 34019202002006号</span>
      </div>
    </div>
  </div>

</template>

<script>
import E from "wangeditor";
// import { mapState } from "vuex";
import dayjs from "dayjs";
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          date: "科大少年班“创新试点班”材料",
          name: "其他",
          address: "13:27",
          text: "好好好",
          city: "100/100",
        },
        {
          date: "用Scratch暴力解决数学题",
          name: "其他",
          address: "13:27",
          text: "太好了",
          city: "100/100",
        },
        {
          date: "NOI 2022年省内选拔的若干规定",
          name: "其他",
          address: "13:27",
          text: "非常好",
          city: "100/100",
        },
        {
          date: "【择校指南】信息学竞赛学子该选择哪些中学？",
          name: "其他",
          address: "13:27",
          text: "超级好",
          city: "100/100",
        },
      ],
      editor: null,
      text: null,
      activeName: "first",
      flag: false,
      tagText:'',
      textTitle:'',
      eltit:30,
      fff:false,
      pagination: `pager, next`,
      textTitle2:''
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem); //获取组件并构造编辑器
    this.editor.config.onchange = (html) => {
      // 编辑器里的内容

      this.text = this.editor.txt.text(); // 赋值给自己在data中定义的值
    };
    this.editor.create(); // 创建富文本实例
    // this.$store.dispatch("getUserInfo");
  },
  methods: {
    toSign() {
      this.$router.push({ name: "Sign" });
    },
    toLogin() {
      this.$router.push({ name: "Login" });
    },
    // outLogin() {
    //   localStorage.removeItem("NAME");
    //   localStorage.removeItem("IMG");
    //   localStorage.removeItem("TOKEN");
    //   location.reload();
    // },
    getEditor() {
      let myText;
      if (!this.text || this.text.split(";").indexOf("&nbsp") !== -1)
        return this.$message({
          type: "error",
          message: "输入不能为空",
        });
      if (this.text.length > 12) {
        myText = this.text.slice(0, 12) + "...";
      } else {
        myText = this.text;
      }
      var now = dayjs().format("YYYY/M/DD");
      var obj = {
        date: now,
        name: this.name,
        address: "科大先研院",
        text: myText,
      };
      this.tableData.push(obj);
    },
    watchInfo(row) {
      if (this.token) {
        this.$router.push({ name: "Detail" });
      } else {
        this.$router.push({ name: "Sign" });
      }
    },
    delect(row) {
      let flag = this.tableData.indexOf(row);
      this.tableData.splice(flag, 1);
    },
    toDetail(){
      this.$router.push({name:'Detail'})
    },
    tag1(){
      this.tagText = '标签一'
    },
    tag2(){
      this.tagText = '标签二'
    },
    tag3(){
      this.tagText = '标签三'
    },
    tag4(){
      this.tagText = '标签四'
    },
    tag5(){
      this.tagText = '标签五'
    },
    titleChange(){
      if(this.textTitle.trim().length <= 30){
        this.eltit = 30 - this.textTitle.trim().length
      }else if(this.textTitle.trim().length == 31){
        this.textTitle2 = this.textTitle
      }
      else{
        this.textTitle = this.textTitle2
        this.$message({
          type: "error",
          message: "输入不能超过30个字符",
        });
        this.fff = true;
      }
    },
    handleCurrentChange(page){
      if(page == 1){
        this.pagination = `pager, next`
       }else if(page == 5){
        this.pagination = `prev, pager`
       }
       else{
        this.pagination = `prev, pager, next`
       }

      }
  },
  computed: {
    // ...mapState({
    //   token: (state) => state.user.token,
    // }),
    // ...mapState({
    //   name: (state) => state.user.name,
    // }),
    // ...mapState({
    //   img: (state) => state.user.img,
    // }),
  },
  watch: {
    $route() {
      location.reload();
      console.log(111);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.content {
  width: 90vw;
  margin: 0 auto;
}
.header {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 50px;
    float: left;
    margin-left: 10px;
    width: 150px;
    img {
      height: 50px;
      width: 150px;
    }
  }
  .nav {
    ul {
      display: flex;
      justify-content: space-between;
      width: 400px;
      li {
        list-style: none;
        font-size: 20px;
        font-weight: 900;
      }
      li:hover {
        color: rgb(241, 241, 50);
      }
    }
  }
  .search {
    width: 280px;
    height: 42px;
    border: 2px solid rgb(241, 241, 50);
    border-radius: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .c1 {
      font-size: 15px;
      font-weight: 900;
      display: flex;
      align-items: center;
    }
    .icon {
      padding-right: 20px;
    }
  }
  .search:hover {
    border-color: rgba(160, 174, 192, var(--tw-border-opacity));
  }
  .sign_login {
    display: flex;
    width: 150px;
    align-items: center;
    height: 100%;
    font-size: 20px;
    font-weight: 900;
    .sign {
      border-right: 3px solid #000;
      padding-right: 10px;
    }
    .sign:hover {
      color: #409eff;
    }
    .login {
      padding-left: 10px;
    }
    .login:hover {
      color: #409eff;
    }
  }
  .haveToken {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      padding-right: 10px;
      img {
        display: inline-block;
        width: 40px;
        height: 40px;
      }
      .name {
      }
    }
    .login2 {
      padding-left: 10px;
    }
  }
}
.editorElem,
.tab {
  padding: 20px 20px;
  /deep/.el-tabs__item {
    /* 修改为您想要的文字大小 */
    font-size: 18px !important;
  }
}
.table {
  padding: 0 20px;
}
.buttonEditor {
  margin-left: 50px;
}
.page {
  text-align: right;
  margin-top: 20px;
  margin-right: 20px;
}
.body {
  background-color: #efefef;
  padding-bottom: 20px;
}

.biglafei {
  display: flex;
  align-items: center;
  .lafei {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.bigBox {
  display: flex;
  align-items: center;
  .box1 {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    span {
      font-weight: 700;
      margin-bottom: 5px;
    }
    input {
      width: 350px;
      height: 40px;
      border: 1px solid;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 16px;
    }
    input::-webkit-input-placeholder {
      color: rgb(203, 199, 199);
    }
  }
  .box2 {
    font-size: 18px;
    margin-top: 20px;
    margin-left: 20px;
  }
}
.downbox {
  font-size: 15px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: -10px;
}
.footer{
  margin: 20px 20px;
  display: flex;
  justify-content: space-between;
  .left{
    display: flex;
    flex-direction: column;
    .top{
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .input{
      width: 400px;
      height: 40px;
      border: 1px solid #efefef;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 16px;
      margin-bottom: 10px;
      color: #6c6363;
      padding-top: 15px;
    }
    .tag{
      .el-tag{
        border-radius: 50px;
        margin-right: 10px
      }
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    input {
      width: 350px;
      height: 40px;
      border: 1px solid;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 16px;
      
    }
    input::-webkit-input-placeholder {
      color: rgb(203, 199, 199);
    }
    .el-button{
      margin-left: 270px;
    }
  }
}
.bigfooter{
  background-color: #fff;
  margin: 0 20px;
  padding: 20px 0;
  margin-bottom: 20px;
}
.laster{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  .img{
    width: 150px;
    height: 50px;
    img{
      height: 100%;
    }
  }
  .text{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
}
</style>