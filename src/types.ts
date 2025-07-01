export interface Country {
  id: string;
  name: string;
  nameJa: string;
  capital: string;
  coordinates: [number, number];
  scores: {
    safety: number;      // 治安の良さ
    cost: number;        // コスト
  };
  description: string;
  tips: string[];
  bestTimeToVisit: string;
  visaRequired: boolean;
  imageUrl: string;
  requiredDays: number; // 観光に必要な日数
  flightCost: string; // 航空券の料金目安
} 