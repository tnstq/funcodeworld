<template>
  <div>
    <!--导航栏 -->
    <!-- 导航栏 -->
    <nav>
      <div class="nav-swaper">
        <li class="nav-swaper-lists">
          <a href="index.html">
            <img src="@/assets/logo.png" />
          </a>
        </li>
        <li>
          <a href="index.html">
            <span class="nav-swaper-listscolor"> <b>首页</b></span>
          </a>
        </li>
        <li>
          <a href="index.html">
            <span class="nav-swaper-listscolor"> <b>作品</b> </span>
          </a>
        </li>
        <li>
          <a href="index.html">
            <span class="nav-swaper-listscolor"> <b>论坛</b></span>
          </a>
        </li>
        <li>
          <a href="index.html">
            <span class="nav-swaper-listscolor"> <b>创作</b> </span>
          </a>
        </li>
        <!-- 搜索框 -->
        <li class="nav-swaper-input">
          <div class="nav-swaper-input-outer">
            <div class="dropdown">
              <button class="dropbtn" id="dropbtn">作品</button>
              <input class="dropInp" id="dropInp" type="text" />
              <button class="dropserach">
                <svg t="1679726972013" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3614" width="16" height="16"><path d="M996.944196 911.473544l-197.051231-198.199103a443.142073 443.142073 0 1 0-355.202382 179.386768 440.017313 440.017313 0 0 0 265.540883-89.278875l197.051231 198.007791a63.770625 63.770625 0 1 0 89.661499-90.044123zM127.559265 446.585687a317.131318 317.131318 0 1 1 317.131318 318.853125 318.406731 318.406731 0 0 1-317.131318-318.853125z" fill="#2c2c2c" p-id="3615"></path></svg>
              </button>

              <div class="dropdown-content">
                <a
                  href="#"
                  target="_blank"
                  class="dropdown-contentone"
                  id="dropdown-contentone"
                  >作品</a
                >
                <a href="#" class="dropdown-contentone" id="dropdown-contenttwo"
                  >论文</a
                >
              </div>
            </div>
          </div>
        </li>
        <!-- ************************ 登录注册页面跳转*************************** -->
        <!-- 
        <li >
          <span class="nav-swaper-listscolor"
            ><a href="" target="_blank">登录</a></span
          >
          <span class="nav-swaper-listscolor"> | </span>
          <span class="nav-swaper-listscolor"
            ><a href="" target="_blank">注册</a></span
          >
        </li> -->
        <!-- 用来显示登录成功后的样式 -->
        <li class="userCenter">
          <div class="userCenter-avatar">
            
            <el-dropdown>
              <span class="el-dropdown-link"> <img src="@/assets/boy.png" /> </span>
              <el-dropdown-menu slot="dropdown" size="mini">
                <el-dropdown-item>帖子</el-dropdown-item>
                <el-dropdown-item>作品</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // 导航栏
  name: "NavigationBar",
};
</script>

<style lang="less" scoped>
.nav-swaper {
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-swaper-lists {
    a {
      img {
        display: inline-block;
        width: 180px;

      }
    }
  }

  //  用户登录成功后头像显示
  .userCenter {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid gray;
    margin-right: 30px;
    // 图片的大小设置
    .userCenter-avatar {
        img{
            width:30px;
            height: 30px;
            margin-right: 20px;
        }
        .el-dropdown{
             margin-left: 0px;
        }

        .el-dropdown-menu{
                width:10px;
            }
    }

    // 展示操作信息
    .showUser {
      li {
        display: inline-block;
        width: 40px;
        height: 30px;
        background: gray;
        border: 1px solid snow;
      }
    }
  }
  .nav-swaper-listscolor:hover {
    a {
      color: orange;
      border-bottom: 2px solid orange;
    }
    b {
      color: orange;
      border-bottom: 2px solid orange;
    }
  }

  // 下拉菜单
  .nav-swaper-input {
    .nav-swaper-input-outer:hover {
      border: 1px solid rgb(17, 12, 3);
    }
    .nav-swaper-input-outer {
      width: 180px;
      height: 30px;
      border: 1px solid orange;
      border-radius: 50px;
      .dropbtn {
        background-color: rgba(0, 0, 0, 0);
        color: black;
        // padding: 16px;
        margin-left: 10px;
        margin: 4px 10px;
        font-size: 10px;
        font-weight: bold;
        border: none;
        cursor: pointer;
      }

      /* 容器 <div> - 需要放置下拉内容 */
      .dropdown {
        position: relative;
        display: inline-block;
        .dropInp {
          position: absolute;
          top: 4px;
          left: 50px;
          // border:1px solid #2185D0;
          height: 20px;
          width: 70px;
        }
        .dropserach {
          position: absolute;
          top: 5px;
          left: 120px;
          // border:1px solid #2185D0;
          background-color: white;
          border-radius: 20px;
          height: 20px;
          width: 50px;
          svg {
            width: 20px;
            height: 18px;
          }
        }
        // .dropserach:hover {
        //   // border:1px solid #2185D0;
        //   background-color: rgba(255, 165, 0, 0.4);
        // }
      }

      /* 下拉内容（默认隐藏） */
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 70px;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      /* 下拉链接 */
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }

      /* 悬停时更改下拉链接的颜色 */
      .dropdown-content a:hover {
        background-color: #f1f1f1;
      }

      /* 悬停时显示下拉菜单  .dropdown:hover .dropdown-content */
      //   .dropbtn:hover ~.dropdown-content {
      //     display: block;
      //     // color: red;
      //   }
      .dropdown:hover .dropdown-content {
        margin: 0;
        display: block;
      }

      .dropInp:hover ~ .dropdown-content {
        margin: 0;
        display: none;
      }

      .dropserach:hover ~ .dropdown-content {
        margin: 0;
        display: none;
      }
    }
  }
}
</style>