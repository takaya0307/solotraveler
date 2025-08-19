# 国の詳細ページ共通コンポーネント

このディレクトリには、国の詳細ページのデザインと構成を統一するための共通コンポーネントが含まれています。

## コンポーネント一覧

### 1. CountryDetailLayout.tsx
国の詳細ページのメインレイアウトコンポーネントです。以下の要素を含みます：
- ヘッダー（ロゴ、ナビゲーション）
- ヒーローセクション（国の画像とタイトル）
- 滞在情報カード（最低賃金、対象年齢、滞在期間、定員数）
- 国の魅力セクション
- 都市一覧セクション
- おすすめセクション
- 無料相談セクション

### 2. CountryPageTemplate.tsx
新しい国のページを簡単に作成するためのテンプレートコンポーネントです。

### 3. CountryDetailLayout.module.css
共通のスタイルシートです。

## 使用方法

### 基本的な使用方法

```tsx
import CountryDetailLayout from "../../components/CountryDetailLayout";

export default function CountryPage() {
  const country = countryData.countries.find(c => c.id === "country_id")!;
  
  return (
    <CountryDetailLayout
      country={country}
      pageTitle={`${country.nameJa}ワーキングホリデーの魅力`}
      pageDescription="国の説明文"
      countryDescription="国の詳細な説明"
      countryFeatures={[
        {
          title: "特徴1",
          description: "説明1",
          imageUrl: "画像URL1",
          imageAlt: "代替テキスト1"
        }
        // ... 他の特徴
      ]}
      countryAtmosphere={[
        {
          title: "気候",
          description: "気候の説明",
          icon: "🌤️"
        }
        // ... 他の雰囲気要素
      ]}
      workingHolidayReasons={[
        "理由1",
        "理由2"
        // ... 他の理由
      ]}
      englishLearningEnvironment={[
        "環境1",
        "環境2"
        // ... 他の環境要素
      ]}
      outdoorLifeDescription="アウトドアライフの説明"
      recommendedFor={[
        {
          title: "タイプ1",
          description: "説明1",
          color: "#166534",
          borderColor: "#22C55E",
          bgColor: "#F0FDF4",
          icon: "🏔️"
        }
        // ... 他のおすすめタイプ
      ]}
    />
  );
}
```

### テンプレートを使用した方法

```tsx
import CountryPageTemplate from "../../components/CountryPageTemplate";

export default function CountryPage() {
  return (
    <CountryPageTemplate
      countryId="country_id"
      pageTitle="ページタイトル"
      pageDescription="ページの説明"
      countryDescription="国の説明"
      countryFeatures={[/* 特徴の配列 */]}
      countryAtmosphere={[/* 雰囲気の配列 */]}
      workingHolidayReasons={[/* 理由の配列 */]}
      englishLearningEnvironment={[/* 環境の配列 */]}
      outdoorLifeDescription="アウトドアライフの説明"
      recommendedFor={[/* おすすめタイプの配列 */]}
    />
  );
}
```

## カスタマイズ

### 色の変更
`CountryDetailLayout.module.css`で色を変更できます：

```css
.info-card {
  background: #1E4E8C; /* メインカラー */
}

.consultation-button {
  background: #FF6B35; /* アクセントカラー */
}
```

### レイアウトの変更
`CountryDetailLayout.tsx`でレイアウトを変更できます。

## 注意事項

1. 各国のページで異なるコンテンツを表示する場合は、propsで渡してください
2. 画像URLは適切な画像を指定してください
3. レスポンシブデザインは既に実装されています
4. SEO対策（タイトル、メタディスクリプション）は自動で設定されます

## 既存ページの更新

既存の国のページを更新する場合は、以下の手順で行ってください：

1. 既存のページの内容を確認
2. `CountryDetailLayout`コンポーネントを使用するように更新
3. 国の固有の情報をpropsで渡す
4. 必要に応じてカスタマイズ

これにより、デザインの統一性を保ちながら、各国の固有の情報を表示できます。 