import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateHungaryMetadata(): Metadata {
  const countryInfo = getCountryInfo('hungary');
  
  if (!countryInfo) {
    throw new Error('Hungary country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['温泉文化', 'ハンガリー料理', '中欧'],
    articleSection: 'ハンガリーワーホリ',
    articleTags: ['ハンガリー', 'ワーホリ', 'ハンガリー語学習', '温泉', '歴史']
  });
} 