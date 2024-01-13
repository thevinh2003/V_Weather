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
        <title>Nimbus</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

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
