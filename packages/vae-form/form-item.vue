<template>
  <el-form-item :rules="item.rules" :label="item.label" :prop="item.key">
    <!-- input -->
    <el-input
      v-if="item.type === 'input'"
      v-bind="$attrs"
      v-on="$listeners"
      :type="item.subtype"
      :placeholder="item.placeholder"
      :disabled="item.disable"
      :readonly="item.readonly"
      :autosize="item.autosize"
    ></el-input>

    <!-- select -->
    <el-select
      v-else-if="item.type === 'select'"
      v-bind="$attrs"
      v-on="$listeners"
      :multiple="item.multiple"
      :disabled="item.disabled"
      :multiple-limit="item.multipleLimit"
    >
      <el-option
        v-for="selectItem in item.options"
        :key="selectItem.value"
        :label="selectItem.label"
        :value="selectItem.value"
        :disabled="selectItem.disabled"
      >
      </el-option>
    </el-select>

    <!-- checkbox -->
    <el-radio-group
      v-else-if="item.type === 'checkbox'"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-radio
        v-for="radioItem in item.options"
        :key="radioItem.value"
        :label="radioItem.value"
      >
        {{ radioItem.label }}
      </el-radio>
    </el-radio-group>

    <!-- radio -->
    <el-radio-group
      v-else-if="item.type === 'radio'"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-radio
        v-for="radioItem in item.options"
        :key="radioItem.value"
        :label="radioItem.value"
      >
        {{ radioItem.label }}
      </el-radio>
    </el-radio-group>

    <!-- switch -->
    <el-switch
      v-else-if="item.type === 'switch'"
      v-bind="$attrs"
      v-on="$listeners"
    >
    </el-switch>

    <!-- slider -->
    <el-slider
      v-else-if="item.type === 'slider'"
      v-bind="$attrs"
      v-on="$listeners"
    ></el-slider>

    <!-- date-picker -->
    <el-date-picker
      v-else-if="item.type === 'date'"
      v-bind="$attrs"
      v-on="$listeners"
      type="date"
      :value-format="item.format"
      placeholder="选择日期"
    >
    </el-date-picker>

    <!-- color-picker -->
    <el-color-picker
      v-else-if="item.type === 'picker'"
      v-bind="$attrs"
      v-on="$listeners"
    ></el-color-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "form-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
