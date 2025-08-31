import { Metadata } from "next";
import { generateAustraliaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateAustraliaMetadata();
}

export default function AustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 