import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://workingholidaypass.jp';
  
  // 画像サイトマップの生成
  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}/ogp.png</image:loc>
      <image:title>ワーホリ対応31カ国一覧と人気都市</image:title>
      <image:caption>世界各国のワーキングホリデー制度の詳細情報</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/about-workingholiday</loc>
    <image:image>
      <image:loc>${baseUrl}/ogp.png</image:loc>
      <image:title>ワーホリとは</image:title>
      <image:caption>ワーキングホリデー制度の詳細説明</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new NextResponse(imageSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
