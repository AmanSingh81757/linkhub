import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Barlow_Condensed, Inconsolata, Roboto_Slab, Lexend, Bodoni_Moda } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
});
const inconsolata = Inconsolata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inconsolata',
});
const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});
const lexend = Lexend({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lexend',
});
const bodoniModa = Bodoni_Moda({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bodoni-moda',
});
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "LinkHub",
  description: "Your one stop solution to all the links related needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodoniModa} ${GeistSans.className} ${barlowCondensed.variable} ${inconsolata.variable} ${robotoSlab.variable} ${lexend.variable}`}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center font-lexend">
          {children}
        </main>
      </body>
    </html>
  );
}
