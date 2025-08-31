import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateLithuaniaMetadata(): Metadata {
  const countryInfo = getCountryInfo('lithuania');
  
  if (!countryInfo) {
    throw new Error('Lithuania country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['歴史文化', 'リトアニア料理', 'バルト三国'],
    articleSection: 'リトアニアワーホリ',
    articleTags: ['リトアニア', 'ワーホリ', 'リトアニア語学習', '旧市街', '歴史']
  });
} 