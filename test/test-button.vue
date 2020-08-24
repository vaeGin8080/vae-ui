!<template>
  <div class="wrap">
    <div class="item" v-for="item in 11" :key="item">
      <!-- <vae-button :type="item % 2 == 0 ? 'primary' : 'success'"
        >hi {{ item }}</vae-button
      > -->
    </div>
  </div>
</template>

<script>
import img from "@/assets/logo.png";
export default {
  data() {
    return {
      src: img,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // margin: -0.5%;
  &::after {
    content: "";
    flex: auto; /* 或者flex: 1 */
  }
  .item {
    width: 32%;
    box-sizing: border-box;
    height: 164px;
    background: olivedrab;
    line-height: 164px;
    color: white;
    margin: 0.5%;
  }
}</style
>>
