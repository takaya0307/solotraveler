import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateAustraliaMetadata(): Metadata {
  const countryInfo = getCountryInfo('australia');
  
  if (!countryInfo) {
    throw new Error('Australia country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['サーフィン', 'カフェ文化', 'アウトドアライフ'],
    articleSection: 'オーストラリアワーホリ',
    articleTags: ['オーストラリア', 'ワーホリ', '英語学習', 'ビーチライフ']
  });
} 