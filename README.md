# API-Tutorial

Maru Code（基于 Sub2API 的 API 网关）各家客户端 / Agent 的接入文档，基于 [Fumadocs](https://fumadocs.dev)（Next.js 静态导出）。

线上地址：<https://docs.muteki.site>

## 工作流程

```
Windows 写文档 ──git push──▶ GitHub main 分支
                                │
                                ▼  GitHub Actions：npm ci && npm run build
                          site 分支（构建好的静态文件）
                                │
                                ▼  VPS 每分钟检查一次，有更新就拉取
                     Caddy 托管 ──▶ https://docs.muteki.site
```

push 之后一般 **2～3 分钟**上线。进度可以在仓库的 **Actions** 页面查看，构建失败时线上站点保持旧版本不变。

## 在 Windows 上写文档

### 1. 准备环境（只需一次）

- 安装 [Node.js 22 LTS](https://nodejs.org/) 和 [Git](https://git-scm.com/download/win)
- 推荐编辑器：VS Code + [MDX 插件](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

```powershell
git clone https://github.com/Marukoyo/API-Tutorial.git
cd API-Tutorial
npm install
```

### 2. 本地预览

```powershell
npm run dev
```

浏览器打开 <http://localhost:3000>，修改文档后页面会自动刷新。

### 3. 发布

```powershell
git add .
git commit -m "docs: 更新 xxx 教程"
git push
```

## 目录结构

```
content/docs/            # 所有文档（MDX）
├── meta.json            # 侧边栏顺序与分组
├── index.mdx            # /docs 首页
├── basics/              # 准备工作
├── agents/              # 编程 Agent
├── desktop/             # 桌面应用
├── chat/                # 聊天客户端
└── faq.mdx              # 常见问题
app/(home)/page.tsx      # 站点首页
lib/shared.ts            # 站点名称、网关地址、GitHub 仓库等配置
```

## 写作说明

### 新增一篇文档

在 `content/docs/` 对应目录下新建 `xxx.mdx`，开头写 frontmatter：

```mdx
---
title: 页面标题
description: 一句话简介（显示在标题下方和搜索结果里）
---

正文……
```

文件路径就是网址：`content/docs/chat/kelivo.mdx` → `/docs/chat/kelivo`。

### 调整侧边栏

每个目录下的 `meta.json` 控制该目录的标题和页面顺序。末尾的 `"..."` 表示「其余页面按字母顺序排在后面」，所以新增文档即使忘了写进 `pages` 也会显示出来。

```json
{
  "title": "聊天客户端",
  "defaultOpen": true,
  "pages": ["kelivo", "rikkahub", "..."]
}
```

### 图片

把图片放在 `public/images/` 下，在 MDX 里用 `![说明](/images/xxx.png)` 引用。

### 常用组件

MDX 中可以直接使用以下组件，无需 import：

```mdx
<Callout type="warn">注意事项（type 可选 info / warn / error / success）</Callout>

<Steps>
<Step>
### 第一步
</Step>
<Step>
### 第二步
</Step>
</Steps>

<Tabs groupId="os" items={['Windows', 'macOS / Linux']} persist>
<Tab>Windows 的内容</Tab>
<Tab>macOS / Linux 的内容</Tab>
</Tabs>

<Cards>
  <Card title="标题" href="/docs/xxx" description="说明" />
</Cards>

<Accordions>
  <Accordion title="问题">回答</Accordion>
</Accordions>
```

同一 `groupId` 的 Tabs 会在全站同步选中项（例如用户选了一次 Windows，其他页面也默认显示 Windows）。

更多组件见 [Fumadocs 文档](https://fumadocs.dev/docs/ui/components)。

## VPS 部署（供参考）

VPS 上不安装 Node，也不参与构建，只托管 Actions 产出的静态文件：

| 位置 | 作用 |
| --- | --- |
| `/srv/api-tutorial/sync.sh` | 拉取 `site` 分支，解包到 `releases/<commit>`，原子切换 `current` 软链接 |
| `api-tutorial-sync.timer` | 每分钟运行一次同步脚本 |
| `/etc/caddy/Caddyfile` 中的 `docs.muteki.site` | 站点根目录为 `/srv/api-tutorial/current` |

```bash
journalctl -u api-tutorial-sync --since today   # 查看部署记录
systemctl start api-tutorial-sync               # 立即同步一次
ls -lt /srv/api-tutorial/releases               # 保留最近 3 个版本
# 回滚：把 current 指回旧版本
ln -sfn releases/<旧 commit> /srv/api-tutorial/current
```
