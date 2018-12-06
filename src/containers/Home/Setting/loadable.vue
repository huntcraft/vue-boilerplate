<template>
  <Setting v-show="active" v-if="show" />
</template>

<script>
import Loading from '@/components/Loading';

let init = false;
const Setting = () => ({
  component: import(/* webpackChunkName: "Setting" */ './index').then(data => {
    init = true;
    return data;
  }),
  loading: Loading,
});


export default {
  name: 'SettingLoadable',
  components: {
    Setting,
  },
  computed: {
    active() {
      return this.$store.state.home.current === 'sett';
    },
    show() {
      return init || this.active;
    },
  },
};
</script>
