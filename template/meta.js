module.exports = {
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '请输入你的姓名',
    },
    sex: {
      when: 'isNotTest',
      type: 'list',
      message: '请选择你的性别',
      choices: [
        {
          name: '男',
          value: 'boy',
          short: 'boy',
        },
        {
          name: '女',
          value: 'girl',
          short: 'girl',
        },
      ],
    },
    age: {
      when: 'isNotTest',
      type: 'string',
      message: '请输入你的年龄',
    }
  },
}
