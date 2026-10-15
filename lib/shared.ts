import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Sub2API 接入指南';
export const appDescription = '把 Claude Code、Codex、Claude Desktop、Kelivo、RikkaHub 等客户端接入 Sub2API 的配置教程';
export const siteUrl = 'https://docs.muteki.site';
// 文档中所有客户端对接的 Sub2API 网关地址
export const apiBaseUrl = 'https://api.muteki.site';
export const docsRoute = '/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'Marukoyo',
  repo: 'API-Tutorial',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}
