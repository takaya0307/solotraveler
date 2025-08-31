import { Metadata } from "next";
import { generateHongKongMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateHongKongMetadata();
}

export default function HongKongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 