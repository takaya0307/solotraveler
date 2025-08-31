import { Metadata } from "next";
import { generateAboutWorkingHolidayMetadata } from "../components/metadata/aboutWorkingHoliday";

export const generateMetadata = (): Metadata => {
  return generateAboutWorkingHolidayMetadata();
};

export default function AboutWorkingHolidayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 