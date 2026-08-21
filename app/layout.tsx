import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: "Varun Taneja",
  description: "Full Stack AI Engineer at Rowan. CS + CE graduate from the University of Notre Dame.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en" className="text-white bg-[#121212] font-mono">
      <body className="antialiased px-4 sm:px-10 py-10 sm:py-20">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-auto md:pl-12 lg:pl-20 min-w-0 mt-6 md:mt-0 flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
