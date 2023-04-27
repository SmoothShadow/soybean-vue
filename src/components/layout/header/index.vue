<template>
  <!-- 侧边栏展开关闭 -->
  <div @click="toggle" class="cursor-pointer mr-10px h-20px">
    <el-icon v-if="!isCollapse" :size="20" color="#909399">
      <Fold />
    </el-icon>
    <el-icon v-else :size="20" color="#909399">
      <expand />
    </el-icon>
  </div>
  <!-- 面包屑导航 -->
  <div class="flex-grow-1">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item, index in breadcrumbMenu" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!-- 用户中心 -->
  <div class="h-full flex">
    <div class="w-40px h-full">
      <div class="flex items-center justify-center h-full cursor-pointer dark:hover:bg-[#333] hover:bg-[#f6f6f6]">
        <a href="https://github.com/SmoothShadow/soybean-vue" target="_blank">
          <svg t="1681204580502" class="icon w-20px h-20px fill-[#000000] dark:fill-[#ffffff]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1448" width="200" height="200"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" p-id="1449"></path></svg>
        </a>
      </div>
    </div>
    <div class="w-40px h-full" @click="toggleDark()">
      <div class="flex items-center justify-center h-full cursor-pointer dark:hover:bg-[#333] hover:bg-[#f6f6f6]">
        <svg t="1681204496581" v-if="!darkMode" class="icon w-20px h-20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1537" width="200" height="200"><path d="M524.8 938.666667h-4.266667a439.893333 439.893333 0 0 1-313.173333-134.4 446.293333 446.293333 0 0 1-11.093333-597.333334 432.213333 432.213333 0 0 1 170.666666-116.906666 42.666667 42.666667 0 0 1 45.226667 9.386666 42.666667 42.666667 0 0 1 10.24 42.666667 358.4 358.4 0 0 0 82.773333 375.893333 361.386667 361.386667 0 0 0 376.746667 82.773334 42.666667 42.666667 0 0 1 54.186667 55.04A433.493333 433.493333 0 0 1 836.266667 810.666667a438.613333 438.613333 0 0 1-311.466667 128z" fill="#231F20" p-id="1538"></path></svg>
        <!-- <img src="/src/assets/sun.svg" alt="" class="w-20px h-20px" v-else> -->
        <svg v-else t="1681204103009" class="icon w-20px h-20px fill-[#ffffff]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6241" width="200" height="200"><path d="M511.3 521.6m-191.1 0a191.1 191.1 0 1 0 382.2 0 191.1 191.1 0 1 0-382.2 0Z" p-id="6242"></path><path d="M511.3 243.6c-24 0-43.4-19.4-43.4-43.4V148c0-24 19.4-43.4 43.4-43.4s43.4 19.4 43.4 43.4v52.1c0.1 24.1-19.4 43.5-43.4 43.5zM511.3 938.5c-24 0-43.4-19.4-43.4-43.4V843c0-24 19.4-43.4 43.4-43.4s43.4 19.4 43.4 43.4v52.1c0.1 24-19.4 43.4-43.4 43.4zM314.8 325c-17 17-44.5 17-61.4 0l-36.9-36.9c-17-17-17-44.5 0-61.4s44.5-17 61.4 0l36.9 36.9c16.9 17 16.9 44.5 0 61.4zM806.2 816.4c-17 17-44.5 17-61.4 0l-36.9-36.9c-17-17-17-44.5 0-61.4 17-17 44.5-17 61.4 0l36.9 36.9c16.9 17 16.9 44.5 0 61.4zM314.8 718.1c17 17 17 44.5 0 61.4l-36.9 36.9c-17 17-44.5 17-61.4 0-17-17-17-44.5 0-61.4l36.9-36.9c16.9-16.9 44.4-16.9 61.4 0zM806.2 226.7c17 17 17 44.5 0 61.4L769.3 325c-17 17-44.5 17-61.4 0-17-17-17-44.5 0-61.4l36.9-36.9c16.9-16.9 44.4-16.9 61.4 0zM233.4 521.6c0 24-19.4 43.4-43.4 43.4h-52.1c-24 0-43.4-19.4-43.4-43.4s19.4-43.4 43.4-43.4H190c23.9-0.1 43.4 19.4 43.4 43.4zM928.3 521.6c0 24-19.4 43.4-43.4 43.4h-52.1c-24 0-43.4-19.4-43.4-43.4s19.4-43.4 43.4-43.4h52.1c24-0.1 43.4 19.4 43.4 43.4z" p-id="6243"></path></svg>
      </div>
    </div>
    <div class="w-40px h-full">
      <div class="flex items-center justify-center h-full cursor-pointer dark:hover:bg-[#333] hover:bg-[#f6f6f6]">
        <img src="/src/assets/avatar.jpeg" alt="" class="w-20px h-20px">
      </div>
    </div>
    <div class="h-full">
      <div class="flex items-center justify-center h-full cursor-pointer dark:hover:bg-[#333] hover:bg-[#f6f6f6]">
        <span class="leading-20px">SmoothShadow</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useRouteStore } from '@/store/modules/route/index'
import { useDark, useToggle } from '@vueuse/core'
import { watch } from 'vue';
import { useThemeStore } from '@/store/modules/theme'

defineOptions({ name: 'Header' })
//传递变量是否收齐
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true
  }
})
//自定义事件传递给父元素
interface Emits {
  (e: 'update:isCollapse', isCollapse: boolean): void;
}

const emit = defineEmits<Emits>();
//点击触发展开收齐
const toggle = () => {
  emit('update:isCollapse', !props.isCollapse)
}
//面包屑数据从pinia中获取
const routeStore = useRouteStore()
const breadcrumbMenu = computed(() => routeStore.breadcrumbMenu)
//用户中心图标
const userCenter = [
  {
    name: 'github',
    src: '/src/assets/github.svg',
  },
  {
    name: 'theme',
    src: '/src/assets/moon.svg',
  },
  {
    name: 'avatar',
    src: '/src/assets/avatar.jpeg',
  }
]
// 绑定暗黑模式
const darkMode = useDark()
const toggleDark = useToggle(darkMode)
//监听暗黑模式存入pinia
const themeStore = useThemeStore()
watch(
  () => darkMode,
  newValue => {
    themeStore.setMode(newValue.value)
  },
  {
    immediate: true,
    deep: true
  }
)
// interface Props {
//   isCollapse?: boolean
// }

// const props = withDefaults(defineProps<Props>(), {
//   isCollapse: false
// })

// interface Emits {
//   (e: 'update:isCollapse', isCollapsed: boolean): void;
// }

// const emit = defineEmits<Emits>();

// const isCollapsed = computed({
//   get() {
//     return props.isCollapse;
//   },
//   set(newValue: boolean) {
//     emit('update:isCollapse', newValue)
//   }
// })

// const toggle = () => {
//   isCollapsed.value = !isCollapsed.value
// }

</script>

<style lang="scss" scoped>

</style>