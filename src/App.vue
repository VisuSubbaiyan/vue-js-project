<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Vendors from './components/Verndors/Vendors.vue';

export default {
  name: "app"
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
