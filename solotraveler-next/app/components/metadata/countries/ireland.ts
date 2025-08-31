import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateIrelandMetadata(): Metadata {
  const countryInfo = getCountryInfo('ireland');
  
  if (!countryInfo) {
    throw new Error('Ireland country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['パブ文化', 'アイリッシュミュージック', 'ケルト文化'],
    articleSection: 'アイルランドワーホリ',
    articleTags: ['アイルランド', 'ワーホリ', '英語学習', 'ケルト文化', '自然']
  });
} 