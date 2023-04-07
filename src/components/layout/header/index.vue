<template>
  <div @click="toggle" class="cursor-pointer mr-10px h-20px">
    <el-icon v-if="!isCollapse" :size="20" color="#909399">
      <Fold />
    </el-icon>
    <el-icon v-else :size="20" color="#909399">
      <expand />
    </el-icon>
  </div>
  <div class="flex-grow-1">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item, index in breadcrumbMenu" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="h-full flex">
    <div class="w-40px h-full" v-for="item in userCenter">
      <div class="flex items-center justify-center h-full cursor-pointer dark:hover:bg-[#333] hover:bg-[#f6f6f6]">
        <img :src="item.src" alt="" class="w-20px h-20px">
      </div>
    </div>
    <div class="h-full">
      <div class="flex items-center justify-center h-full cursor-pointer dark:hover:bg-[#333] hover:bg-[#f6f6f6]">
        <span class="leading-20px">SmoothShadow</span>
      </div>
    </div>
    <!-- <img src="/src/assets/github.svg" alt="" class="w-20px h-20px cursor-pointer mr-10px">
    <img src="/src/assets/moon.svg" alt="" class="w-20px h-20px cursor-pointer mr-10px">
    <img src="/src/assets/avatar.jpeg" alt="" class="w-20px h-20px mr-10px rounded-50%">
    <span class="leading-20px">SmoothShadow</span> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouteStore } from '@/store/modules/route/index'
defineOptions({ name: 'Header' })

const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true
  }
})
interface Emits {
  (e: 'update:isCollapse', isCollapse: boolean): void;
}

const emit = defineEmits<Emits>();

const toggle = () => {
  emit('update:isCollapse', !props.isCollapse)
}

const routeStore = useRouteStore()
const breadcrumbMenu = computed(() => routeStore.breadcrumbMenu)

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