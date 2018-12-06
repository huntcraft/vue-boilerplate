<template>
  <a href="#/" :class="className" @click.prevent="change">
    <img :src="imgUrl" alt="icon">
    <span>{{ name }}</span>
  </a>
</template>

<script>
import { navChange } from '@/store/home';
import style from './navItem.scss';

export default {
  name: 'NavItem',
  props: {
    navId: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({ style }),
  computed: {
    className() {
      return this.active ? `${style.container} active` : style.container;
    },
    imgUrl() {
      return `/images/mod_${this.navId}${this.active ? '_a' : ''}.png`;
    },
  },
  methods: {
    change() {
      if (this.active) {
        return;
      }
      this.$store.commit(navChange(this.navId));
    },
  },
};
</script>

<style lang="css">
</style>
