import Mock from 'mockjs'

// ↓mock数据
const data = Mock.mock({
  'data': [
    {
      title: '前言',
      value: 0
    },
    {
      title: '第1-10层',
      value: 10
    },
    {
      title: '第11-20层',
      value: 20
    },
    {
      title: '第21-30层',
      value: 30
    },
    {
      title: '第31-40层',
      value: 40
    },
    {
      title: '第41-50层',
      value: 50
    },
    {
      title: '第51-60层',
      value: 60
    },
    {
      title: '第61-70层',
      value: 70
    },
    {
      title: '第71-80层',
      value: 80
    },
    {
      title: '第81-90层',
      value: 90
    },
    {
      title: '第91-100层',
      value: 100
    },
  ]
})
export default [
  // 获取死宫页面directory
  {
    url: new RegExp('/raider/dead/directory'),
    type: 'get',
    result: () => {
      return {
        code: 200,
        data: data.data,
        message: '请求成功',
      }
    },
  },
  {
    url: new RegExp('/raider/dead/table'),
    type: 'post',
    result: (option: any) => {
      let body = JSON.parse(option.body)
      let floor = body.floor
      console.log(floor)
      switch(floor) {
        case 10:
          return {
            code: 200,
            data: data.data,
            message: '请求成功',
          }
      }
    }
  }
]
