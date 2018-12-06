<template>
  <div :class="style.wrapper">
    <div ref="header" :class="style.header">
      <a href="#/" @click.prevent="handleClick">
        <i class="material-icons">chevron_left</i>
      </a>
      <span>info page</span>
    </div>
    <div ref="main" :class="style.main">
      <div :class="style.box">{{ infoId }}</div>
      <div :class="style.box">{{ infoId }}</div>
      <div :class="style.box">{{ infoId }}</div>
    </div>
  </div>
</template>

<script>
import { goBack } from '@/common/path';
import BoxShadow from '@/common/boxshadow';
import style from './style.scss';


export default {
  name: 'Info',
  data: () => ({
    style,
    boxshadow: null,
  }),
  computed: {
    infoId() {
      return Math.round(Math.random() * 1000);
    },
  },
  mounted() {
    this.boxshadow = new BoxShadow(this.$refs.header, this.$refs.main);
  },
  destroy() {
    this.boxshadow.destroy();
  },
  methods: {
    handleClick() {
      goBack();
    },
  },
};
</script>
