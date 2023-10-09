import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 插件配置
    plugins: [
      vue(),
      DefineOptions(),
      UnoCSS({
        
      })
    ],
    //解析配置
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    //服务端配置
    server: {
      proxy: {
        "/wana": {
          target: "https://wanahome.ffxiv.bingyin.org",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/wana/, ""),
        }
      },
      //读取环境变量中的host和port
      host: env['VITE_HOST'],
      port: Number(env['VITE_PORT']),
      strictPort: true
    }
  }
});
vue({reactivityTransform: true})  // 启用响应式语法糖$ref $computed $toRef