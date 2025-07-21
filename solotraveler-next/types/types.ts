export type WorkingHolidayCity = {
  id: string;
  name: string;            // 都市名（英語）
  nameJa: string;          // 都市名（日本語）
  description: string;     // 都市の説明
  imageUrl: string;        // 画像URL
  tips: string[];          // おすすめポイント
  // 必要に応じて他の項目も追加可能
};

export type WorkingHolidayCountry = {
  id: string;
  name: string;            // 国名（英語）
  nameJa: string;          // 国名（日本語）
  countryCode: string;     // 国コード（例: JP, AU）
  imageUrl: string;        // 国のイメージ画像
  ageRange: string;        // 対象年齢
  stayPeriod: string;      // 滞在期間
  minWage: string;         // 最低賃金
  quota: string;           // ワーホリ定員数
  bestTimeToVisit: string; // ベストシーズン
  cities: WorkingHolidayCity[]; // 都市リスト
  recommendation?: string; // 向いている人の特徴（追加）
  summary?: string;        // 国の概要説明（追加）
  // 必要に応じて他の項目も追加可能
}; 