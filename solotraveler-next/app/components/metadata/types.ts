import { Metadata } from "next";

// 国別メタデータの基本情報
export interface CountryMetadataInfo {
  id: string;
  nameJa: string;
  nameEn: string;
  description: string;
  keywords: string[];
  cities: string[];
  features: string[];
  languages: string[];
  culture: string[];
}

// メタデータ生成関数の型
export type MetadataGenerator = () => Metadata;

// 国別メタデータの設定
export interface CountryMetadataConfig {
  countryInfo: CountryMetadataInfo;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
  articleSection?: string;
  articleTags?: string[];
} 