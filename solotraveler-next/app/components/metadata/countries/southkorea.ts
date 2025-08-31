import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateSouthKoreaMetadata(): Metadata {
  const countryInfo = getCountryInfo('southkorea');
  
  if (!countryInfo) {
    throw new Error('South Korea country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['K-POP文化', '韓国料理', 'アジア'],
    articleSection: '韓国ワーホリ',
    articleTags: ['韓国', 'ワーホリ', '韓国語学習', 'K-POP', 'テクノロジー']
  });
} 