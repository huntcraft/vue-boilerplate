<template>
  <div :class="style.wrapper">
    <div :class="style.container">
      <div :class="style.header">
        <a href="#/" @click.prevent="handleClick">
          <i class="material-icons">chevron_left</i>
        </a>
        <span>数仓工作平台</span>
      </div>
      <MainX />
      <FooterX />
    </div>
  </div>
</template>

<script>
import FooterX from './footer';
import MainX from './main';
import style from './style.scss';

export default {
  name: 'Home',
  components: {
    // 命名 Footer，eslint 会提示错误，不知道什么情况
    FooterX,
    MainX,
  },
  data: () => ({ style }),
  methods: {
    handleClick() {
      if (window.MobileJS) {
        window.MobileJS.quitSys();
      }
    },
  },
};
</script>
