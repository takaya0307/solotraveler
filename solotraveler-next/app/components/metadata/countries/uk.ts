import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateUKMetadata(): Metadata {
  const countryInfo = getCountryInfo('uk');
  
  if (!countryInfo) {
    throw new Error('UK country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['美術館', 'パブ文化', '歴史文化'],
    articleSection: 'イギリスワーホリ',
    articleTags: ['イギリス', 'ワーホリ', '英語学習', '歴史', '文化']
  });
} 