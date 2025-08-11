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
  
  // 静的ページ
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
  const countryPages = [
    'australia', 'canada', 'newzealand', 'uk', 'ireland', 'france', 'germany',
    'spain', 'italy', 'portugal', 'austria', 'norway', 'denmark', 'poland',
    'czech', 'slovakia', 'hungary', 'iceland', 'southkorea', 'taiwan', 'hongkong'
  ].map(countryId => {
    // 各国の個別最終更新日を取得
    const countryLastModified = lastModifiedData?.countryUpdates?.[countryId] || lastModified;
    
    return {
      url: `${baseUrl}/countries/${countryId}`,
      lastModified: countryLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    };
  });

  // 画像サイトマップへの参照を追加
  const sitemap = [...staticPages, ...countryPages]
  
  // 画像サイトマップのURLを追加
  sitemap.push({
    url: `${baseUrl}/image-sitemap.xml`,
    lastModified: currentDate.toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  })

  return sitemap
} 