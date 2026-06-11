import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Simulado ENEM: questões oficiais das últimas provas",
    template: "%s · Simulado ENEM",
  },
  description:
    "Monte simulados gratuitos com questões oficiais do ENEM (2019 a 2023). Escolha as áreas e a quantidade de questões, responda no ritmo da prova e descubra o que estudar.",
};

export const viewport: Viewport = {
  themeColor: "#101014",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <script
          // Aplica o tema salvo antes do primeiro paint para evitar flash.
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("simulado-enem:theme")==="light")document.documentElement.classList.add("light")}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
