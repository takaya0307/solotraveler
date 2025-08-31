import { Metadata } from "next";
import { generateBaseMetadata, getCountryInfo } from "../templates";

export function generateIcelandMetadata(): Metadata {
  const countryInfo = getCountryInfo('iceland');
  
  if (!countryInfo) {
    throw new Error('Iceland country info not found');
  }

  return generateBaseMetadata({
    countryInfo,
    // カスタム設定があればここで指定
    customKeywords: ['北欧文化', '温泉文化', '神秘'],
    articleSection: 'アイスランドワーホリ',
    articleTags: ['アイスランド', 'ワーホリ', 'アイスランド語学習', '火山', '氷河']
  });
} 