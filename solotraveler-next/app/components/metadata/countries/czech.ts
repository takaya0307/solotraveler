import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateCzechMetadata(): Metadata {
  const countryInfo = getCountryInfo('czech');
  
  if (!countryInfo) {
    throw new Error('Czech Republic country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ビール文化', '建築文化', '中欧'],
    articleSection: 'チェコワーホリ',
    articleTags: ['チェコ', 'ワーホリ', 'チェコ語学習', '建築', 'ビール']
  });
} 