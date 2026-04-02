# GitHub 个人主页（GitHub Pages）

这是一个纯静态（无构建）的个人主页模板：`public/index.html` + `public/assets/`，可直接部署到 GitHub Pages。

## 1) 修改成你的信息

打开并替换占位内容：

- `public/index.html`：名字、简介、项目、链接、邮箱等
- `public/assets/style.css`：主题色、布局（可选）

## 2) 本地预览

在仓库根目录运行：

```bash
cd public && python3 -m http.server 5173
```

然后打开：http://localhost:5173

也可以：

```bash
bash scripts/serve.sh 5173
```


## 3) 部署到 GitHub Pages（推荐 Actions）

本仓库已包含 GitHub Actions 工作流：`.github/workflows/pages.yml`。

你需要在 GitHub 仓库里做一次设置：

1. 打开仓库 Settings → Pages
2. Build and deployment → Source 选择 **GitHub Actions**

之后每次 push 到 `main` 分支都会自动部署。

## 4) 作为“用户主页”的仓库名

如果你想要 `https://<用户名>.github.io/` 这种用户主页：

- 仓库名需要是：`<用户名>.github.io`

如果是普通项目主页（Project Pages），地址一般是：

- `https://<用户名>.github.io/<仓库名>/`

## 5) 常见问题

- 页面 404：确认已启用 Pages，并且 Actions 运行成功
- 样式不生效：确认引用路径正确（本模板使用 `./assets/...`，同时兼容 User Pages 与 Project Pages）
