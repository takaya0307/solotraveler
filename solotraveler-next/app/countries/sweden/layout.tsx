import { Metadata } from "next";
import { generateSwedenMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateSwedenMetadata();
}

export default function SwedenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 