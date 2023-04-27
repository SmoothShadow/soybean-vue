import { defineStore } from 'pinia'
import router from '@/router'
interface TabState {
  tabs: App.tabOption[],
  activeTab: string
}

// 标签页信息
export const useTabStore = defineStore('tab-store', {
  state: ():TabState => ({
    tabs: [],
    activeTab: ''
  }),
  actions: {
    // 添加标签
    addTab(tab: App.tabOption) {
      if(!this.tabs.some(val => val.path === tab.path)) {
        this.tabs.push(tab)
      }
    },
    updateActiveTab(path: string) {
      this.activeTab = path
    },
    handleRemoveTab(path: string) {
      if(path === this.activeTab){
        const currentIndex = this.tabs.findIndex(val => val.path === path)
        this.tabs.splice(currentIndex, 1)
        const currentTab = this.tabs[currentIndex] || this.tabs[currentIndex - 1]
        router.push({ path : currentTab.path })
      } else {
        this.tabs = this.tabs.filter(val => val.path !== path)
      }
    }
  },
})