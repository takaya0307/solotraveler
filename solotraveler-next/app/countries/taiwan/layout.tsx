import { Metadata } from "next";
import { generateTaiwanMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateTaiwanMetadata();
}

export default function TaiwanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 