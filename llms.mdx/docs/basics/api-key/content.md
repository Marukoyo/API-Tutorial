# 创建 API Key (/docs/basics/api-key)

API Key 是客户端调用网关时的身份凭证：系统靠它识别是谁在使用、还剩多少额度、该走哪个分组。

## 创建步骤 [#创建步骤]

<Steps>
<Step>
### 注册并登录 [#注册并登录]

打开 [api.muteki.site](https://api.muteki.site) 注册账号。注册需要邮箱验证码，且只支持部分邮箱后缀，以注册页的提示为准。
</Step>

<Step>
### 新建密钥 [#新建密钥]

在左侧栏进入 **API 密钥** 页面，点击创建。名称建议按用途命名，例如 `claude-code`、`codex-laptop`、`kelivo-phone`，以后哪个密钥泄露了可以单独删掉。
</Step>

<Step>
### 选择分组 [#选择分组]

**一个密钥只属于一个分组**，分组决定了这个密钥能用哪些模型、按什么倍率计费：

| 分组 | 可用模型 | 适合的客户端 |
| --- | --- | --- |
| **OpenAI** | GPT 系列（如 `gpt-5.6`） | Codex、各类 OpenAI 兼容聊天 App |
| **OpenAI (Fast)** | 同上，走 Fast 模式（计费更高） | 对速度要求高的 Codex 用户 |
| **Anthropic** | Claude 系列（如 `claude-sonnet-5-5`） | Claude Code、Claude 兼容客户端 |

各分组当前的模型列表和倍率以控制台 **模型广场** 为准。没有分配分组的密钥无法调用任何接口。
</Step>

<Step>
### 复制密钥 [#复制密钥]

创建完成后复制完整密钥（`sk-` 开头）。下一步配置客户端时会用到。
</Step>
</Steps>

<Callout type="error" title="不要把密钥发给别人">
任何拿到密钥的人都能消耗你的余额。怀疑泄露时，立即在 **API 密钥** 页面删除旧密钥并新建一个。
</Callout>

## 控制台自带的配置生成器 [#控制台自带的配置生成器]

在 **API 密钥** 页面点击密钥旁的 **使用密钥**，会按分组生成 Claude Code、Codex CLI、OpenCode 等客户端的配置片段，已经填好了你的密钥和正确的 Base URL，可以直接复制。

如果你装了 [CC Switch](https://github.com/farion1231/cc-switch)，还可以用页面上的 **导入到 CC Switch** 按钮一键导入。

## 可选的密钥限制 [#可选的密钥限制]

创建或编辑密钥时可以设置：

- **额度上限**：这个密钥最多能消耗多少，用完后返回 429。
- **过期时间**：到期后密钥自动失效。
- **IP 白名单 / 黑名单**：只允许指定 IP 使用。

给临时设备或分享给他人测试的密钥，建议都设上额度和过期时间。

## 查询余额 [#查询余额]

除了在控制台查看，也可以直接用密钥查询（密钥过期或额度用完时也能查）：

<Tabs groupId="shell" items={['macOS / Linux', 'Windows PowerShell']} persist>
<Tab>
```bash
curl https://api.muteki.site/v1/usage -H "Authorization: Bearer sk-你的密钥"
```
</Tab>
<Tab>
```powershell
curl.exe https://api.muteki.site/v1/usage -H "Authorization: Bearer sk-你的密钥"
```
</Tab>
</Tabs>
