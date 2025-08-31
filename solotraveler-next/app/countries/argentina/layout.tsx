import { Metadata } from "next";
import { generateArgentinaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateArgentinaMetadata();
}

export default function ArgentinaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 