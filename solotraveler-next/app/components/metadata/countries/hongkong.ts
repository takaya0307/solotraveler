import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateHongKongMetadata(): Metadata {
  const countryInfo = getCountryInfo('hongkong');
  
  if (!countryInfo) {
    throw new Error('Hong Kong country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['融合文化', 'ビジネス文化', 'アジア'],
    articleSection: '香港ワーホリ',
    articleTags: ['香港', 'ワーホリ', '中国語学習', '英語学習', '国際都市']
  });
} 