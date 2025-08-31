import { Metadata } from "next";
import { generateSpainMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateSpainMetadata();
}

export default function SpainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 