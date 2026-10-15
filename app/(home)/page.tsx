import Link from 'next/link';
import type { ReactNode } from 'react';
import { Bot, KeyRound, Monitor, Smartphone, Terminal } from 'lucide-react';
import { apiBaseUrl, appName } from '@/lib/shared';

interface Client {
  name: string;
  description: string;
  href: string;
}

const groups: { title: string; icon: ReactNode; clients: Client[] }[] = [
  {
    title: '编程 Agent',
    icon: <Terminal className="size-4" />,
    clients: [
      { name: 'Claude Code', description: 'Anthropic 官方终端编程 Agent', href: '/docs/agents/claude-code' },
      { name: 'Codex', description: 'OpenAI 官方编程 Agent（CLI / IDE 插件）', href: '/docs/agents/codex' },
    ],
  },
  {
    title: '桌面应用',
    icon: <Monitor className="size-4" />,
    clients: [
      { name: 'Claude Desktop', description: '官方桌面客户端，第三方推理（Gateway）模式', href: '/docs/desktop/claude-desktop' },
      { name: 'ChatGPT Desktop', description: 'ChatGPT 桌面客户端中的 Codex', href: '/docs/desktop/chatgpt-desktop' },
    ],
  },
  {
    title: '聊天客户端',
    icon: <Smartphone className="size-4" />,
    clients: [
      { name: 'Kelivo', description: '全平台聊天客户端，已内置 MaruCode', href: '/docs/chat/kelivo' },
      { name: 'RikkaHub', description: 'Android 聊天客户端，已内置 MaruCode', href: '/docs/chat/rikkahub' },
      { name: 'Open Minis', description: 'iOS / Android 端侧 AI Agent', href: '/docs/chat/openminis' },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-4 py-16 md:py-24">
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground">
          <Bot className="size-3.5" />
          一个 API Key，接入所有 AI 客户端
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{appName}</h1>
        <p className="max-w-2xl text-fd-muted-foreground md:text-lg">
          手把手教你把 Claude Code、Codex、Claude Desktop、Kelivo、RikkaHub 等客户端接入 Maru Code。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            开始阅读
          </Link>
          <a
            href={apiBaseUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            <KeyRound className="size-4" />
            获取 API Key
          </a>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="flex flex-col gap-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-fd-muted-foreground">
            {group.icon}
            {group.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.clients.map((client) => (
              <Link
                key={client.href}
                href={client.href}
                className="rounded-xl border bg-fd-card p-5 transition-colors hover:bg-fd-accent"
              >
                <h3 className="font-semibold">{client.name}</h3>
                <p className="mt-1 text-sm text-fd-muted-foreground">{client.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
