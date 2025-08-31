import { Metadata } from "next";
import { generateAustriaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateAustriaMetadata();
}

export default function AustriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 