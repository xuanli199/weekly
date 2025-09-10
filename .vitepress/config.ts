import { defineConfig } from "vitepress";
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";
const RSS: RSSOptions = {
  title: "玄离199 每周科技补全",
  baseUrl: "https://xuanli199.github.io/weekly",
  copyright: "玄离199",
  author: { name: '"玄离199"' },
  filter: (post) => !post.filepath.includes("README.md"),
};

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  srcDir: "./",
  base: "/weekly/",
  srcExclude: ["node_modules/**/*"],
  rewrites: {
    "README.md": "index.md",
  },
  themeConfig: {
    socialLinks: [{
      icon: "github",
      link: "https://github.com/xuanli199/weekly",
    }, {
      icon: "bilibili",
      link: "https://space.bilibili.com/67079745/lists/3173076",
    }],
    siteTitle: "每周科技补全",
  },
  vite: {
    plugins: [RssPlugin(RSS)],
  },
});
