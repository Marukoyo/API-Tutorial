# Claude Desktop (/docs/desktop/claude-desktop)

<Callout title="使用哪个分组的密钥？">
使用 **Anthropic 分组** 的密钥。不需要 Anthropic 账号。
</Callout>

Claude Desktop 官方支持「第三方推理」模式：不登录 Anthropic 账号，把请求发到你指定的网关。聊天和 Code 标签页都会走这个配置。

## 配置步骤 [#配置步骤]

<Steps>
<Step>
### 安装 Claude Desktop [#安装-claude-desktop]

从 [claude.com/download](https://claude.com/download) 下载并安装。打开后**不要登录，也不要注册** Anthropic 账号。
</Step>

<Step>
### 开启开发者模式 [#开启开发者模式]

在菜单栏选择 **Help → Troubleshooting → Enable Developer Mode**。

Windows 上这些菜单在登录界面左上角的 **☰** 菜单里。
</Step>

<Step>
### 打开第三方推理配置 [#打开第三方推理配置]

选择 **Developer → Configure Third-Party Inference…**。
</Step>

<Step>
### 填写网关信息 [#填写网关信息]

在 **Connection** 中填写：

| 字段 | 填写 |
| --- | --- |
| Inference provider | **Gateway** |
| Gateway base URL | `https://api.muteki.site` |
| Gateway API key | `sk-你的密钥` |
| Credential kind | **Static API key** |
| Gateway auth scheme | **Bearer**（默认） |

<Callout type="info">
如果连接测试返回 404，把 Gateway base URL 改成 `https://api.muteki.site/v1` 再试一次。
</Callout>
</Step>

<Step>
### 保存并重启 [#保存并重启]

点击 **Apply Changes**，再点击 **Save & Restart**。重启后在登录界面选择第三方推理的入口，即可开始使用。
</Step>
</Steps>

## 模型 [#模型]

Claude Desktop 会自动从网关读取可用的 Claude 模型，一般不需要手动配置。如果模型列表为空，确认密钥属于 Anthropic 分组。

## 注意事项 [#注意事项]

- **Code 标签页不读取 Claude Code 的配置**：Claude Desktop 里的 Code 功能只使用上面的第三方推理配置，不读取 `~/.claude/settings.json` 和 `ANTHROPIC_BASE_URL`。终端版 Claude Code 的配置见 [Claude Code](/docs/agents/claude-code)。
- **部分功能不可用**：第三方推理模式下没有语音模式和 Remote Control，对话记录只保存在本机。
- **配置保存位置**：应用内窗口写入的配置保存在下面的目录，建议始终通过应用内窗口修改，不要手动编辑：

| 系统 | 配置目录 | 日志 |
| --- | --- | --- |
| Windows | `%LOCALAPPDATA%\Claude-3p\configLibrary\` | `%LOCALAPPDATA%\Claude-3p\Logs\main.log` |
| macOS | `~/Library/Application Support/Claude-3p/configLibrary/` | `~/Library/Logs/Claude-3p/main.log` |

连接失败时可以查看日志里的具体报错，再对照 [常见问题](/docs/faq)。
