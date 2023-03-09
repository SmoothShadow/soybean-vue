//解决不识别ts文件中引入.vue文件报错问题
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
 }