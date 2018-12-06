<template>
  <div :class="style.main">
    <Setting />
    <Home />
    <Watch />
    <Find />
    <Work />
  </div>
</template>

<script>
import Home from './Home/loadable';
import Watch from './Watch/loadable';
import Setting from './Setting/loadable';
import Work from './Work/loadable';
import Find from './Find/loadable';
import style from './main.scss';

export default {
  name: 'Main',
  components: {
    Home,
    Watch,
    Setting,
    Find,
    Work,
  },
  data: () => ({ style }),
};
</script>
