import Head from "next/head";
import { FC, ReactNode } from "react";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>V Weather | Ứng dụng thời tiết</title>
        <meta name="description" content="Ứng dụng thời tiết V Weather"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://res.cloudinary.com/dwplockls/image/upload/v1705144361/V%20Weather/cloudy_mfhifa.png"/>
      </Head>
        <main
          className={cn(
            "font-sans min-h-screen bg-dark text-slate-900 antialiased",
            fontSans.variable
          )}>
          {children}
        </main>
    </>
  );
};
