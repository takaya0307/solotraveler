import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateGermanyMetadata(): Metadata {
  const countryInfo = getCountryInfo('germany');
  
  if (!countryInfo) {
    throw new Error('Germany country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['オクトーバーフェスト', 'ビール文化', '技術文化'],
    articleSection: 'ドイツワーホリ',
    articleTags: ['ドイツ', 'ワーホリ', 'ドイツ語学習', '技術', '文化']
  });
} 