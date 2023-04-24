import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { StateContext } from '@/context/StateContext';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.MEASUREMENT_ID}');
    `}
      </Script>

      <StateContext>
        <Component {...pageProps} />
        <Analytics />
      </StateContext>
    </>
  );
}
