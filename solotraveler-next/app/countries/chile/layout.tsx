import { Metadata } from "next";
import { generateChileMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateChileMetadata();
}

export default function ChileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 