<template>
  <div>
    <h2 class="red">环境变量</h2>
    mode: {{mode}} <br/>
    host: {{host}} <br/>
    port: {{port}} <br/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/style/index.scss'
export default defineComponent({
  name: "env",
  setup() {
    const mode = import.meta.env.MODE;
    const host = import.meta.env.VITE_HOST;
    const port = import.meta.env.VITE_PORT;

    return {
      mode,
      host,
      port,
    }
  }
})

</script>

<style scoped>

</style>
