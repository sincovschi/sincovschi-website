import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Wellcome to sincovchi website.</title>
      </Head>
      <h1>
        <style jsx>{`
          h1 {
            background-color: coral;
            height: 200vh;
          }
        `}</style>
        <span> Hello there, </span>
        Welcome to Sincovschi&apos;s blog 👋
      </h1>
    </>
  );
}
