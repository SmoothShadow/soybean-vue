<template>
  <div class="w-full h-full">
    <el-container class="w-screen h-screen">
      <el-aside :class="!isCollapse ? 'w-200px' : 'w-65px'">
        <Aside />
      </el-aside>
      <el-container>
        <el-header class="flex items-center h-40px">
          <Header v-model:isCollapse="isCollapse"/>
        </el-header>
        <el-main class="bg-[#f6f9f8]">
          <router-view>

          </router-view>
        </el-main>
        <el-footer>
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
