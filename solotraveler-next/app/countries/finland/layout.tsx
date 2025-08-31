import { Metadata } from "next";
import { generateFinlandMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateFinlandMetadata();
}

export default function FinlandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 