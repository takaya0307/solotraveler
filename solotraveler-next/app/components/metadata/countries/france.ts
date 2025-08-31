import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateFranceMetadata(): Metadata {
  const countryInfo = getCountryInfo('france');
  
  if (!countryInfo) {
    throw new Error('France country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ワイン文化', 'ファッション', '芸術文化'],
    articleSection: 'フランスワーホリ',
    articleTags: ['フランス', 'ワーホリ', 'フランス語学習', '芸術', '美食']
  });
} 