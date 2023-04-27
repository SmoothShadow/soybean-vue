<template>
  <div class="w-full h-full">
    <el-container class="w-screen h-screen">
      <el-aside :class="!isCollapse ? 'w-200px' : 'w-65px'">
        <Aside class="dark:bg-[#18181c] dark:text-white dark:text-opacity-82"/>
      </el-aside>
      <el-container>
        <el-header class="flex items-center h-56px box-border global-shadow dark:bg-[#18181c] dark:text-white dark:text-opacity-82">
          <Header v-model:isCollapse="isCollapse"/>
        </el-header>
        <div class="top-56px z-999 w-full ">
          <Tabs class="global-shadow flex items-end dark:bg-[#18181c] dark:text-white dark:text-opacity-82"/>
        </div>
        <el-main class="bg-[#f6f9f8] dark:bg-[#101014]">
          <div class="bg-[#ffffff] dark:bg-[#18181c] w-full h-full rounded-16px">
            <router-view />
          </div>
        </el-main>
        <el-footer class="p-0 dark:bg-[#18181c]">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import '@/style/index.scss'
import Aside from '@/components/layout/aside/index.vue'
import Header from '@/components/layout/header/index.vue'
import Footer from '@/components/layout/footer/index.vue'
import Tabs from '@/components/layout/tabs/index.vue'
import { provide, ref } from 'vue';

const isCollapse = ref<boolean>(false)
provide('isCollapse', isCollapse)

</script>
<style lang="scss" scoped>
/* 加过渡给侧边导航*/
.el-aside {
  transition: width 0.3s;
  -webkit-transition: width 0.3;
  -moz-transition: width 0.3s;
  -o-transition: width 0.3s;
}
</style>
