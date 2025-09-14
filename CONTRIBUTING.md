# 贡献指南
- 环境要求
  - Node.js 20+
  - pnpm
- 安装依赖
  ```bash
  pnpm install
  ```
- 开发模式
  ```bash
  pnpm run docs:dev
  ```
  开发服务器将运行在 [http://localhost:5173](http://localhost:5173)
- 构建生产版本
  ```bash
  pnpm run docs:build
  ```
  构建结果将输出到 `.vitepress/dist` 目录
- 预览生产版本
  ```bash
  pnpm run docs:preview