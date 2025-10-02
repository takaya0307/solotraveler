import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateCanadaMetadata(): Metadata {
  const countryInfo = getCountryInfo('canada');
  
  if (!countryInfo) {
    throw new Error('Canada country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定（3-5個に絞る）
    customKeywords: ['カナダ ワーホリ 準備', 'カナダ ワーホリ 費用'],
    articleSection: 'カナダワーホリ',
    articleTags: ['カナダ', 'ワーホリ', '海外就労']
  });
} 