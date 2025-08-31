import { Metadata } from "next";
import { generateDenmarkMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateDenmarkMetadata();
}

export default function DenmarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 