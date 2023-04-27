<template>
  <div class="h-44px w-full">
    <ChromeTab 
    v-for="tab in tabs"
    :key="tab.path"
    :is-active="tab.path === tabStore.activeTab"
    :closable="!(tab.path === '/home')"
    :dark-mode="themeStore.darkMode"
    class="shrink-1 min-w-0"
    @click="router.push({ path : tab.path})"
    @close="tabStore.handleRemoveTab(tab.path)"
    >
     <img :src="tab.icon" alt="" class="w-16px h-16px mr-10px">
      {{ tab.name }}
    </ChromeTab>
  </div>
</template>

<script setup lang="ts">
import { ChromeTab } from '@soybeanjs/vue-admin-tab'
import { computed } from '@vue/reactivity';
import { useTabStore } from '@/store/modules/tab';
import { useThemeStore } from '@/store/modules/theme'
import router from '@/router'

defineOptions({ name: 'Tabs' })

const tabStore = useTabStore()
const tabs = computed(() => tabStore.tabs)  

// const handleTabClick = (path: string) => {
//   router.push({ path })
// }

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>

</style>