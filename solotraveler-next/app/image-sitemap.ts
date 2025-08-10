import { MetadataRoute } from 'next'

export default async function imageSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-domain.com' // 実際のドメインに変更してください
  
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
  
  // メインページの最終更新日を設定
  const mainPageLastModified = lastModified
  
  // 各国の国旗画像（flagcdn.com）
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
  ]

  // メインページの画像
  const mainPageImages = [
    {
      url: baseUrl,
      lastModified: mainPageLastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      images: [
        {
          loc: `${baseUrl}/ogp.png`,
          title: 'ワーホリパス - ワーキングホリデー制度の総合情報サイト',
          caption: 'ワーホリパスのメイン画像',
        },
        {
          loc: `${baseUrl}/header.png`,
          title: 'ワーホリパス ヘッダー画像',
          caption: 'サイトヘッダー用の画像',
        },
        {
          loc: `${baseUrl}/logo192.png`,
          title: 'ワーホリパス ロゴ（192x192）',
          caption: 'サイトロゴの192x192サイズ',
        },
        {
          loc: `${baseUrl}/logo512.png`,
          title: 'ワーホリパス ロゴ（512x512）',
          caption: 'サイトロゴの512x512サイズ',
        },
        {
          loc: `${baseUrl}/favicon.png`,
          title: 'ワーホリパス ファビコン',
          caption: 'サイトのファビコン',
        },
      ],
    },
  ]

  // 各国詳細ページの画像（国旗 + 都市画像）
  const countryPageImages = countryFlags.map(country => {
    // 各国の個別最終更新日を取得
    const countryLastModified = lastModifiedData?.countryUpdates?.[country.id] || lastModified;
    
    return {
      url: `${baseUrl}/countries/${country.id}`,
      lastModified: countryLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      images: [
        {
          loc: `https://flagcdn.com/w80/${country.code}.png`,
          title: `${country.name}の国旗`,
          caption: `${country.name}の国旗画像`,
          geoLocation: country.name,
          license: 'https://flagcdn.com/',
        },
        {
          loc: `${baseUrl}/ogp.png`,
          title: `${country.name}ワーホリ情報`,
          caption: `${country.name}のワーホリ制度詳細情報`,
        },
      ],
    };
  });

  // アバウトページの画像
  const aboutPageImages = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [
        {
          loc: `${baseUrl}/ogp.png`,
          title: 'ワーホリパス アバウトページ',
          caption: 'アバウトページ用の画像',
        },
      ],
    },
    {
      url: `${baseUrl}/about-workingholiday`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [
        {
          loc: `${baseUrl}/ogp.png`,
          title: 'ワーキングホリデー制度とは',
          caption: 'ワーキングホリデー制度説明ページ用の画像',
        },
      ],
    },
  ]

  // 全画像サイトマップを結合
  return [...mainPageImages, ...countryPageImages, ...aboutPageImages]
} 