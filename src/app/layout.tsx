import type { Metadata } from "next";
import "../styles/globals.css";
import vazirFont from "@/constans/localFonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
  description: "Blog pages description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans  min-h-screen`}>
        <Header />
        <div className="container xl:max-w-7xl ">{children}</div>
      </body>
    </html>
  );
}
