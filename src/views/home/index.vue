<template>
  <div class="content">
    <NavigationBar />
    <div class="body">
      <div class="tab">
        <el-tabs v-model="activeName">
          <el-tab-pane label="全部" name="first" stretch="true"></el-tab-pane>
          <el-tab-pane label="热门" name="second"></el-tab-pane>
          <el-tab-pane label="精华" name="third"></el-tab-pane>
          <el-tab-pane label="最新回复" name="fourth"></el-tab-pane>
          <el-tab-pane label="最新发表" name="wu"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="table" @click="toDetail">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="date" label="标题" width="650" class="title">
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
      <el-pagination
        :layout="pagination"
        :total="50"
        class="page"
        style="margin-bottom: 10px"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
      <div class="bigfooter">
        <div id="wangeditor">
          <div class="bigBox">
            <div class="box1">
              <span>标题</span>
              <input
                type="text"
                placeholder="文章标题"
                v-model="textTitle"
                @input="titleChange"
                maxlength="30"
              />
            </div>
            <span class="box2">还可输入{{ eltit }}个字符</span>
          </div>
          <div class="downbox">内容</div>
          <div ref="editorElem" class="editorElem"></div>
        </div>
        <div class="footer">
          <div class="left">
            <div class="top">标签</div>
            <div class="input">{{ tagText }}</div>
            <div class="tag" hit>
              <el-tag type="info" hit @click="tag1">标签一</el-tag>
              <el-tag type="info" hit @click="tag2">标签二</el-tag>
              <el-tag type="info" hit @click="tag3">标签三</el-tag>
              <el-tag type="info" hit @click="tag4">标签四</el-tag>
              <el-tag type="info" hit @click="tag5">标签五</el-tag>
            </div>
          </div>
          <div class="right">
            <!-- <input type="text" placeholder="发表帖子" /> -->
            <el-button type="primary">发表帖子</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="laster">
      <div class="img"><img src="./image/logo.png" alt="" /></div>
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
      tagText: "",
      textTitle: "",
      eltit: 30,
      pagination: `pager, next`,
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem); //获取组件并构造编辑器
    this.editor.config.onchange = (html) => {
      // 编辑器里的内容
      console.log(html);
      this.html = this.editor.txt.html(); // 赋值给自己在data中定义的值
      // console.log(this.html);
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
    watchInfo(row) {iiiiiii
      /* if (this.token) {
        this.$router.push({ name: "Detail" });
      } else {
        this.$router.push({ name: "Sign" });
      } */
    },
    delect(row) {
      let flag = this.tableData.indexOf(row);
      this.tableData.splice(flag, 1);
    },
    toDetail() {
      this.$router.push({ name: "Detail" });
    },
    tag1() {
      this.tagText = "标签一";
    },
    tag2() {
      this.tagText = "标签二";
    },
    tag3() {
      this.tagText = "标签三";
    },
    tag4() {
      this.tagText = "标签四";
    },
    tag5() {
      this.tagText = "标签五";
    },
    titleChange() {
      if (this.textTitle.trim().length <=30) {
        this.eltit = 30 - this.textTitle.trim().length;
      } else{
        this.$message({
          type: "error",
          message: "输入不能超过30个字符",
        });
      }
    },
    handleCurrentChange(page) {
      if (page == 1) {
        this.pagination = `pager, next`;
      } else if (page == 5) {
        this.pagination = `prev, pager`;
      } else {
        this.pagination = `prev, pager, next`;
      }
    },
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
    text-align: center;
    
  }
}

.table {
  padding: 0 20px;
  /deep/.cell{
    font-size: 15px;
    font-weight: 700;
  }  
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
.footer {
  margin: 20px 20px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    .top {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .input {
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
    .tag {
      .el-tag {
        width: 50px;
        text-align: center;
        border-radius: 50px;
        margin-right: 10px;
      }
    }
  }
  .right {
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
    .el-button {
      margin-left: 270px;
      width: 100px;
      height: 50px;
      background-color: #ffdb97;
      font-size: 15px;
    }
  }
}
.bigfooter {
  background-color: #fff;
  margin: 0 20px;
  padding: 20px 0;
  margin-bottom: 20px;
}
.laster {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  .img {
    width: 150px;
    height: 50px;
    img {
      height: 100%;
    }
  }
  .text {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
}

</style>