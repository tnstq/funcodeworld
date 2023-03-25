<template>
  <div class="content">
    <!-- 头部导航栏 -->
    <NavigationBar></NavigationBar>
    <!-- 楼主的详细文章 -->
    <div class="page">
      <div class="box">
        <!-- 左边上面的查看回复 -->
        <div class="top">
          <div class="look">查看:17</div>
          <div class="re">回复:0</div>
        </div>
        <!-- 用户个人信息 -->
        <div class="userCenter">
          <div class="name">小帖</div>
          <div class="name-line"></div>
          <!-- 用户头像 -->
          <div class="userAvatat">
            <img src="./image/f90929eb7cc141e1a26264375566f6df.png" alt="" />
          </div>

          <!-- 个人经验信息 -->
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
          <!-- 发消息 关注按钮  -->
          <div class="left-aside-topbtn">
            <div class="btn">发消息</div>
            <!-- <div class="btn">+ 关注</div> -->
          </div>
        </div>
      </div>
      <!-- 右边的文章 -->
      <div class="bigbox">
        <div class="box2">
          <!-- 正文主标题 -->
          <div class="right-aside-title">
            <span class="right-aside-title-one"
              >两会期间说的“少儿编程”到底学的是什么？</span
            >
            <!-- 点赞、收藏、回复按钮 -->
            <div class="right-aside-title-btns">
              <button class="right-aside-title-two three-d">点赞</button>
              <button class="right-aside-title-two three-d">收藏</button>
              <button class="right-aside-title-two three-d" id="reserve">
                回复
              </button>
            </div>
          </div>
          <!-- 正文发表时间 -->
          <div class="header2">
            <div class="date">发表于2023-01-06 11:15:57</div>
          </div>
          <!-- 正文部分 -->
          <div class="mainText">
            <div class="articles">
              <p class="articleTitle">教育是什么？</p>
              <p>
                教育一直是各位家长长久以来所关注的话题，对于“少儿编程”这个新兴话题的讨论热度也是居高不下。另外，两会的召开，更有人大代表提出：建议研发统一的编程课程体系。
              </p>
            </div>
            <div class="articles">
              <p class="articleTitle">micropython简介什么是MicroPython?</p>
              <p>
                MicroPython包括在小型嵌入式开发板上运行的标准Python解释器。使用MicroPython您可以编写Python脚本来控制硬件。值得注意的是，这种嵌入式设备的固件通常以汇编，C或C
                ++编码，但是通过使用MicroPvthon，您可以获得与高级Pvthon几平相同的结果。
              </p>
            </div>
            <div class="articles">
              <p class="articleTitle">教育是什么？</p>
              <p>
                教育一直是各位家长长久以来所关注的话题，对于“少儿编程”这个新兴话题的讨论热度也是居高不下。另外，两会的召开，更有人大代表提出：建议研发统一的编程课程体系。
              </p>
            </div>
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
    <!-- 跟帖的人 -->
    <div class="page followers">
      <div class="box">
        <!-- 用户个人信息 -->
        <div class="userCenter">
          <div class="name">Swigetss</div>
          <div class="name-line"></div>
          <!-- 用户头像 -->
          <div class="userAvatat">
            <img src="./image/f90929eb7cc141e1a26264375566f6df.png" alt="" />
          </div>

          <!-- 个人经验信息 -->
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
          <!-- 发消息 关注按钮  -->
          <div class="left-aside-topbtn">
            <div class="btn">发消息</div>
            <!-- <div class="btn">+ 关注</div> -->
          </div>
        </div>
      </div>
      <!-- 右边的文章 -->
      <div class="bigbox">
        <div class="box2">
          <!-- 正文发表时间 -->
          <div class="header2 showTime">
            <div class="date">发表于2023-01-06 11:15:57</div>
          </div>
          <!-- 正文部分 -->
          <div class="mainText">
            <div class="articles reply">
              <p class="articleTitle">
                好的喔,周六看直播,s ooodh hasioh
                jsa为基础收藏家圣诞节安监处记得记得从点击接口创建d df
                fdfffffffffff
              </p>
              <p class="rpAdnReport"><span>回复</span> <span>举报</span></p>
            </div>
          </div>

          <!-- 所有用户回复的消息 -->
          <div class="userReply">
            <li>
              <div class="showUserComment">
                <p class="userComment">
                  <span class="userAvatar"
                    ><img src="@/assets/user.jpg" alt="" />
                  </span>
                  <span class="replyName">James</span>
                  :&nbsp;回复 &nbsp; <span class="replyName">jackchen</span>:
                  <span>在那个平台直播?</span>
                </p>
                <p class="rightTimeRep">
                  <span class="outer"
                    ><span>2022-10-12 17:31:28</span> <span>回复</span></span
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="showUserComment">
                <p class="userComment">
                  <span class="userAvatar"
                    ><img src="@/assets/user.jpg" alt="" />
                  </span>
                  <span class="replyName">James</span>
                  :&nbsp;回复 &nbsp; <span class="replyName">jackchen</span>:
                  <span>在那个平台直播?</span>
                </p>
                <p class="rightTimeRep">
                  <span class="outer"
                    ><span>2022-10-12 17:31:28</span> <span @click="replayMessage">回复</span></span
                  >
                </p>
              </div>
            </li>
            <li>
              <div v-show="showReplyMessage" class="showUserComment">
                <p class="userComment">
                  <span class="userAvatar"
                    ><img src="@/assets/user.jpg" alt="" />
                  </span>
                  <span class="replyName">James</span>
                  :&nbsp;回复 &nbsp; <span class="replyName">jackchen</span>:
                  <span>在那个平台直播?</span>
                </p>
                <p class="rightTimeRep">
                  <span class="outer"
                    ><span>2022-10-12 17:31:28</span> <span>回复</span></span
                  >
                </p>
              </div>
              <div v-show="showReplyTextarea" class="showReplyComment">
             
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="善语结善缘 恶语伤人心"
                  v-model="textarea"
                >
                </el-input>
                <el-button @click="closeMessage" type="primary" icon="el-icon-edit" >发送信息</el-button>
              </div>
            </li>
          </div>
        </div>
        <!-- 文章下面的 -->
      </div>
      <div class="text"></div>
    </div>
    <!-- 楼主下面的发送跟帖 -->
    <div class="footer2">
      <div class="right page">
        <div class="box">
        <!-- 用户个人信息 -->
        <div class="userCenter">
          <div class="name">Swigetss</div>
          <div class="name-line"></div>
          <!-- 用户头像 -->
          <div class="userAvatat">
            <img src="./image/f90929eb7cc141e1a26264375566f6df.png" alt="" />
          </div>

          <!-- 个人经验信息 -->
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
          <!-- 发消息 关注按钮  -->
          <div class="left-aside-topbtn">
            <div class="btn">发消息</div>
            <!-- <div class="btn">+ 关注</div> -->
          </div>
        </div>
      </div>
      </div>
      <div class="left">
        <!-- 富文本编辑器 -->
        <div id="wangeditor" class="wangeditor">
          <div ref="editorElem" class="editorElem"></div>
        </div>
        <!-- 回复按钮 -->
        <div class="booterbutton">
      <el-button type="primary">发表回复</el-button>
    </div>
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
      textarea: '',
      showReplyMessage:true,  // 用来判断是否展示回复消息
      showReplyTextarea:false, // 用来判断是否展示输入框
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
    // 点击回复 展示文本框
    replayMessage(){
        // 展示文本输入框，隐藏回复内容
        this.showReplyMessage=false
        this.showReplyTextarea= true
    },

    // 关闭消息框
    closeMessage(){
        this.showReplyMessage=true
        this.showReplyTextarea= false
    }
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
* {
  margin: 0;
  padding: 0;
  font-size: 15px;
}
.content {
  width: 90vw;
  margin: 0 auto;
}

.page {
  //   height: 100vh;
  display: flex;
  margin-bottom: 30px;
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

    // 用户的个人信息
    .userCenter {
      flex: 1;
      background-color: rgb(230, 233, 238);
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      .name {
        font-size: 20px;
        font-weight: 700;
        margin: 10px 0 8px 20px;
      }

      //   name下面的线条
      .name-line {
        margin: 5px auto;
        width: 90%;
        border-bottom: 2px dashed gray;
      }
      // 用户的头像
      .userAvatat {
        box-sizing: border-box;
        width: 250px;
        height: 250px;
        // background: snow;
        padding: 10px;
        img {
          width: 100%;
        }
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
      .left-aside-topbtn {
        .btn {
          display: inline-block;
          margin-top: 20px;
          margin-left: 40px;
          margin-bottom: 20px;
          width: 80px;
          height: 35px;
          background-color: #2185d0;
          border-radius: 10px;
          text-align: center;
          line-height: 35px;
          color: snow;
          font-weight: bold;
          font-size: 14px;
        }

        .btn:hover {
          cursor: pointer;
          background: #21ebff;
          color: #111;
          box-shadow: 0 0 50px #21ebff;
          transition: 0.5s;
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
    -ms-overflow-style: none;
    margin-left: 50px;

    // 正文主标题
    .right-aside-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .right-aside-title-one {
        font-size: 24px;
        line-height: 30px;
        font-weight: 560;
        color: #243e63;
      }

      .right-aside-title-btns {
        // margin-right: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;

        .right-aside-title-two {
          width: 70px;
          height: 30px;
          margin-left: 10px;
          cursor: pointer;
          border-radius: 10px;
          box-sizing: border-box;
        }

        /* 3d效果 */
        .three-d {
          color: #fff;
          background-color: #f1c40f;
          text-shadow: -2px 1px 2px rgb(209 132 0), -2px 1px 2px rgb(209 132 0),
            -2px 1px 2px rgb(209 132 0), -2px 1px 2px rgb(209 132 0),
            -2px 1px 2px rgb(209 132 0), -2px 1px 2px rgb(209 132 0);
          box-shadow: 0px 8px 0px 0px #f39c12;
          transition: all 0.5s;
        }
        .three-d:hover {
          background-color: #fcdc5e;
        }
        .three-d:active {
          transform: translate(0, 4px);
          box-shadow: 0px 1px 0px 0px #f39c12;
        }
      }
    }

    .header2 {
      .date {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 2px dashed gray;
      }
    }
    // 正文部分
    .mainText {
      .articles {
        margin: 10px 0;

        line-height: 25px;
        font-size: 16px;
        // letter-spacing: 0.5px;
        text-align: justify;
        font-family: "黑体";
        p {
          color: rgb(99, 99, 99);
        }
        // 小标题
        .articleTitle {
          font-weight: 600;
          font-size: 18px;
          color: black;
        }
      }
    }
  }
  .box2::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
}

// 后面的是恢复消息人的信息 和评论的样式，特有的
.followers {
  .bigbox {
    overflow: hidden;
    .showTime {
        width: 100vw;
    }
    // 正文部分
    .mainText {
      .reply {
        color: #636363;
        font-size: 14px;
        line-height: 40px;
        width: 100%;
        .articleTitle {
          color: #636363;
          font-size: 14px;
          line-height: 20px;
          width: 100%;
          margin-bottom: 50px;
        }
        .rpAdnReport {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 2px dashed gray;
        }
      }
    }

    // 用户回复的地方
    .userReply {
      // background: greenyellow;
      li {
        // 展示用户回复的地方
        margin-top: 20px;
        padding-bottom: 50px;
          border-bottom: 2px dashed gray;

        .showUserComment {
        //   padding: 0 0 20px 0;
          // 用户回复的具体信息
          .userComment {
            span {
              vertical-align: middle;
              margin-right: 4px;
              font-size: 13px;
            }
            .userAvatar {
              img {
                width: 25px;
                height: 25px;
              }
            }
            .replyName {
              color: rgb(72, 162, 198);
            }
          }

          // 用户回复的时间显示
          .rightTimeRep {
            position: relative;
            .outer {
              position: absolute;
              right: 0;
              span {
                font-size: 13px;
              }
            }
          }
        }

        // 展示文本域
        .showReplyComment{
            .el-button{
                width: 100px;
                height: 30px;
                margin-top: 10px;
                float: right;
            }
        }
      }
    }
  }
}
.bigbox {
  display: flex;
  flex-direction: column;
  .box3 {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    border-top: 2px dashed gray;
    padding-top: 20px;
  }
}
.footer2 {
  display: flex;

  .right {
    height: 100%;
    width: 250px;
    background-color: rgb(230, 233, 238);
    display: flex;
    flex-direction: column;

   
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
    .el-button{
                width: 100px;
                height: 30px;
                margin-top: 10px;
                float: right;
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