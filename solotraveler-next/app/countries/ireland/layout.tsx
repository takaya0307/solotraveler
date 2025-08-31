import { Metadata } from "next";
import { generateIrelandMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateIrelandMetadata();
}

export default function IrelandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 