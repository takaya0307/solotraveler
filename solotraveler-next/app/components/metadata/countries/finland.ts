import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateFinlandMetadata(): Metadata {
  const countryInfo = getCountryInfo('finland');
  
  if (!countryInfo) {
    throw new Error('Finland country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['サウナ文化', '北欧文化', '生活'],
    articleSection: 'フィンランドワーホリ',
    articleTags: ['フィンランド', 'ワーホリ', 'フィンランド語学習', 'サウナ', '教育']
  });
} 