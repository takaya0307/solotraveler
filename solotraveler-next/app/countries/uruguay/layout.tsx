import { Metadata } from "next";
import { generateUruguayMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateUruguayMetadata();
}

export default function UruguayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 