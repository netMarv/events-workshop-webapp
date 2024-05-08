import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "P-CATION Workshops",
  description:
    "Tauchen Sie ein in die faszinierende Welt der digitalen Innovationen und künstlichen Intelligenz (KI) mit unseren hochkarätigen Veranstaltungen. Wir sind Ihre Tür zur Zukunft, und unsere Workshops sowie Speaker-Veranstaltungen bieten Ihnen exklusiven Zugang zu den neuesten Trends und Entwicklungen in der digitalen Welt.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="de">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
