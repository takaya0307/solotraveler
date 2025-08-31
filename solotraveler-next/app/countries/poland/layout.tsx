import { Metadata } from "next";
import { generatePolandMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generatePolandMetadata();
}

export default function PolandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 