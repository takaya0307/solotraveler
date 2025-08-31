import { Metadata } from "next";
import { generateNewZealandMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateNewZealandMetadata();
}

export default function NewZealandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 