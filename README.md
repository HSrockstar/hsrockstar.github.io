# 胡懿晨 Yichen Hu 的个人主页

同济大学数据科学与大数据技术专业本科生。研究兴趣：具身智能、空间智能与 AI 智能体。

- [中文主页](https://hsrockstar.github.io/)
- [English homepage](https://hsrockstar.github.io/en/)

网站使用原生 HTML/CSS，默认中文，通过导航栏选项切换英文。语言切换保留当前章节。国豪书院教育智能体项目入口需要同济大学校园网访问。

## 本地预览

在仓库目录执行：

```powershell
python -m http.server 8000 --directory site --bind 127.0.0.1
```

打开 http://127.0.0.1:8000/。无需安装前端依赖。

## 更新内容

- `site/index.html`：中文内容。
- `site/en/index.html`：英文内容。
- `site/assets/styles.css`：样式。
- `site/assets/language.js`：语言切换。
- `site/assets/images/yichen-hu.png`：头像。

更新经历或项目时同步修改两种语言。暂未提供 PDF 简历，网站不显示下载按钮。

## GitHub Pages 发布

仓库使用 GitHub Actions 发布。将修改推送到 `main` 后，`.github/workflows/pages.yml` 只将 `site/` 目录部署到 Pages。`docs/`、根目录 `assets/` 和 `reports/` 是本地准备与核验材料，不进入公开仓库。

需要恢复旧内容时，以新提交还原相应文件并重新部署，保留提交历史。
