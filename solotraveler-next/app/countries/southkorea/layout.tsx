import { Metadata } from "next";
import { generateSouthKoreaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateSouthKoreaMetadata();
}

export default function SouthKoreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 