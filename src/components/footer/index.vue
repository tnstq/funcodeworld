<template>
  <!-- 结尾部分 -->
  <footer>
    <div class="footer">
      <div class="footer-logo">
        <img class="footer-logo-img" src="@/assets/logo.png" alt="" />
      </div>
      <div class="footer-text">
        <span>© Copyright 2022, 趣代码世界. All Rights Reserved.</span>
        <span>皖ICP备2022015871号</span>
        <span>皖公网安备 34019202002006号</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name:"Footer"
};
</script>

<style lang="less" scoped>
.footer-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  opacity: 0.7;
}
</style>