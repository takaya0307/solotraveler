import { Metadata } from "next";
import { generateFranceMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateFranceMetadata();
}

export default function FranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 