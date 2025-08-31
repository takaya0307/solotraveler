import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateUruguayMetadata(): Metadata {
  const countryInfo = getCountryInfo('uruguay');
  
  if (!countryInfo) {
    throw new Error('Uruguay country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ビーチ文化', 'ウルグアイ料理', '南米'],
    articleSection: 'ウルグアイワーホリ',
    articleTags: ['ウルグアイ', 'ワーホリ', 'スペイン語学習', 'ビーチ', '安全']
  });
} 