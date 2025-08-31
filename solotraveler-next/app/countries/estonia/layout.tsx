import { Metadata } from "next";
import { generateEstoniaMetadata } from "../../components/metadata";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateEstoniaMetadata();
}

export default function EstoniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 