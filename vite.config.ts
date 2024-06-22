import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { internalIpV4 } from "internal-ip";
/** element plus 自动按需导入插件 start */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
/** element plus 自动按需导入插件 end */
import { fileURLToPath, URL } from 'node:url'


// @ts-expect-error process is a nodejs global
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),

    AutoImport({
      // 在哪些文件下自动导入
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // 自动导入的内容
      imports: [
        'vue'
      ],
      // eslint检查
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()]
    }),

    Components({
      // 要搜索组件的目录的相对路径
      dirs: ['src/components', 'src/layout'],
      // 组件的有效文件扩展名
      extensions: ['vue', 'md'],
      // 搜索子目录z
      deep: true,
      // 在哪些文件下自动导入组件
      include: [/\.vue$/, /\.vue\?vue/],
      // 生成自定义 `auto-components.d.ts` 全局声明
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })], // importStyle: "sass" ---  解决覆盖element plus 的sass变量不生效的bug
      // 在哪些目录下不自动导入组件
      exclude: [/[\\/]node_modules[\\/]/]
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      // scss全局文件引入   
      scss: {
        //additionalData: '@import "./src/styles/global.scss";' //这行代码可能会导致报错     
        additionalData: '@use "./src/style/global.scss" as *;' //建议使用这行代码    
      },
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: mobile ? "0.0.0.0" : false,
    hmr: mobile
      ? {
        protocol: "ws",
        host: await internalIpV4(),
        port: 1421,
      }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
