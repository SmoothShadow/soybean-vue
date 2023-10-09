import Mock from 'mockjs'
import userMock from './sys/user'
import logsMock from './raider/logs'
import deadMock from './raider/dead'

userMock.forEach((item) => {
  Mock.mock(item.url, item.type, item.result)
})

logsMock.forEach((item) => {
  Mock.mock(item.url, item.type, item.result)
})

deadMock.forEach((item) => {
  Mock.mock(item.url, item.type, item.result)
})