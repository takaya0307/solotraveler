import { Metadata } from "next";
import { generateUKMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateUKMetadata();
}

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 