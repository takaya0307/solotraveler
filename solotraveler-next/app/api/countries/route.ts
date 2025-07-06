import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // db.jsonファイルを直接読み込む
    const dbPath = path.join(process.cwd(), 'db.json');
    const dbContent = fs.readFileSync(dbPath, 'utf8');
    const countriesData = JSON.parse(dbContent);
    
    // デバッグ情報をコンソールに出力
    console.log(`Total countries in db.json: ${countriesData.countries.length}`);
    
    // countries配列のみ返す
    return NextResponse.json(countriesData.countries);
  } catch (error) {
    console.error('Error reading db.json:', error);
    return NextResponse.json({ error: 'Failed to load countries data' }, { status: 500 });
  }
} 