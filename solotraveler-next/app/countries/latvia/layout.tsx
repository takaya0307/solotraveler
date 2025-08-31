import { Metadata } from "next";
import { generateLatviaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateLatviaMetadata();
}

export default function LatviaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 