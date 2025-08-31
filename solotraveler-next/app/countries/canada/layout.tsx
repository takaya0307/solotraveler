import { Metadata } from "next";
import { generateCanadaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateCanadaMetadata();
}

export default function CanadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 