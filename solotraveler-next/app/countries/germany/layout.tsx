import { Metadata } from "next";
import { generateGermanyMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateGermanyMetadata();
}

export default function GermanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 