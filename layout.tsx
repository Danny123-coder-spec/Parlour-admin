import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./auth/Provider";
import NavBar from "./dashboard/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#eff3f8] h-screen `}>
        <NavBar/>
        <main className="">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
