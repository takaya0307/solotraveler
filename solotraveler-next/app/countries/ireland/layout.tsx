import { Metadata } from "next";
import { generateIrelandMetadata, generateIrelandStructuredData } from "../../components/metadata";
import Script from "next/script";

// メタデータの生成
export async function generateMetadata(): Promise<Metadata> {
  return generateIrelandMetadata();
}

export default function IrelandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateIrelandStructuredData();

  return (
    <>
      {children}
      <Script
        id="ireland-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
} 