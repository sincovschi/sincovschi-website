import { AppProps } from 'next/app';
import { Footer, Header } from '@sincovschi-website/layout';
import Head from 'next/head';
import './styles.css';

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sincovschi's website</title>
      </Head>

      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
