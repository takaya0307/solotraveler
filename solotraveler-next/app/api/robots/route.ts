import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# 管理画面や一時的なページはクロールしない
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# フィルタ・並び替え・パラメータ付きURLはクロールしない（canonicalで正規化）
Disallow: /*?*
Disallow: /*&*

# サイトマップ
Sitemap: https://workingholidaypass.jp/sitemap.xml

# クロール遅延（サーバー負荷軽減）
Crawl-delay: 1

# 画像のクロール許可
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.svg$`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
} 