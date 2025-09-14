import { defineConfig } from "vitepress";
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";

const RSS: RSSOptions = {
  title: "玄离199 每周科技补全",
  baseUrl: "https://xuanli199.github.io",
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
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/xuanli199/weekly",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/67079745/lists/3173076",
      },
    ],
    siteTitle: "每周科技补全",

    // VitePress 自带的检索全文功能。
    // See: https://vitepress.dev/zh/reference/default-theme-search
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            // `tokenize`: 对备索引内容的分词器。
            // `text`: 备索引内容，由 `extractField` 提供。
            tokenize: (text) => {
              // 这种拆分方式可以在遇到英数字时以单词拆分，
              // 这样做是为了更全面地匹配非英数字的内容，
              // 同时避免单字母或单数字拆分造成的无意义匹配。
              return text.match(/[A-Za-z0-9]+|./g)?.filter(Boolean) ?? [];
            },
          },
          searchOptions: {
            // 完整匹配检索关键字（避免检索单词时出现单字内容）。
            combineWith: "AND",
          },
        },
      },
    },
  },
  vite: {
    plugins: [RssPlugin(RSS)],
  },
});
