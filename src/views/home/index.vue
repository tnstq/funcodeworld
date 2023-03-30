<template>
  <div class="content">
    <NavigationBar />
    <div class="body">
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <div class="table">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column
                  fixed
                  prop="title"
                  label="标题"
                  width="650"
                  class="title"
                >
                  <template v-slot="{ row }">
                    <span
                      @click="toDetail(row)"
                      style="display: block; height: 100%; width: 100%"
                      >{{ row.title }}</span
                    >
                  </template>
                </el-table-column>
                <el-table-column prop="blogTags" label="标签" width="120">
                </el-table-column>
                <el-table-column prop="author" label="作者" width="120">
                </el-table-column>
                <el-table-column prop="views" label="查看/回复" width="120">
                </el-table-column>
                <el-table-column
                  prop="datetime"
                  label="发表时间"
                  width="300"
                  align="center"
                >
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热门" name="second">
            <div class="table" @click="toDetail">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column
                  fixed
                  prop="title"
                  label="标题"
                  width="650"
                  class="title"
                >
                </el-table-column>
                <el-table-column prop="blogTags" label="标签" width="120">
                </el-table-column>
                <el-table-column prop="author" label="作者" width="120">
                </el-table-column>
                <el-table-column prop="views" label="查看/回复" width="120">
                </el-table-column>
                <el-table-column
                  prop="datetime"
                  label="发表时间"
                  width="300"
                  align="center"
                >
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="精华" name="third">
            <div class="table" @click="toDetail">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column
                  fixed
                  prop="title"
                  label="标题"
                  width="650"
                  class="title"
                >
                </el-table-column>
                <el-table-column prop="blogTags" label="标签" width="120">
                </el-table-column>
                <el-table-column prop="author" label="作者" width="120">
                </el-table-column>
                <el-table-column prop="views" label="查看/回复" width="120">
                </el-table-column>
                <el-table-column
                  prop="datetime"
                  label="发表时间"
                  width="300"
                  align="center"
                >
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新回复" name="fourth"></el-tab-pane>
          <el-tab-pane label="最新发表" name="wu"></el-tab-pane>
        </el-tabs>
      </div>
      <el-pagination
        :layout="pagination"
        :total="pageAll.total"
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
            <input class="input" v-model="tagText" />
            <div class="tag" hit>
              <el-tag
                type="info"
                hit
                v-for="(tag, index) in tags"
                :key="index"
                @click="cTag(tag)"
                >{{ tag }}</el-tag
              >
            </div>
          </div>
          <div class="right">
            <!-- <input type="text" placeholder="发表帖子" /> -->
            <el-button type="primary" @click="send">发表帖子</el-button>
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
import { mapState } from "vuex";
import dayjs from "dayjs";
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      editor: null,
      text: null,
      activeName: "first",
      flag: false,
      tagText: "",
      textTitle: "",
      eltit: 30,
      pagination: `pager, next`,
      pageAll: {
        page: 1,
        pageSize: 5,
        total: 0,
        titleName:''
      },
      userInfo: {},
      invitation: {
        id: "null",
        title: "",
        userId: 2,
        blogTags: "",
        content: "",
        isTop: 0,
        isElite: 1,
        isHot: 0,
        views: 0,
        datetime: "2023-03-23 16:48:45",
      },
      // 当前的时间
      now: "",
      tags: ["python", "C++", "算法", "goLang", "java"],
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem); //获取组件并构造编辑器
    this.editor.config.onchange = (html) => {
      // 编辑器里的内容
      this.text = html;
      this.html = this.editor.txt.html(); // 赋值给自己在data中定义的值
      // console.log(this.html);
    };
    this.editor.create(); // 创建富文本实例
    // this.$store.dispatch("getUserInfo");
    this.getEassy();
    this.userInfo = JSON.parse(localStorage.getItem("USER"));
    this.now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  },
  methods: {
    toSign() {
      this.$router.push({ name: "Sign" });
    },
    toLogin() {
      this.$router.push({ name: "Login" });
    },
    // 点击tab栏切换函数
    handleClick(tab, event) {
      console.log(tab._props.name);
      let name = tab._props.name;
      if (name == "first") {
        this.getEassy();
      } else if (name == "second") {
        this.hotPage();
      } else if (name == "third") {
        this.hotPage();
      }
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
    toDetail(row) {
      console.log(row.id);
      this.$store.dispatch("getDetailId", row.id);
      this.$router.push({ name: "Detail" });
    },

    titleChange() {
      if (this.textTitle.trim().length <= 30) {
        this.eltit = 30 - this.textTitle.trim().length;
      } else {
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
      this.pageAll.page = page;
      this.getEassy();
    },
    // 自选小标签
    cTag(tag) {
      this.tagText = tag;
    },
    // 获取文章数据
    async getEassy() {
      let { page, pageSize } = this.pageAll;
      // const formData = new FormData();
      // formData.append('page', page);
      // formData.append('pageSize', pageSize);
      // console.log(formData);
      // console.log({page,pageSize});
      let result = await this.$API.reqAllpage({ page, pageSize });
      if (result.code == 200) {
        this.pageAll.total = result.data.total;

        this.tableData = result.data.records;
      }
    },
    async hotPage() {
      let { page, pageSize } = this.pageAll;
      let result = await this.$API.reqhotpage({ page, pageSize });
      // console.log(111);
      if (result.code == 200) {
        // console.log(result.data);
        this.tableData = result.data.records;
      }
    },
    async elitepagePage() {
      let { page, pageSize } = this.pageAll;
      let result = await this.$API.reqElitepage({ page, pageSize });
      // console.log(result);
      if (result.code == 200) {
        // console.log(result.data);
        this.tableData = result.data.records;
      }
    },
    async search() {
      this.pageAll.titleName = this.str
      let { page, pageSize,titleName } = this.pageAll;
      let result = await this.$API.reqSearchpage({ page, pageSize,titleName });
      if (result.code == 200) {
        this.pageAll.total = result.data.total;

        this.tableData = result.data.records;
      }
    },
    async send() {
      this.invitation.title = this.textTitle;
      this.invitation.userId = this.userInfo.id;
      this.invitation.blogTags = this.tagText;
      this.invitation.content = this.text;
      this.invitation.datetime = this.now;
      if (!this.textTitle || !this.tagText || !this.text) {
        return this.$notify.error({
          title: "错误",
          message: "文章信息未填写完整",
        });
      }
      await this.$API.reqSendin(this.invitation);
      this.$message({
        type: "success",
        message: "发帖成功~",
      });
      location.reload();
    },
  },
  computed: {
    ...mapState({
      str: (state) => state.user.str,
    }),
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
      // console.log(111);
    },
    str() {
      this.search()
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
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
  /deep/.cell {
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
/deep/.w-e-text-container,
/deep/.w-e-toolbar {
  z-index: 0 !important;
}
</style>