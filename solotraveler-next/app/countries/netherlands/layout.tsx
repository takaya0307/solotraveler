import { Metadata } from "next";
import { generateNetherlandsMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateNetherlandsMetadata();
}

export default function NetherlandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 