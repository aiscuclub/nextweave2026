import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // dev 用 / ，build 才加 /nextweave2026/；GitHub Actions 會依 repo 名稱傳入 BASE_PATH（fork 改名也能正常運作）
  base: command === "build" ? process.env.BASE_PATH ?? "/nextweave2026/" : "/",
}));
