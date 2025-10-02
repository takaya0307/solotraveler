import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateAustraliaMetadata(): Metadata {
  const countryInfo = getCountryInfo('australia');
  
  if (!countryInfo) {
    throw new Error('Australia country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定（3-5個に絞る）
    customKeywords: ['オーストラリア ワーホリ 準備', 'オーストラリア ワーホリ 費用'],
    articleSection: 'オーストラリアワーホリ',
    articleTags: ['オーストラリア', 'ワーホリ', '海外就労']
  });
} 