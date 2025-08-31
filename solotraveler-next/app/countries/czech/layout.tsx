import { Metadata } from "next";
import { generateCzechMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateCzechMetadata();
}

export default function CzechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 