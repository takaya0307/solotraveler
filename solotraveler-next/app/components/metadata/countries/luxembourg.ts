import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateLuxembourgMetadata(): Metadata {
  const countryInfo = getCountryInfo('luxembourg');
  
  if (!countryInfo) {
    throw new Error('Luxembourg country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['多文化共存', '国際文化', 'ヨーロッパ'],
    articleSection: 'ルクセンブルクワーホリ',
    articleTags: ['ルクセンブルク', 'ワーホリ', '多言語学習', '多文化', '国際']
  });
} 