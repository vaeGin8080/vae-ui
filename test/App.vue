<template>
  <div id="app">
    <testButton v-if="false"></testButton>
    <div class="form">
      <testForm></testForm>
    </div>
  </div>
</template>

<script>
import testButton from "./test-button";
import testForm from "./test-form";
export default {
  name: "App",
  components: { testButton, testForm },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.form {
  padding: 20px;
  width: 500px;
  border: 1px solid #ccc;
  margin: 40px auto;
}
</style>
