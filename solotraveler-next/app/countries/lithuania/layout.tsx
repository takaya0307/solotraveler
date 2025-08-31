import { Metadata } from "next";
import { generateLithuaniaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateLithuaniaMetadata();
}

export default function LithuaniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 