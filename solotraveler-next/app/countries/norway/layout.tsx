import { Metadata } from "next";
import { generateNorwayMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateNorwayMetadata();
}

export default function NorwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 