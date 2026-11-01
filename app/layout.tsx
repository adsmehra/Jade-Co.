import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JADE & CO. — A design team you can trust",
  description:
    "We craft brands, interfaces, and digital experiences that earn loyalty. Not just attention — real, lasting trust with the people who matter most to your business.",
  applicationName: "JADE & CO.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f2ed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
