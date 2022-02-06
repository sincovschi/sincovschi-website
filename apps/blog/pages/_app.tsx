import { AppProps } from 'next/app';
import { Footer, Header } from '@sincovschi-website/layout';
import Head from 'next/head';
import './styles.css';

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sincovschi's website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
