<template>
  <el-form
    :model="value"
    :inline="config.inline"
    :label-position="config.labelPosition"
    :label-width="config.labelWidth"
    :size="config.size"
    ref="form"
  >
    <formItem
      v-for="(item, index) in config.itemList"
      :key="index"
      :item="item"
      :value="value[item.key]"
      @input="handleInput($event, item.key)"
    ></formItem>
    <slot></slot>
  </el-form>
</template>

<script>
import formItem from "./form-item";
export default {
  name: "vaeForm",
  components: { formItem },
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init(type) {
      // 设置默认值
      let formData = {};
      if (type !== "default") {
        let formData = { ...this.value };
      }
      this.config.itemList.forEach(({ key, value, type }) => {
        if (formData[key] === undefined || formData[key] === null) {
          // formData[key] = value;
          this.$set(formData, key, value);
        }
      });
      console.log(formData);
      this.$emit("input", formData);
    },
    handleInput(val, key) {
      // 这里element-ui没有上报event，直接就是value了
      this.$emit("input", { ...this.value, [key]: val });
    },
    resetFields() {
      this.$refs["form"].resetFields();
      this.init("default");
    },
    validate(fn) {
      this.$refs["form"].validate((valid) => {
        console.log(valid);
        fn(valid);
      });
    },
  },
};
</script>

<style></style>
