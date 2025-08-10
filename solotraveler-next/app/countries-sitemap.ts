import { MetadataRoute } from 'next'

export default async function countriesSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-domain.com' // 実際のドメインに変更してください
  
  // 現在の日時を取得
  const currentDate = new Date()
  
  // 各国の詳細情報
  const countries = [
    {
      id: 'australia',
      name: 'オーストラリア',
      cities: ['シドニー', 'メルボルン', 'ブリスベン', 'パース', 'アデレード'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'canada',
      name: 'カナダ',
      cities: ['トロント', 'バンクーバー', 'モントリオール', 'カルガリー', 'オタワ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'newzealand',
      name: 'ニュージーランド',
      cities: ['オークランド', 'ウェリントン', 'クライストチャーチ', 'クイーンズタウン'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'uk',
      name: 'イギリス',
      cities: ['ロンドン', 'マンチェスター', 'エディンバラ', 'リバプール', 'バーミンガム'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'ireland',
      name: 'アイルランド',
      cities: ['ダブリン', 'コーク', 'ゴールウェイ', 'リムリック'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'france',
      name: 'フランス',
      cities: ['パリ', 'リヨン', 'マルセイユ', 'トゥールーズ', 'ニース'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'germany',
      name: 'ドイツ',
      cities: ['ベルリン', 'ミュンヘン', 'ハンブルク', 'フランクフルト', 'ケルン'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'spain',
      name: 'スペイン',
      cities: ['マドリード', 'バルセロナ', 'バレンシア', 'セビリア', 'マラガ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'italy',
      name: 'イタリア',
      cities: ['ローマ', 'ミラノ', 'ナポリ', 'フィレンツェ', 'ベネチア'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'portugal',
      name: 'ポルトガル',
      cities: ['リスボン', 'ポルト', 'ファロ', 'コインブラ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'austria',
      name: 'オーストリア',
      cities: ['ウィーン', 'ザルツブルク', 'インスブルック', 'グラーツ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'norway',
      name: 'ノルウェー',
      cities: ['オスロ', 'ベルゲン', 'トロンハイム', 'スタヴァンゲル'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'denmark',
      name: 'デンマーク',
      cities: ['コペンハーゲン', 'オーフス', 'オーデンセ', 'オールボー'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'poland',
      name: 'ポーランド',
      cities: ['ワルシャワ', 'クラクフ', 'ウッチ', 'ヴロツワフ', 'ポズナン'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'czech',
      name: 'チェコ',
      cities: ['プラハ', 'ブルノ', 'オストラバ', 'プルゼニ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'slovakia',
      name: 'スロバキア',
      cities: ['ブラチスラバ', 'コシツェ', 'プレショフ', 'ジリナ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'hungary',
      name: 'ハンガリー',
      cities: ['ブダペスト', 'デブレツェン', 'セゲド', 'ミシュコルツ'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'iceland',
      name: 'アイスランド',
      cities: ['レイキャビク', 'コーパヴォグル', 'ハフナルフィヨルズゥル'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'southkorea',
      name: '韓国',
      cities: ['ソウル', '釜山', '大邱', '仁川', '光州'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'taiwan',
      name: '台湾',
      cities: ['台北', '高雄', '台中', '台南', '新竹'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      id: 'hongkong',
      name: '香港',
      cities: ['香港島', '九龍', '新界'],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // 各国のサイトマップエントリを生成
  const countryEntries = countries.map(country => ({
    url: `${baseUrl}/countries/${country.id}`,
    lastModified: currentDate,
    changeFrequency: country.changeFrequency,
    priority: country.priority,
    // 都市情報も含める（掲示板機能のため）
    additionalData: {
      countryName: country.name,
      cityCount: country.cities.length,
      cities: country.cities,
    },
  }))

  return countryEntries
} 