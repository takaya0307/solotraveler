import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateNorwayMetadata(): Metadata {
  const countryInfo = getCountryInfo('norway');
  
  if (!countryInfo) {
    throw new Error('Norway country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['北欧文化', 'アウトドア', 'フィヨルド'],
    articleSection: 'ノルウェーワーホリ',
    articleTags: ['ノルウェー', 'ワーホリ', 'ノルウェー語学習', '自然', 'フィヨルド']
  });
} 