import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323, Fira_Code, Dancing_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = VT323({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

const codeFont = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
});

const signatureFont = Dancing_Script({
  weight: "700",
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Pedro Chaupin Sota | Portafolio Dev",
  description: "Portafolio de Juan Pedro, estudiante de Ingeniería de Sistemas en la Universidad Nacional de Cañete. Especializado en desarrollo de software, Java, React y bases de datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} ${codeFont.variable} ${signatureFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-slate-300 font-sans">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}