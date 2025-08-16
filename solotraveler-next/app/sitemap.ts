import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://workingholidaypass.jp' // 実際のドメインに変更してください
  
  // 最終更新日を動的に取得
  let lastModifiedData: {
    lastModified: string;
    countryUpdates: Record<string, string>;
    generatedAt: string;
  } | undefined;
  
  try {
    const response = await fetch(`${baseUrl}/api/sitemap-lastmod`);
    if (response.ok) {
      lastModifiedData = await response.json();
    }
  } catch (error) {
    console.error('Error fetching lastmod data:', error);
  }
  
  // 現在の日時を取得（フォールバック）
  const currentDate = new Date()
  const lastModified = lastModifiedData?.lastModified || currentDate.toISOString()
  
  // 静的ページの最終更新日を設定
  const staticPagesLastModified = lastModified
  
  // 静的ページ（画像情報付き）
  const staticPages = [
    {
      url: baseUrl,
      lastModified: staticPagesLastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-workingholiday`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // 各国詳細ページ
  const countryFlags = [
    { id: 'australia', name: 'オーストラリア', code: 'au' },
    { id: 'canada', name: 'カナダ', code: 'ca' },
    { id: 'newzealand', name: 'ニュージーランド', code: 'nz' },
    { id: 'uk', name: 'イギリス', code: 'gb' },
    { id: 'ireland', name: 'アイルランド', code: 'ie' },
    { id: 'france', name: 'フランス', code: 'fr' },
    { id: 'germany', name: 'ドイツ', code: 'de' },
    { id: 'spain', name: 'スペイン', code: 'es' },
    { id: 'italy', name: 'イタリア', code: 'it' },
    { id: 'portugal', name: 'ポルトガル', code: 'pt' },
    { id: 'austria', name: 'オーストリア', code: 'at' },
    { id: 'norway', name: 'ノルウェー', code: 'no' },
    { id: 'denmark', name: 'デンマーク', code: 'dk' },
    { id: 'poland', name: 'ポーランド', code: 'pl' },
    { id: 'czech', name: 'チェコ', code: 'cz' },
    { id: 'slovakia', name: 'スロバキア', code: 'sk' },
    { id: 'hungary', name: 'ハンガリー', code: 'hu' },
    { id: 'iceland', name: 'アイスランド', code: 'is' },
    { id: 'southkorea', name: '韓国', code: 'kr' },
    { id: 'taiwan', name: '台湾', code: 'tw' },
    { id: 'hongkong', name: '香港', code: 'hk' },
    { id: 'netherlands', name: 'オランダ', code: 'nl' },
    { id: 'lithuania', name: 'リトアニア', code: 'lt' },
    { id: 'estonia', name: 'エストニア', code: 'ee' },
    { id: 'chile', name: 'チリ', code: 'cl' },
    { id: 'argentina', name: 'アルゼンチン', code: 'ar' },
    { id: 'uruguay', name: 'ウルグアイ', code: 'uy' },
    { id: 'luxembourg', name: 'ルクセンブルク', code: 'lu' },
    { id: 'latvia', name: 'ラトビア', code: 'lv' },
    { id: 'finland', name: 'フィンランド', code: 'fi' },
  ]

  const countryPages = countryFlags.map(country => {
    // 各国の個別最終更新日を取得
    const countryLastModified = lastModifiedData?.countryUpdates?.[country.id] || lastModified;
    
    return {
      url: `${baseUrl}/countries/${country.id}`,
      lastModified: countryLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    };
  });

  // 全サイトマップを結合
  const sitemap = [...staticPages, ...countryPages]

  return sitemap
} 