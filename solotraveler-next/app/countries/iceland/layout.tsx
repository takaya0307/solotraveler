import { Metadata } from "next";
import { generateIcelandMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateIcelandMetadata();
}

export default function IcelandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 