import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generatePortugalMetadata(): Metadata {
  const countryInfo = getCountryInfo('portugal');
  
  if (!countryInfo) {
    throw new Error('Portugal country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ファド音楽', 'タイル文化', '大航海時代'],
    articleSection: 'ポルトガルワーホリ',
    articleTags: ['ポルトガル', 'ワーホリ', 'ポルトガル語学習', '歴史', '海岸線']
  });
} 