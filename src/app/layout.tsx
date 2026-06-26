import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";

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
  themeColor: "#fafafa",
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
          // Tema claro é o padrão; aplica a classe "dark" antes do primeiro
          // paint só se o aluno tiver escolhido o modo escuro (evita flash).
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("simulado-enem:theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
