
import { Metadata } from "next";
import { generateItalyMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateItalyMetadata();
}

export default function ItalyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 