# ワーホリパス - ワーキングホリデー制度の総合情報サイト

世界各国のワーキングホリデー制度の詳細情報を提供するNext.jsベースのWebアプリケーションです。

## 🚀 機能

- 世界各国のワーキングホリデー制度情報
- 最低賃金、対象年齢、滞在期間、定員数などの詳細情報
- 都市別の掲示板機能
- レスポンシブデザイン
- SEO最適化

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Inter, Dancing Script, Kiwi Maru
- **画像最適化**: Next.js Image Component

## 📱 SEO対策

このプロジェクトでは以下のSEO対策を実装しています：

### メタデータ最適化
- 詳細なtitle、description、keywords
- Open Graph と Twitter Card 対応
- 構造化データ（JSON-LD）の実装

### パフォーマンス最適化
- 画像の最適化（WebP、AVIF対応）
- フォントの最適化
- バンドル分析ツール

### 検索エンジン対応
- 自動生成されるsitemap.xml
- robots.txtの最適化
- セマンティックHTML構造

### アクセシビリティ
- スクリーンリーダー対応
- キーボードナビゲーション
- 適切なalt属性

## 🚀 セットアップ

### 必要な環境
- Node.js 18以上
- npm または yarn

### インストール
```bash
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### SEOチェック
```bash
npm run seo-check
```

## 📁 プロジェクト構造

```
solotraveler-next/
├── app/                    # Next.js App Router
│   ├── about/             # アバウトページ
│   ├── countries/         # 国別ページ
│   ├── api/               # API ルート
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── public/                 # 静的ファイル
├── types/                  # TypeScript型定義
├── next.config.js          # Next.js設定
├── tailwind.config.js      # Tailwind CSS設定
└── package.json            # 依存関係
```

## 🌍 対応国

現在以下の国々のワーキングホリデー制度情報を提供しています：

- オーストラリア
- カナダ
- ニュージーランド
- イギリス
- アイルランド
- フランス
- ドイツ
- スペイン
- イタリア
- ポルトガル
- オーストリア
- ノルウェー
- デンマーク
- ポーランド
- チェコ
- スロバキア
- ハンガリー
- アイスランド
- 香港
- 台湾
- 韓国

## 📊 パフォーマンス

- Lighthouse スコア: 90+
- Core Web Vitals: 良好
- 画像最適化: WebP/AVIF対応
- フォント最適化: font-display: swap

## 🔧 カスタマイズ

### 新しい国の追加
1. `types/types.ts`に国情報を追加
2. `app/countries/[slug]/page.tsx`に国別ページを作成
3. `app/sitemap.ts`にURLを追加

### スタイルの変更
- `app/globals.css`でTailwind CSSのカスタマイズ
- コンポーネント固有のスタイルはインラインスタイルで実装

## 📈 分析・監視

- Google Analytics 4 対応
- パフォーマンス監視
- SEO スコア追跡

## 🚀 デプロイ

### Vercel（推奨）
```bash
npm run build
vercel --prod
```

### その他のプラットフォーム
- Netlify
- AWS Amplify
- その他の静的ホスティング

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。

## 📞 サポート

質問やサポートが必要な場合は、イシューを作成してください。

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/geist), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
