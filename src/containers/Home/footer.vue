<template>
  <div :class="style.wrapper">
    <NavItem
      v-for="item in navGroup"
      :key="item.navId"
      :active="current === item.navId"
      v-bind="item"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavItem from './navItem';
import style from './footer.scss';

const navGroup = [
  { navId: 'watch', name: '监控' },
  { navId: 'find', name: '发现' },
  { navId: 'home', name: '首页' },
  { navId: 'work', name: '工作' },
  { navId: 'setting', name: '设置' },
];

export default {
  name: 'Footer',
  components: {
    NavItem,
  },
  data: () => ({
    style,
    navGroup,
  }),
  computed: {
    ...mapState({
      current: state => state.home.current,
    }),
  },
};
</script>
