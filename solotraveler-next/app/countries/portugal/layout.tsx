import { Metadata } from "next";
import { generatePortugalMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generatePortugalMetadata();
}

export default function PortugalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 