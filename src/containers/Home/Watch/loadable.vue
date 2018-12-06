<template>
  <Watch v-show="active" v-if="show" />
</template>

<script>
import Loading from '@/components/Loading';

let init = false;
const Watch = () => ({
  component: import(/* webpackChunkName: "Watch" */ './index').then(data => {
    init = true;
    return data;
  }),
  loading: Loading,
});


export default {
  name: 'WatchLoadable',
  components: {
    Watch,
  },
  computed: {
    active() {
      return this.$store.state.home.current === 'watch';
    },
    show() {
      return init || this.active;
    },
  },
};
</script>
