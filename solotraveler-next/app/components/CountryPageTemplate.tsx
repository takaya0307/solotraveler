"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "./CountryDetailLayout";
import countryData from "../../db.json";

interface CountryPageTemplateProps {
  countryId: string;
  pageTitle: string;
  pageDescription: string;
  countryDescription: string;
  countryFeatures: Array<{
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }>;
  countryAtmosphere: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  workingHolidayReasons: string[];
  englishLearningEnvironment: string[];
  outdoorLifeDescription: string;
  recommendedFor: Array<{
    title: string;
    description: string;
    color: string;
    borderColor: string;
    bgColor: string;
    icon: string;
  }>;
}

export default function CountryPageTemplate({
  countryId,
  pageTitle,
  pageDescription,
  countryDescription,
  countryFeatures,
  countryAtmosphere,
  workingHolidayReasons,
  englishLearningEnvironment,
  outdoorLifeDescription,
  recommendedFor
}: CountryPageTemplateProps) {
  const country = countryData.countries.find(c => c.id === countryId)!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ${country.nameJa}比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${country.nameJa}ワーホリの費用、条件、おすすめエージェントを徹底比較。${pageDescription}でワーホリ体験。`);
    }
  }, [country.nameJa, pageDescription]);

  return (
    <CountryDetailLayout
      country={country}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      countryDescription={countryDescription}
      countryFeatures={countryFeatures}
      countryAtmosphere={countryAtmosphere}
      workingHolidayReasons={workingHolidayReasons}
      englishLearningEnvironment={englishLearningEnvironment}
      outdoorLifeDescription={outdoorLifeDescription}
      recommendedFor={recommendedFor}
    />
  );
} 