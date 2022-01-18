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
      <p>Created by ©Eugeniu Sincovschi.</p>
    </footer>
  );
}
