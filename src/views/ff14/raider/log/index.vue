<template>
  <div class="pl-30px pr-30px flex justify-center items-center overscroll-auto">
    <div class="demo-collapse w-100%">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item v-for="(item, index) in data" :title="item.title" :name="index">
          <div v-for="val in item.content">
            <p v-if="val.type == 'text'">&nbsp;&nbsp;{{ val.text }}</p>
            <img v-if="val.type == 'img'" :src="val.url" alt="图片未正确加载" class="max-w-100% max-h-100%">
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Api from '@/api/raider/logs'

defineOptions({ name: 'index' })

const activeName = ref(0)

const data = ref<any[]>()
onMounted(() => {
  Api.search().then(res => {
    console.log(res.data)
    data.value = res.data.data
  })
})
</script>

<style lang="scss" scoped></style>