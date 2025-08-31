import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateChileMetadata(): Metadata {
  const countryInfo = getCountryInfo('chile');
  
  if (!countryInfo) {
    throw new Error('Chile country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['自然文化', 'チリ料理', '南米'],
    articleSection: 'チリワーホリ',
    articleTags: ['チリ', 'ワーホリ', 'スペイン語学習', '自然', '国土']
  });
} 