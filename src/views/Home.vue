<template>
  <Env />
  <Router />
  <Axios />
  <Mock />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Env from "@/components/demos/Env.vue";
import Router from "@/components/demos/Router.vue";
import Axios from '@/components/demos/Axios.vue';
import Mock from "@/components/demos/Mock.vue";
</script>
