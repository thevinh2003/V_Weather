
import { Analytics } from "@/components/analytics";
import { Layout } from "@/components/layouts";
import QueryProvider from "@/components/QueryProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.title = "V Weather";
  }
  , []);
  return (
    <>
      <QueryProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </QueryProvider>
      <Analytics/>
    </>
  );
}
