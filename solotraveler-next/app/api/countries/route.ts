import { NextResponse } from 'next/server';
import countriesData from '../../../../db.json';

export async function GET() {
  // db.jsonのcountries配列のみ返す
  return NextResponse.json(countriesData.countries);
} 