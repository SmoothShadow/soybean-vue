
declare namespace App {
  // 单个路由接口类型
  interface menuOption {
    path: string,
    name: string,
    label: string,
    icon: string,
    component?: string,
    children?: menuOption[]
  }

  // 单个标签接口类型
  interface tabOption {
    name: string,
    path: string,
    icon: string
  }
}