<template>
  <vae-form ref="form" :config="config" v-model="form">
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleRestart">清空</el-button>
  </vae-form>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      config: {
        inline: false,
        labelPosition: "left",
        labelWidth: "80px",
        size: "small",
        statusIcon: true,
        itemList: [
          {
            type: "input",
            label: "姓名",
            disable: false,
            readonly: false,
            value: "",
            placeholder: "请输入姓名",
            required: true,
            rules: [
              { required: true, message: "请输入姓名", trigger: "blur" },
              {
                min: 3,
                max: 5,
                message: "长度在 3 到 5 个字符",
                trigger: "blur",
              },
            ],
            key: "name",
            subtype: "text",
          },
          {
            type: "radio",
            label: "性别",
            value: "0",
            button: false,
            border: true,
            rules: [],
            key: "gender",
            options: [
              {
                value: "0",
                label: "男",
                disabled: false,
              },
              {
                value: "1",
                label: "女",
                disabled: false,
              },
            ],
          },
          {
            type: "checkbox",
            label: "爱好",
            value: ["Vue"],
            rules: [],
            key: "hobby",
            options: [
              {
                value: "a",
                label: "Vue",
              },
              {
                value: "b",
                label: "React",
              },
              {
                value: "c",
                label: "Angular",
              },
            ],
          },
          {
            type: "radio",
            label: "喜好",
            value: "a",
            rules: [],
            key: "happy",
            options: [
              {
                value: "a",
                label: "Vue",
              },
              {
                value: "b",
                label: "React",
              },
              {
                value: "c",
                label: "Angular",
              },
            ],
          },
          {
            type: "switch",
            label: "是否推荐",
            key: "isTrue",
          },
          {
            type: "slider",
            label: "滑块",
            key: "slider",
          },
          {
            type: "date",
            label: "日期",
            key: "date",
            format: "yyyy-MM-dd",
          },
          {
            type: "picker",
            label: "颜色",
            key: "color",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log(JSON.stringify(this.form));
          this.$message.success(JSON.stringify(this.form));
        }
      });
    },
    handleRestart() {
      this.$refs["form"].resetFields();
    },
  },
};
</script>

<style></style>
