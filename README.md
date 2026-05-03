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

## 2.1) 访问统计与地区分布

推荐使用 `Google Analytics 4`，它可以直接查看：

- 访问人数 / 页面浏览量
- 国家 / 地区 / 城市分布
- 页面中的公开访客统计模块

本项目已经预留了配置文件：

- `assets/site-config.js`
- `public/assets/site-config.js`

把里面的 `ga4MeasurementId` 改成你的 GA4 Measurement ID，例如：

```js
window.SITE_CONFIG = {
  ga4MeasurementId: "G-XXXXXXXXXX",
  enablePublicCounter: true,
};
```

配置完成并发布后，你可以在 GA4 里查看：

- `Reports` → `Realtime`
- `Reports` → `Demographics` → `Demographic details`

如果你暂时不想启用统计，保留空字符串即可。
如果你不想在页面公开显示访问计数，把 `enablePublicCounter` 改成 `false` 即可。


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
