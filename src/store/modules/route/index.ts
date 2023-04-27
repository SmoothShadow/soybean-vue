import { defineStore } from 'pinia'
import router from '@/router'

const modulesRoutes = import.meta.glob('/src/views/*/*/*/*.vue')

interface RouteState {
  menus: any[],
  breadcrumbMenu: App.menuOption[]
}

// 菜单路由信息
export const useRouteStore = defineStore('route-store', {
  state: ():RouteState => ({
    menus: [],
    breadcrumbMenu: []
  }),
  actions: {
    // 根据菜单添加路由
    setAll(menus: any[]) {
      this.menus = menus
      this.addRoute(menus)
    },
    // 遍历菜单添加路由
    addRoute(menus: any[]){
      menus.forEach((menu: any) => {
        if (menu.children && menu.children.length > 0){
          router.addRoute('root', {
            path: menu.path,
            name: menu.name,
            redirect: { name: menu.children[0].name }
          })
          this.addRoute(menu.children)
        } else {
          router.addRoute('root', {
            path: menu.path,
            name: menu.name,
            meta: { label: menu.label, icon: menu.icon },
            component: modulesRoutes[`/src/views/${menu.component}`],
            // component: () => import(`./src/views/${menu.component}`)
          })
        }
      })
    },
    updateRoute(menus: App.menuOption[]){
      this.breadcrumbMenu = menus
    }
  },
})