import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'boards.json');

function readBoards() {
  if (!fs.existsSync(DATA_PATH)) return {};
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeBoards(data: any) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET(request: Request, { params }: { params: { cityId: string } }) {
  const boards = readBoards();
  const cityId = params.cityId;
  const posts = boards[cityId] || [];
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest, { params }: { params: { cityId: string } }) {
  const cityId = params.cityId;
  const body = await req.json();
  const content = body.content;
  if (!content || typeof content !== 'string' || content.trim() === '') {
    return NextResponse.json({ error: '投稿内容は必須です' }, { status: 400 });
  }
  const boards = readBoards();
  const post: any = {
    id: Date.now().toString(),
    content,
    createdAt: new Date().toISOString()
  };
  // nicknameが送信されてきた場合のみ追加
  if (body.nickname) post.nickname = body.nickname;
  if (!boards[cityId]) boards[cityId] = [];
  boards[cityId].unshift(post);
  writeBoards(boards);
  return NextResponse.json(post);
}

export async function DELETE(req: NextRequest, { params }: { params: { cityId: string } }) {
  const cityId = params.cityId;
  const { postId, password } = await req.json();
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!password || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: '認証エラー: パスワードが正しくありません' }, { status: 401 });
  }
  if (!postId) {
    return NextResponse.json({ error: 'postIdが必要です' }, { status: 400 });
  }
  const boards = readBoards();
  if (!boards[cityId]) {
    return NextResponse.json({ error: '該当都市の投稿がありません' }, { status: 404 });
  }
  const beforeLen = boards[cityId].length;
  boards[cityId] = boards[cityId].filter((post: any) => post.id !== postId);
  if (boards[cityId].length === beforeLen) {
    return NextResponse.json({ error: '該当投稿が見つかりません' }, { status: 404 });
  }
  writeBoards(boards);
  return NextResponse.json({ success: true });
} 