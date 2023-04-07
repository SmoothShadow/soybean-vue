<template>
  <!-- ↓路由demo -->
  <div>
    <h2>路由</h2>
    <!-- ↓匹配路由path进行跳转 -->
    <router-link to="/sys/user">Go to User</router-link> <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Router",
});
</script>
