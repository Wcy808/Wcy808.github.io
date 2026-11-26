# Wcy808 · Portfolio

个人作品集站点，使用 [TanStack Start](https://tanstack.com/start) 构建，静态预渲染后托管在 GitHub Pages：<https://wcy808.github.io>

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
```

## 构建与部署

```bash
npm run build    # 预渲染静态文件输出到 dist/client
```

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages。

## 内容维护

- 站点文案（中英双语）：`src/content.ts`
- 页面结构：`src/routes/index.tsx`
- 样式：`src/styles.css`