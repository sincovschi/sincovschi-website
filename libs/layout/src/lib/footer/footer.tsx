/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <style jsx>{`
        footer {
          background: lightblue;
        }
      `}</style>
      <h1>Created by ©Eugeniu Sincovschi.</h1>
    </footer>
  );
}
