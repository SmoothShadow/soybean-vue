<template>
  <div class="flex justify-center flex-col items-center w-full h-full gap-30px">
    <h2 class="m-0 pt-20px">用Vite+TypeScript+Pinia构建的个人小站,仅作技术练习使用</h2>
    <div class="flex flex-row w-full justify-center items-start gap-20px">
      <el-card class="w-250px " shadow="hover" v-for="val in menus">
        <template #header>
          <div class="card-header text-center">
            <span>{{ val.label }}</span>
          </div>
        </template>
        <div v-for="item in val.children" class="text-center">
          {{ item.label }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouteStore } from '@/store/modules/route/index'
const routeStore = useRouteStore();
const menus = routeStore.$state.menus[0].children

defineOptions({ name: 'Introduction' })

</script>

<style lang="scss" scoped></style>