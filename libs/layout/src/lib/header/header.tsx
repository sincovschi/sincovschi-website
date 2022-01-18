import { Logo } from './logo/logo';
import { Nav } from './nav/nav';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <style jsx>{`
        header {
          background: lightblue;
        }
      `}</style>
      <Logo />
      <Nav />
    </header>
  );
}
