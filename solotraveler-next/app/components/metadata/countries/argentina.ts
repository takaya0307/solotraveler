import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateArgentinaMetadata(): Metadata {
  const countryInfo = getCountryInfo('argentina');
  
  if (!countryInfo) {
    throw new Error('Argentina country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['タンゴ文化', 'ワイン文化', '南米'],
    articleSection: 'アルゼンチンワーホリ',
    articleTags: ['アルゼンチン', 'ワーホリ', 'スペイン語学習', 'タンゴ', 'ワイン']
  });
} 