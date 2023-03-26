<template>
  <div>
    <div class="personCenter">
      <!-- 用户简介 -->
      <div class="briefIntroduction">
        <!-- 用户简介信息内容 -->
        <div class="personContent">
          <div class="personAvatar"><img src="" alt="" /></div>
          <div class="detailMessage">
            <li>James</li>
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
          <div v-show="active == 0" class="pmd-navShowContent">
            <!-- 正文1 -->
            <div class="showLi-one">
              <!-- 每一项内容 -->
              <div class="everyContent">
                <h1 class="main-title">
                  <strong>▌</strong> 参加ICC竞赛活动需要收取报名费吗?
                </h1>
                <span>
                  不收费。根据教育部办公厅等四部门印发《面向中小学生的全国性竞赛活动管理办法》的管理规定，2022-2025年度全球发明大会中国区竞赛活动不向参赛选手收取报名费用</span
                >
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
    };
  },

  methods: {
    act(index) {
      this.active = index;
    },
  },
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
    justify-content: space-between;
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
        span{
            
            font-size: 15px;
        }
      }
      .current {
        background: snow;
      }
    }

    //   导航菜单对应内用样式
    .pmd-navShowContent {
        height: 600px;
      background: red;
    //   margin-left: 70px;
    }
  }
}
</style>