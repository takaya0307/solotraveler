import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateCanadaMetadata(): Metadata {
  const countryInfo = getCountryInfo('canada');
  
  if (!countryInfo) {
    throw new Error('Canada country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['アウトドア', 'メープルシロップ', '多文化社会'],
    articleSection: 'カナダワーホリ',
    articleTags: ['カナダ', 'ワーホリ', '英語学習', 'フランス語学習', '自然']
  });
} 