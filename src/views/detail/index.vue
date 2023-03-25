<template>
  <div class="content">
    <!-- 头部导航栏 -->
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
        <div class="sign">登录</div>
        <div class="login">注册</div>
      </div>
      <div class="haveToken" v-else>
        <div class="user">
          <img :src="img" />
        </div>
        <div class="login2" @click="outLogin">退出登录</div>
      </div>
    </div>
    <!-- 楼主评论 -->
    <div class="page">
      <div class="box">
        <!-- 左边上面的查看回复 -->
        <div class="top">
          <div class="look">查看:17</div>
          <div class="re">回复:0</div>
        </div>
        <!-- 左边下面的用户头像信息等 -->
        <div class="footer">
          <div class="name">小帖</div>
          <img src="./image/f90929eb7cc141e1a26264375566f6df.png" alt="" />
          <div class="haoduohua">
            <span
              ><div>30</div>
              <div>帖子</div></span
            >
            <span class="center">
              <div>Lv1</div>
              <div>等级</div></span
            >
            <span
              ><div>42</div>
              <div>金币</div></span
            >
          </div>
          <div class="button">
            <el-button type="primary">发消息</el-button>
            <el-button type="primary"
              ><i class="el-icon-plus"></i> 关注</el-button
            >
          </div>
        </div>
      </div>
      <!-- 右边的文章 -->
      <div class="bigbox">
        <div class="box2">
          <div class="header">
            <div>科大少年班“创新试点班”材料</div>
            <div class="button">
              <div class="img">
                <!-- 文章上的三个按钮 -->
              </div>
              <el-button type="danger"
                >打赏<i class="el-icon-present" style="margin-left: 10px"></i
              ></el-button>
              <el-button type="warning"
                >分享
                <i class="el-icon-s-promotion" style="margin-left: 10px"></i
              ></el-button>
              <el-button type="info"
                >收藏
                <i class="el-icon-folder-opened" style="margin-left: 10px"></i
              ></el-button>
            </div>
          </div>
          <div class="header2">
            <div class="date">发表于2023-01-06 11:15:57</div>
          </div>
          <!-- 正文部分 -->
          <div class="body">
            <div>
              教育一直是各位家长长久以来所关注的话题，对于“少儿编程”这个新兴话题的讨论热度也是居高不下。另外，两会的召开，更有人大代表提出：建议研发统一的编程课程体系。
            </div>
            <br />
            <div>
              国家的重视，政策的支持，无一不在告诉我们编程在未来对于孩子的重要性，提高智能时代青少年儿童的综合素质刻不容缓。
            </div>
            <br />
            <div class="hhh">为什么要学编程</div>
            <br />
            <div>
              现在任何行业都离不开计算机，会编程这项技能，在求职时就如同90年代会英语一样抢手。同样，学习编程，也不是为了将来当程序员。
            </div>
            <br />
            <div>
              而是为在自己行业里获得更多的机会，
              比如说做财务的，工作中少不了和Excel表打交道，即使对每个菜单功能都很熟悉，还是有需要定制一些专门的查询功能，这时编程就是不可或缺的技能。
            </div>
            <br />
            <div>编程学什么</div>
            <br />
            <div>
              每次说起编程，被问到的第一个问题往往是“学哪种编程语言好”？
            </div>
            <br />
            <div>
              以前总觉得C++语言对初学者太难了，这个想法在前些年某个高中编程赛被彻底颠覆。一支由三个分别是五年级，七年级和八年级亚裔男孩组成的队伍特别醒目，年龄比其他选手小很多，却在由各个学区优胜者组成56支高中编程队脱颖且名列第九。这三个孩子就是用C语言写的程序，C++语言也是他们唯一接触过的编程语言。
            </div>
            <br />
            <div>
              思维指导行动：未来人人都会写代码，但程序设计是否简洁高效，就得在思维上见高低了。十年前，卡耐基梅隆大学计算机教授Jeannette
              Wing 提出Computational Thinking
              “编程思维”的概念，指认识问题和解决问题的思维方式，而这种思维方式可以跨界应用到其他领域的学习和实践中。
            </div>
            <br />
            <div>
              也就是说和编程语言相比，编程思维是内功心法，在此基础上，学习和使用哪种语言，犹如使用哪种兵器，只是工具层面上的东西。现在让孩子接触编程的核心目的，是为了培养孩子的编程思维。
            </div>
            <br />
            <div class="hhh">什么是编程思维</div>
            <br />
            <div>
              编程思维本质上来说，就是能够把现实生活中的复杂问题，逐步拆分成可理解的小问题，（Decomposition
              拆分），接着根据已有的知识和经验，找出新问题和以前解决过的问题的相似性，举一反三琢磨出规律（Pattern
              Recognition
              模式识别）,然后将问题里涉及的数据抽象（Abstraction）到数据结构（变量，数组，链表等等），把数据处理过程可重复执行部分抽象（Abstraction）成函数模块，通过循环执行，最后根据前三步的分析成果，设计步骤，写出算(Algorithms)，从而解决问题。
            </div>
            <br />
            <div>
              编程思维本身是一个非常抽象的概念，下面举个例子来为大家详细解释一下它的四个组成模块。
            </div>
            <br />
            <div class="hhh">编程思维1-2-3-4</div>
            <br />
            <div>
              我们都听说过这样一个故事：数学家高斯在三年级时候，老师要求从1+2+3开始一直加到100，其他同学都费劲的一个数一个数的加，只有小高斯注意到了这些数可以两两配对，相加和为101：
            </div>
            <br />
            <div>1+100=101</div>
            <br />
            <div>2+99=101 等等</div>
            <br />
            <div>一共有50对，最后的和可以用乘法来做：（50X101）=5050</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
            <div>1111111111111111111111111111111111111111111</div>
            <br />
          </div>
        </div>
        <!-- 文章下面的 -->
        <div class="box3">
          <div>回复</div>
          <div>举报</div>
        </div>
      </div>
      <div class="text"></div>
    </div>
    <!-- 楼主下面的发送跟帖 -->
    <div class="footer2">
      <div class="right">
        <h1>游客</h1>
        <img src="./image/avatar.webp" alt="" />
        <div class="haoduohua">
          <span
            ><div>30</div>
            <div>帖子</div></span
          >
          <span class="center">
            <div>Lv1</div>
            <div>等级</div></span
          >
          <span
            ><div>42</div>
            <div>金币</div></span
          >
        </div>
        <div class="button"><el-button type="primary">发消息</el-button></div>
      </div>
      <div class="left">
        <!-- 富文本编辑器 -->
        <div id="wangeditor" class="wangeditor">
          <div ref="editorElem" class="editorElem"></div>
        </div>
      </div>
    </div>
    <div class="booterbutton">
      <el-button type="primary">发表回复</el-button>
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
export default {
  name: "Detail",
  data() {
    return {
      value: new Date(),
      editor: null,
    };
  },
  mounted() {
    //methods里创建调用、或是mounted里面直接生产
    this.editor = new E(this.$refs.editorElem); //获取组件并构造编辑器
    this.editor.create(); // 创建富文本实例
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    // ...mapState({
    //   name: (state) => state.user.name,
    // }),
    // ...mapState({
    //   img: (state) => state.user.img,
    // }),
  },
};
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  font-size: 15px;
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
.page {
  height: 100vh;
  display: flex;
  .box {
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top {
      height: 80px;
      background-color: rgb(230, 233, 238);
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .look {
        border-right: 1px solid #000;
        padding-right: 10px;
      }
      .re {
        padding-left: 10px;
      }
    }

    .footer {
      flex: 1;
      background-color: rgb(230, 233, 238);
      display: flex;
      flex-direction: column;
      .name {
        font-size: 20px;
        font-weight: 700;
        margin: 10px 10px;
      }
      .haoduohua {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .center {
          border-right: 1px solid #000;
          border-left: 1px solid #000;
          margin: 0 20px;
          padding: 0 20px;
        }
      }
      .button {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        .el-button {
          box-sizing: border-box;
        }
      }
    }
  }
  .box2 {
    height: 80%;
    flex: 1;
    overflow: scroll;

    margin-bottom: 50px;
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */

    /* background-color: red; */
    margin-left: 50px;
    .header {
      font-size: 30px;
      margin-top: -40px;
      display: flex;
      justify-content: left;
      .button {
        margin-left: 50px;
        position: relative;
        .img {
          position: absolute;
          left: 30px;
          top: -10px;
          width: 32px;
          height: 32px;
          z-index: 999;
        }
      }
    }
    .header2 {
      .date {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px dashed #000;
      }
    }
    .body {
      .hhh {
        font-weight: 700;
      }
    }
  }
  .box2::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
}
.bigbox {
  display: flex;
  flex-direction: column;
  .box3 {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    border-top: 1px dashed #000;
    padding-top: 20px;
  }
}
.footer2 {
  display: flex;
  margin-top: 100px;
  height: 50vh;

  .right {
    height: 100%;
    width: 250px;
    background-color: rgb(230, 233, 238);
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      margin-left: 25px;
    }
    img {
      width: 200px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    .haoduohua {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .center {
        border-right: 1px solid #000;
        border-left: 1px solid #000;
        margin: 0 20px;
        padding: 0 20px;
      }
    }
    .button {
      margin-left: 20px;
      margin-top: 20px;
    }
  }
  .left {
    flex: 1;
    height: 100%;
    margin-left: 50px;
    .wangeditor {
      height: 100%;
      width: 100%;
      .editorElem {
        height: 100%;
        width: 100%;
      }
    }
  }
}
.booterbutton {
  display: flex;
  margin-left: -800px;
  justify-content: center;
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

@keyframes change {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(50px) rotate(360deg);
    height: 50px;
    width: 50px;
  }
}
</style>