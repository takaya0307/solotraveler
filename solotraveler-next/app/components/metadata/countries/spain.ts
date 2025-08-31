import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateSpainMetadata(): Metadata {
  const countryInfo = getCountryInfo('spain');
  
  if (!countryInfo) {
    throw new Error('Spain country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['タパス文化', 'フラメンコ', '地中海文化'],
    articleSection: 'スペインワーホリ',
    articleTags: ['スペイン', 'ワーホリ', 'スペイン語学習', '文化', '地中海']
  });
} 