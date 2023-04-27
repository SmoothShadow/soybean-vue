import { createRouter, createWebHashHistory } from 'vue-router';
import { useRouteStore } from '@/store/modules/route/index'
import { useTabStore } from '@/store/modules/tab/index'
import NProgress from '@/utils/progress'
import { getBreadcrumbMenu } from '@/store/modules/utils';

const menus: App.menuOption[] = [
  {
    path: '/ff14',
    name: 'ff14',
    label: 'FF14',
    icon: './src/assets/ff14.ico',
    children: [
      {
        path: '/ff14/raider',
        name: 'ff14_raider',
        label: 'PVE攻略',
        icon: './src/assets/sword.png',
        children: [
          {
            path: '/ff14/raider/log',
            name: 'ff14_raider_log',
            label: 'LOGS指引',
            icon: './src/assets/logs.png',
            component: 'ff14/raider/log/index.vue'
          },
          {
            path: '/ff14/raider/dead',
            name: 'ff14_raider_dead',
            label: '死者宫殿',
            icon: './src/assets/dead.png',
            component: 'ff14/raider/dead/index.vue'
          },
          {
            path: '/ff14/raider/sky',
            name: 'ff14_raider_sky',
            label: '天之御柱',
            icon: './src/assets/sky.png',
            component: 'ff14/raider/sky/index.vue'
          },
        ]
      },
      {
        path: '/ff14/hunter',
        name: 'ff14_hunter',
        label: '狩猎FATE',
        icon: './src/assets/hunter.png',
        children: [
          {
            path: '/ff14/hunter/hunt',
            name: 'ff14_hunter_hunt',
            label: '国区狩猎',
            icon: './src/assets/hunt.png',
            component: 'ff14/hunter/hunt/index.vue'
          },
          {
            path: '/ff14/hunter/fate',
            name: 'ff14_hunter_fate',
            label: '特殊FATE',
            icon: './src/assets/fate.png',
            component: 'ff14/hunter/fate/index.vue'
          }
        ]
      },
      {
        path: '/ff14/tool',
        name: 'ff14_tool',
        label: 'PVX工具',
        icon: './src/assets/tool.png',
        children: [
          {
            path: '/ff14/tool/house',
            name: 'ff14_tool_house',
            label: '售楼中心',
            icon: './src/assets/house.png',
            component: 'ff14/tool/house/index.vue'
          },
          {
            path: '/ff14/tool/fish',
            name: 'ff14_tool_fish',
            label: '渔场分布图',
            icon: './src/assets/fish.png',
            component: 'ff14/tool/fish/index.vue'
          },
          {
            path: '/ff14/tool/marco',
            name: 'ff14_tool_marco',
            label: '宏折叠教程',
            icon: './src/assets/marco.png',
            component: 'ff14/tool/marco/index.vue'
          },
          {
            path: '/ff14/tool/dress',
            name: 'ff14_tool_dress',
            label: '光之幻化站',
            icon: './src/assets/dress.png',
            component: 'ff14/tool/dress/index.vue'
          },
          {
            path: '/ff14/tool/equip',
            name: 'ff14_tool_equip',
            label: '战职配装器',
            icon: './src/assets/equip.ico',
            component: 'ff14/tool/equip/index.vue'
          }
        ]
      }
    ]
  }
]

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/layout/index.vue'),
    redirect: { name: 'home' },
    children: [
      //首页
      {
        path: '/home',
        name: 'home',
        meta: {
          label: '主页',
          icon: '/cat.svg'
        },
        component: () => import('@/views/Home.vue')
      },
    ]
  },
  // ↓404
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/error/404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
let hasRoute = true
// ↓全局前置守卫
router.beforeEach(async to => {
  NProgress.start()
  const routeStore = useRouteStore()
  // 添加路由
  routeStore.setAll(menus)
  if (to.path !== '/' && to.path !== '/home'){
    // routeStore.setAll(menus)
    if(hasRoute){

      // tab标签主页默认添加
      const tabStore = useTabStore()
      let tab: App.tabOption = {
        name: '主页',
        path: '/home',
        icon: '/cat.svg'
      }
      tabStore.addTab(tab)

      hasRoute = false
      router.push({ ...to, replace: true })
    }
  }
})

// ↓全局后置钩子
router.afterEach((to) => {
  if(to.name){
    const routeStore = useRouteStore()
    const tabStore = useTabStore()
    routeStore.updateRoute(getBreadcrumbMenu(menus, to.name as string))
    tabStore.updateActiveTab(to.fullPath)
    if(to.meta.label && to.meta.icon){
      let tab: App.tabOption = {
        name: to.meta.label as string,
        path: to.fullPath,
        icon: to.meta.icon as string
      }
      tabStore.addTab(tab)
    }
  }
  NProgress.done()
})

export default router