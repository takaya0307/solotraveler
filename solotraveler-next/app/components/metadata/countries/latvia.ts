import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateLatviaMetadata(): Metadata {
  const countryInfo = getCountryInfo('latvia');
  
  if (!countryInfo) {
    throw new Error('Latvia country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['建築文化', '自然文化', 'バルト三国'],
    articleSection: 'ラトビアワーホリ',
    articleTags: ['ラトビア', 'ワーホリ', 'ラトビア語学習', '建築', '自然']
  });
} 