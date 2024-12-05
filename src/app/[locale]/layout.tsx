import type { Metadata } from "next";
import "../favicon.ico";
import "../globals.css"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Gabriel Martins Teixeira Piagentini",
  description: "Landing page for Gabriel Piagentini's service.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={`font-mono antialiased sm:text-base text-xs`}>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
