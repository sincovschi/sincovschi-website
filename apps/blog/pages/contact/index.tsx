import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contacts - sincovschi</title>
      </Head>

      <div>
        <ul>
          <li>
            <a href="mailto:eugen.sincovschi@outlook.com">
              eugen.sincovschi@outlook.com
            </a>
          </li>
          <li>
            <a href="tel:37367212358">+(373) 672 12 358</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sincovschi/" target="_blank">
              linkedin.com/in/sincovschi
            </a>
          </li>
          <li>
            <a href="https://github.com/sincovschi" target="_blank">
              github.com/sincovschi
            </a>
          </li>
          <li>
            <a
              href="https://dzone.com/users/4645863/sincovschi.html"
              target="_blank"
            >
              profile: dzone.com
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
