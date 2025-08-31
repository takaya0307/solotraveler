import { Metadata } from "next";
import { generateLuxembourgMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateLuxembourgMetadata();
}

export default function LuxembourgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 