import { Metadata } from "next";
import { generateSlovakiaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateSlovakiaMetadata();
}

export default function SlovakiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 