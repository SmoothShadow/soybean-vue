import http from '@/utils/http/index'

export default {
  // 查询目录
  getDirectory: () => {
    return http.get('/raider/dead/directory')
  },
  //获取楼层对应表格
  getTable: (param: object) => {
    return http.post('/raider/dead/table', param)
  },
}