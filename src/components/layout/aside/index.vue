<template>
  <el-menu
  :default-active="currentRoute"
  class="h-screen overflow-x-hidden border-r-0"
  router
  mode="vertical"
  :collapse="isCollapse" 
  :collapse-transition="false"
  :style="{'--tw-text-opacity': themeStore.darkMode ? '0.82' : '1'}"
  >
    <el-sub-menu 
    v-for="menu in menus"
    :key="menu.path"
    :index="menu.path"
    class="text-center"
    >
      <template #title>
        <img :src="menu.icon" alt="" class="w-16px h-16px">
        <span class="w-screen">{{ menu.label }}</span>
      </template>

      <el-sub-menu 
      v-for="val in menu.children"
      :key="val.path"
      :index="val.path"
      >
        <template #title>
        <img :src="val.icon" alt="" class="w-16px h-16px">
        <span class="w-screen">{{ val.label }}</span>
        </template>
        <el-menu-item 
        v-for="item in val.children"
        :key="item.path"
        :index="item.path"
        >
          <img :src="item.icon" alt="" class="w-16px h-16px mr-10px">
          {{ item.label }}
        </el-menu-item>
        
      </el-sub-menu>

    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, inject, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useRouteStore } from '@/store/modules/route';
import { useThemeStore } from '@/store/modules/theme'
import { computed } from '@vue/reactivity';
defineOptions({ name: 'Aside' })

const isCollapse = ref(inject('isCollapse'))

const routerStore = useRouteStore() 
const menus = reactive(routerStore.menus)

const currentRoute = computed (() => useRouter().currentRoute.value.fullPath)

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>

</style>