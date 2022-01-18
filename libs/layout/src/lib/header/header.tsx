/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <style jsx>{`
        header {
          color: pink;
        }
        #logo {
          font-size: 100px;
        }
      `}</style>
      <div id="logo">Logo</div>
      <ul>
        <li>Links</li>
        <li>Links</li>
        <li>Links</li>
        <li>Links</li>
        <li>Links</li>
      </ul>
    </header>
  );
}

export default Header;
