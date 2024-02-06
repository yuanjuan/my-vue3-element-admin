import path from "path";
import { UserConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
const pathSrc = path.resolve(__dirname, "src")

export default ({mode}: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return{
    // 别名路径
    resolve: {
      alias: {
        "@": pathSrc
      }
    },
    plugins: [
      vue()
    ]
  }
}
