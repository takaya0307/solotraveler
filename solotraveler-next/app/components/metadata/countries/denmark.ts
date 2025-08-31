import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateDenmarkMetadata(): Metadata {
  const countryInfo = getCountryInfo('denmark');
  
  if (!countryInfo) {
    throw new Error('Denmark country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['北欧デザイン', 'ヒュッゲ文化', '生活の質'],
    articleSection: 'デンマークワーホリ',
    articleTags: ['デンマーク', 'ワーホリ', 'デンマーク語学習', 'デザイン', '生活の質']
  });
} 