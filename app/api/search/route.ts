import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// 不指定 language，使用默认的 multilingual 分词器，中文也能搜索
export const { staticGET: GET } = createFromSource(source);
