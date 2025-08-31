import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generatePolandMetadata(): Metadata {
  const countryInfo = getCountryInfo('poland');
  
  if (!countryInfo) {
    throw new Error('Poland country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['ポーランド料理', '歴史文化', '中欧'],
    articleSection: 'ポーランドワーホリ',
    articleTags: ['ポーランド', 'ワーホリ', 'ポーランド語学習', '歴史', '文化']
  });
} 