# 快速开始 (/docs)

本文档介绍如何把各家 AI 客户端 / Agent 接入基于 [Sub2API](https://github.com/Wei-Shaw/sub2api) 搭建的 API 网关 **Maru Code**（[api.muteki.site](https://api.muteki.site)）。

## 你需要准备的三样东西 [#你需要准备的三样东西]

不管用哪个客户端，需要填写的核心信息都一样：

| 信息 | 填什么 | 从哪里来 |
| --- | --- | --- |
| **Base URL** | Claude 类客户端：`https://api.muteki.site`<br />OpenAI 类客户端：`https://api.muteki.site/v1` | 见 [接口地址与协议](/docs/basics/endpoints) |
| **API Key** | `sk-` 开头的密钥 | 控制台 → **API 密钥** 页面创建，见 [创建 API Key](/docs/basics/api-key) |
| **模型名** | 例如 `gpt-5.6`、`claude-sonnet-5-5` | 控制台 → **模型广场**，名称要完整复制 |

<Callout type="warn" title="Base URL 最容易填错">
Claude 类客户端（Claude Code 等）会自己在地址后面拼上 `/v1/messages`，所以**不要**带 `/v1`；OpenAI 类客户端（Codex、大多数聊天 App）一般要求填到 `/v1`。填错会出现 404。
</Callout>

## 接入步骤 [#接入步骤]

<Steps>
<Step>
### 注册账号 [#注册账号]

打开 [api.muteki.site](https://api.muteki.site) 注册并登录。
</Step>

<Step>
### 创建 API Key [#创建-api-key]

进入 **API 密钥** 页面新建密钥，**按你要用的模型选择分组**：用 GPT 系列选 OpenAI 分组，用 Claude 系列选 Anthropic 分组。详见 [创建 API Key](/docs/basics/api-key)。
</Step>

<Step>
### 按客户端教程填写配置 [#按客户端教程填写配置]

在下面选择你的客户端，照着教程填入 Base URL、API Key 和模型名，然后发一句「你好」测试。
</Step>
</Steps>

## 选择你的客户端 [#选择你的客户端]

<Cards>
  <Card title="Claude Code" href="/docs/agents/claude-code" description="Anthropic 官方终端编程 Agent" />
  <Card title="Codex" href="/docs/agents/codex" description="OpenAI 官方编程 Agent：CLI / IDE 插件" />
  <Card title="Claude Desktop" href="/docs/desktop/claude-desktop" description="官方桌面客户端，第三方推理（Gateway）模式" />
  <Card title="ChatGPT Desktop" href="/docs/desktop/chatgpt-desktop" description="ChatGPT 桌面客户端中的 Codex" />
  <Card title="Kelivo" href="/docs/chat/kelivo" description="全平台聊天客户端，已内置 MaruCode" />
  <Card title="RikkaHub" href="/docs/chat/rikkahub" description="Android 聊天客户端，已内置 MaruCode" />
  <Card title="Open Minis" href="/docs/chat/openminis" description="iOS / Android 端侧 AI Agent" />
</Cards>

遇到报错请先看 [常见问题](/docs/faq)。
