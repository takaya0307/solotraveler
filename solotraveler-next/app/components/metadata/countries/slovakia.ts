import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateSlovakiaMetadata(): Metadata {
  const countryInfo = getCountryInfo('slovakia');
  
  if (!countryInfo) {
    throw new Error('Slovakia country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['山岳文化', 'スロバキア料理', '中欧'],
    articleSection: 'スロバキアワーホリ',
    articleTags: ['スロバキア', 'ワーホリ', 'スロバキア語学習', '山々', '自然']
  });
} 