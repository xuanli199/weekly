import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  srcDir: "./",
  base: "/weekly/",
  srcExclude: ["node_modules/**/*"],
  rewrites: {
    "README.md": "index.md",
  },
  themeConfig: {
    siteTitle: "每周科技补全",
    nav: [
      {
        text: "Bilibili",
        link: "https://space.bilibili.com/67079745/lists/3173076",
      },
      { text: "Github", link: "https://github.com/xuanli199/weekly" },
    ],
  },
});
