<template>
  <div class="w-100% h-full flex items-center justify-center">

    <div class="w-30% h-100% overscroll-auto overflow-auto anchor flex items-center justify-center box-border">
      <n-anchor
        ref="anchorRef"
        show-rail
        show-background
        ignore-gap
        style="z-index: 100"
        @click="preventJump"
      >
        <n-anchor-link :title="item.title" v-for="item in directory" href="'#abc.vue'" @click="loadText(item.value)"/>
      </n-anchor>
    </div>
    <div class="w-70% h-100%">
      显示对应元素
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NAnchor, NAnchorLink, AnchorInst } from 'naive-ui'
import Api from '@/api/raider/dead' 
defineOptions({ name: 'index' })

interface directoryArr {
  title: string,
  value: number
}

const directory = ref<directoryArr[]>([])

onMounted(() => {
  Api.getDirectory().then((res) => {
    console.log(res)
    directory.value = res.data.data
  })
})

const loadText = (floor:number) => {
  let param = {
    floor
  }
  Api.getTable(param).then((res) => {
    // console.log(res)
    // directory.value = res.data.data
  })
  let href = '#' + floor
  console.log(href)
  anchorRef.value?.scrollTo('#abc')
  console.log(anchorRef.value)
}
const anchorRef = ref<AnchorInst | null>(null)
//组织anchor进行href跳转
const preventJump = (e: any) => {
  console.log(e)
  e.preventDefault();
}

</script>

<style lang="scss" scoped>
  
</style>