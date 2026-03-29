import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sleeper Agency — Elite Business Automation",
  description:
    "Elite business automation for luxury shops in the Swiss market. Powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#1a1a1a] text-white antialiased">{children}</body>
    </html>
  );
}
