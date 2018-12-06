<template>
  <Find v-show="active" v-if="show" />
</template>

<script>
import Loading from '@/components/Loading';

let init = false;
const Find = () => ({
  component: import(/* webpackChunkName: "Find" */ './index').then(data => {
    init = true;
    return data;
  }),
  loading: Loading,
});


export default {
  name: 'FindLoadable',
  components: {
    Find,
  },
  computed: {
    active() {
      return this.$store.state.home.current === 'find';
    },
    show() {
      return init || this.active;
    },
  },
  // watch: {
  //   active() {
  //     if (this.checked) {
  //       return;
  //     }
  //     if (init) {
  //       this.checked = true;
  //     }
  //   },
  // },
};
</script>
