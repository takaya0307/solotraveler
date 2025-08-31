import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateSwedenMetadata(): Metadata {
  const countryInfo = getCountryInfo('sweden');
  
  if (!countryInfo) {
    throw new Error('Sweden country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['北欧デザイン', '福祉文化', '北欧'],
    articleSection: 'スウェーデンワーホリ',
    articleTags: ['スウェーデン', 'ワーホリ', 'スウェーデン語学習', '福祉', 'デザイン']
  });
} 