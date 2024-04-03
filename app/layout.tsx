import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from "./auth/Provider";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme
          accentColor="teal"
          grayColor="sand"
          panelBackground="solid"
          radius="large"
        >
          <AuthProvider>
            <Navbar />
            <main className="pb-5 px-5">{children}</main>
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
