import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateNewZealandMetadata(): Metadata {
  const countryInfo = getCountryInfo('newzealand');
  
  if (!countryInfo) {
    throw new Error('New Zealand country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定（3-5個に絞る）
    customKeywords: ['ニュージーランド ワーホリ 準備', 'ニュージーランド ワーホリ 費用'],
    articleSection: 'ニュージーランドワーホリ',
    articleTags: ['ニュージーランド', 'ワーホリ', '海外就労']
  });
} 