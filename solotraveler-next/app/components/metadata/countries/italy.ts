import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateItalyMetadata(): Metadata {
  const countryInfo = getCountryInfo('italy');
  
  if (!countryInfo) {
    throw new Error('Italy country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ピザ文化', '芸術文化', '地中海文化'],
    articleSection: 'イタリアワーホリ',
    articleTags: ['イタリア', 'ワーホリ', 'イタリア語学習', '芸術', '美食']
  });
} 