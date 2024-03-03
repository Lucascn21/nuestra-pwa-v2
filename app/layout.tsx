import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const APP_NAME = "Serwist example";
const APP_DESCRIPTION = "This is an example of using Serwist with Next.js";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - PWA App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      
      <head>
        <link rel="stylesheet" href="./css/layout.css" />
      </head>
           
      <body>
      <header>
        <h1>Encabezado</h1>
      </header>

      {/* Navegación */}
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          {/* Agrega más enlaces de navegación según sea necesario */}
        </ul>
      </nav>


      <main >
        {children}
      </main>


      <footer>
        <p>Pie de página</p>
      </footer>
      </body>
    </html>
  );
}
