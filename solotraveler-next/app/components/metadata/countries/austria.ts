import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateAustriaMetadata(): Metadata {
  const countryInfo = getCountryInfo('austria');
  
  if (!countryInfo) {
    throw new Error('Austria country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['クラシック音楽', 'スキー文化', 'アルプス'],
    articleSection: 'オーストリアワーホリ',
    articleTags: ['オーストリア', 'ワーホリ', 'ドイツ語学習', '音楽', '芸術']
  });
} 