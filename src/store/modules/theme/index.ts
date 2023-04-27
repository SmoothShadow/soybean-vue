import { defineStore } from 'pinia'

// 定义主题模式Store
export const useThemeStore = defineStore('theme-store', {
  state: () => ({
    darkMode: false
  }),
  actions: {
    setMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
  },
})
