import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateNetherlandsMetadata(): Metadata {
  const countryInfo = getCountryInfo('netherlands');
  
  if (!countryInfo) {
    throw new Error('Netherlands country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['風車文化', 'チューリップ文化', '低地'],
    articleSection: 'オランダワーホリ',
    articleTags: ['オランダ', 'ワーホリ', 'オランダ語学習', '風車', 'チューリップ']
  });
} 