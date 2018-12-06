<template>
  <div :class="style.wrapper">
    <h4>HOME</h4>
    <router-link :to="{ name: 'info' }">page info</router-link>
  </div>
</template>

<script>
import style from './style.scss';

export default {
  name: 'Home',
  data: () => ({ style }),
  created() {
    // console.log('created');
  },
};
</script>
