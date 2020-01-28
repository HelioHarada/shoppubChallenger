<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '../node_modules/slick-carousel/slick/slick-theme.css';
export default {

  name: "app",
  data () {
    return {

    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
