import { Metadata } from "next";
import { generateHungaryMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateHungaryMetadata();
}

export default function HungaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 