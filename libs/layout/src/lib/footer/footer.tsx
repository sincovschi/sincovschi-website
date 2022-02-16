/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <h6>Copyright © Eugeniu Sincovschi 2021.</h6>
      <style jsx>{`
        h6 {
          margin: 0.3rem 0;
          font-size: 0.6em;
        }
      `}</style>
    </footer>
  );
}
