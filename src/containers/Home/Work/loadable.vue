<template>
  <Work v-show="active" v-if="show" />
</template>

<script>
import Loading from '@/components/Loading';

let init = false;
const Work = () => ({
  component: import(/* webpackChunkName: "Work" */ './index').then(data => {
    init = true;
    return data;
  }),
  loading: Loading,
});


export default {
  name: 'WorkLoadable',
  components: {
    Work,
  },
  computed: {
    active() {
      return this.$store.state.home.current === 'work';
    },
    show() {
      return init || this.active;
    },
  },
};
</script>
