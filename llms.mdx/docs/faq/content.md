# 常见问题 (/docs/faq)

## 错误码速查 [#错误码速查]

| 状态码 | 错误信息（关键字） | 原因 | 解决办法 |
| --- | --- | --- | --- |
| 401 | `API_KEY_REQUIRED` | 请求里没有带密钥 | 检查客户端的 API Key 是否填写、是否保存 |
| 401 | 密钥无效 | 密钥填错、多了空格，或密钥已删除 | 重新从控制台复制完整密钥 |
| 400 | `api_key_in_query_deprecated` | 把密钥放在了 URL 参数里 | 改为在 API Key 字段里填写 |
| 403 | `INSUFFICIENT_BALANCE` | 账户余额不足 | 在控制台充值 |
| 403 | `API_KEY_EXPIRED` | 密钥已过期 | 修改过期时间或新建密钥 |
| 403 | `not assigned to any group` | 密钥没有分组 | 编辑密钥，选择一个分组 |
| 403 | `does not allow /v1/messages dispatch` | 用 OpenAI 分组的密钥调用了 Claude 协议 | 换用 Anthropic 分组的密钥，或改用 OpenAI 协议的客户端 |
| 403 | `restricted to Claude Code clients` | 该分组仅限 Claude Code 使用 | 在 Claude Code 中使用，或换其他分组 |
| 403 | `Access denied. Your IP is …` | 触发了密钥的 IP 白名单 / 黑名单 | 在控制台调整密钥的 IP 限制 |
| 404 | `model_not_found` | 模型名写错，或当前分组没有这个模型 | 到模型广场复制正确的模型名，确认分组 |
| 404 | 路径不存在 | Base URL 多了或少了 `/v1` | 对照 [Base URL 速查](/docs/basics/endpoints#base-url-速查) |
| 429 | `API_KEY_QUOTA_EXHAUSTED` | 密钥设置的额度上限已用完 | 调高密钥额度或新建密钥 |

## 其他问题 [#其他问题]

<Accordions>
<Accordion title="改了配置但没有生效？">
大多数客户端只在启动时读取配置。修改配置文件或环境变量后，请**完全退出并重新打开**客户端；命令行工具需要新开一个终端窗口。
</Accordion>

<Accordion title="请求路径变成了 /v1/v1/... ？">
Base URL 里多写了 `/v1`，客户端又自己拼了一次。Claude 类客户端填 `https://api.muteki.site`（不带 `/v1`）。
</Accordion>

<Accordion title="填了 Base URL 和密钥，客户端还是要求登录官方账号？">
部分官方客户端需要额外的设置才能跳过登录，请看对应客户端教程中的说明。
</Accordion>

<Accordion title="怎么知道自己的密钥能用哪些模型？">
用 [测试连通性](/docs/basics/endpoints#测试连通性) 里的命令查询 `/v1/models`，或者在控制台 **模型广场** 查看各分组的模型。
</Accordion>

<Accordion title="主站访问慢或连不上？">
可以换用 [备用节点](/docs/basics/endpoints#备用节点)，把 Base URL 里的域名替换掉即可，其余配置不变。
</Accordion>
</Accordions>
