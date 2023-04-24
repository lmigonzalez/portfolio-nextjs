import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { StateContext } from '@/context/StateContext';
import Script from 'next/script';
export default function App({ Component, pageProps }: AppProps) {
  const measurementId = 'G-JYYNV401QM';
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JYYNV401QM`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JYYNV401QM');
    `}
      </Script>

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  );
}
