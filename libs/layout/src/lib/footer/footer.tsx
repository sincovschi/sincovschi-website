/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <h3>Copyright © Eugeniu Sincovschi 2023.</h3>
      <p>
        Developed with <a href="https://nx.dev">nx.dev</a>,{' '}
        <a href="https://nestjs.com" target="_blank" rel="noreferrer">
          nestjs.com
        </a>
        ,{' '}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          nextjs.org
        </a>
        .
      </p>
      <p>
        Hosted on{' '}
        <a
          href="https://vercel.com/sincovschi"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . Source code{' '}
        <a
          href="https://github.com/sincovschi/sincovschi-website"
          target="_blank"
          rel="noreferrer"
        >
          github.com
        </a>
        .
      </p>
      <style jsx>{`
        footer {
          padding: 0.1rem 0;
          font-size: 0.6em;
        }
        p {
          margin: 0.1rem 0;
        }
      `}</style>
    </footer>
  );
}
