<template>
  <div :class="style.wrapper">
    <Home />
    <router-view />
  </div>
</template>

<script>
import { countIncrease } from '@/store/app';
import Home from '../Home';
import style from './style.scss';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    style,
  }),
  computed: {
    countApp() {
      return this.$store.state.app.count;
    },
    countHome() {
      return this.$store.state.home.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit(countIncrease(2));
    },
  },
};

</script>
