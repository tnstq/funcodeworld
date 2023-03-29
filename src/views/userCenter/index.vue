<template>
  <div>
    <!-- 修改用户信息 -->
    <div class="userInfo" v-if="showUserInfo">
      <el-upload
      class="avatar-uploader"
      action="/dev-api/invitation/page"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      
    </el-upload>
    <el-button type="primary" @click="changeInfo">提交更改</el-button>
    </div>
    <div class="personCenter">
      <!-- 用户简介 -->
      <div class="briefIntroduction">
        <!-- 用户简介信息内容 -->
        <div class="personContent">
          <div class="personAvatar" @click="changeUserInfo">
            <img src="" alt="" />
          </div>
          <div class="detailMessage">
            <li>{{userInfo.username}}</li>
            <li class="address">http:/funcodeworld .com/?34258</li>
            <li>
              <span class="num">发帖：38 </span>
              <span class="num num2"> 作品:60</span>
              <span class="num"> 粉丝:99</span>
            </li>
          </div>
        </div>
        <!-- 用户等级 -->
        <div class="personRank">
          <div class="rankLine">
            <p class="rankFull" style="background-color: orange">460</p>
            <p>850/1000</p>
          </div>
          <div><span>等级</span> <span>Lv.5</span></div>
        </div>
      </div>
      <!-- 用户详情 -->
      <div class="personDetail">
        <div class="showContent">
          <!-- 用户导航栏 -->
          <ul class="personNav">
            <li
              v-for="(item, index) in userLists"
              :key="index"
              :class="{ current: active == index }"
              @click="act(index)"
            >
              <span>{{ item }}</span>
            </li>
          </ul>
          <!-- 导航栏要显示对应的内容 -->
          <div v-show="active == 0" class="mianContent">
            <!-- 正文1 -->
            <div class="showLi-one">
              <!-- 每一项内容 -->
              <div class="everyContent" v-for="(invitation,index) in invitations" :key="index">
                <h1 class="main-title">
                  {{invitation.content}}
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCenter",
  data() {
    return {
      userLists: ["我的帖子", "我的回复", "喜欢", "收藏"],
      active: 0,
      // 用户头头像
      imageUrl: '',
      showUserInfo:false,
      /* 用户信息 */
      userInfo:{},
      /* 每一条帖子 */
      invitations:[]
    };
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('USER'));
    this.reqUserInf()
  },
  methods: {
    act(index) {
      this.active = index;
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 点击用户头像
      changeUserInfo(){
        this.showUserInfo = true;
      },
      // 提交按钮
      changeInfo(){
        this.showUserInfo = false;
      },
      // 获取用户信息
      async reqUserInf(){
        let result = await this.$API.reqUserInfo(this.userInfo.id)
        
        if(result.code == 200){
          this.invitations = result.data.invitations
          console.log(this.userInfo);
        }
      }
    }
};
</script>

<style lang="less" scoped>
* {
  font-size: 16px;
}
.briefIntroduction {
  margin: 20px 30px 20px 30px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 15px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
}

/* <!-- 用户简介信息内容 --> */
.personContent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}

.personAvatar {
  width: 60px;
  height: 60px;
  background-color: aliceblue;
}

.num {
  font-size: 14px;
  color: gray;
}

.num2 {
  /* display: block; */
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding: 0 10px;
}

.detailMessage li {
  font-size: 14px;
  line-height: 20px;
}

.address {
  color: gray;
}

/* 用户等级 */
.personRank {
}

.rankLine p {
  font-size: 1px;
  width: 220px;
  margin-bottom: 10px;
  background-color: aquamarine;
  border-radius: 25px;
  border: 1px solid gray;
}

.rankFull {
  /* border: 1px solid orange; */
}
/*  */
.personDetail {
  height: 800px;
  margin: 20px 30px 20px 30px;
  padding: 20px 0 20px 20px;
  background-color: lightgray;

  //  导航菜单
  .showContent {
    display: flex;
    // align-items: center;
    gap: 20px;

    // ul 导航栏边框
    .personNav {
      width: 100px;
      height: 280px;
      // padding-right: 20px;
      border-right: 2px solid black;
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: space-around;
      // gap: 20px;
      // background: red;
      li {
        height: 40px;
        width: 100%;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-right: 10px;
        span {
          font-size: 15px;
        }
      }
      .current {
        background: snow;
      }
    }

    //   导航菜单对应内用样式
    .mianContent {
      //   margin-left: 70px;
      .main-title{
        background-color: #fff;
        width: 80vw;
        height: 100px;
        margin-bottom: 20px;
        line-height: 100px;
        font-size: 24px;
        padding-left: 20px;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      }
    }
  }
}


</style>

<style>
.userInfo{
  position: absolute;
  left: 30%;
  top: 25%;
  background-color: #fff;
  width: 500px;
  height: 500px;
}
/* 用户头像上传的样式 */
.avatar-uploader{
margin: 50px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>