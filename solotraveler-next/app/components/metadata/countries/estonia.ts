import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateEstoniaMetadata(): Metadata {
  const countryInfo = getCountryInfo('estonia');
  
  if (!countryInfo) {
    throw new Error('Estonia country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['デジタル文化', '北欧文化', 'バルト三国'],
    articleSection: 'エストニアワーホリ',
    articleTags: ['エストニア', 'ワーホリ', 'エストニア語学習', 'デジタル化', '技術']
  });
} 