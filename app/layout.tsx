import type { Metadata } from "next";
import { Mona_Sans as MonaSansFont } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = MonaSansFont({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Interviewer",
  description: "Interviewer :- An AI-powered interview assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
