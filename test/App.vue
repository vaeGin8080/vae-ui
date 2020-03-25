<template>
  <div id="app">
    <testButton></testButton>
  </div>
</template>

<script>
import testButton from "./test-button";
export default {
  name: "App",
  components: { testButton }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
