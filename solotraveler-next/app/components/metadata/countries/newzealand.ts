import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateNewZealandMetadata(): Metadata {
  const countryInfo = getCountryInfo('newzealand');
  
  if (!countryInfo) {
    throw new Error('New Zealand country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ハイキング', 'マオリ文化', 'アドベンチャー'],
    articleSection: 'ニュージーランドワーホリ',
    articleTags: ['ニュージーランド', 'ワーホリ', '英語学習', '自然', 'アドベンチャー']
  });
} 