import http from '@/utils/http/index'

export default {
  // 查询
  search: () => {
    return http.get('/raider/logs')
  },
}
