import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hana Boy Contents",
  description: "Hana Boy Contents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-black text-white p-4 text-center text-xl font-bold">
          Hana Boy
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
