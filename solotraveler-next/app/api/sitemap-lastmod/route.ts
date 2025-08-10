import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 現在の日時を取得
    const currentDate = new Date();
    
    // データベースやファイルの最終更新日を取得（実際の実装では適切なデータソースから取得）
    // 現在は現在時刻を使用
    const lastModified = currentDate.toISOString();
    
    // 各国のデータ更新状況（実際の実装ではデータベースから取得）
    const countryUpdates = {
      australia: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      canada: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
      newzealand: currentDate.toISOString(), // 今日
      uk: new Date(currentDate.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3日前
      ireland: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      france: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
      germany: currentDate.toISOString(), // 今日
      spain: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      italy: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
      portugal: currentDate.toISOString(), // 今日
      austria: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      norway: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
      denmark: currentDate.toISOString(), // 今日
      poland: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      czech: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
      slovakia: currentDate.toISOString(), // 今日
      hungary: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      iceland: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
      southkorea: currentDate.toISOString(), // 今日
      taiwan: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2日前
      hongkong: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1日前
    };

    return NextResponse.json({
      lastModified: lastModified,
      countryUpdates: countryUpdates,
      generatedAt: currentDate.toISOString(),
    });
  } catch (error) {
    console.error('Error fetching sitemap lastmod:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lastmod data' },
      { status: 500 }
    );
  }
} 