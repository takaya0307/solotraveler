import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateTaiwanMetadata(): Metadata {
  const countryInfo = getCountryInfo('taiwan');
  
  if (!countryInfo) {
    throw new Error('Taiwan country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['台湾料理', '親切文化', 'アジア'],
    articleSection: '台湾ワーホリ',
    articleTags: ['台湾', 'ワーホリ', '中国語学習', '美食', '親切']
  });
} 