import { Logo } from './logo/logo';
import { Nav } from './nav/nav';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <style jsx>{`
        header {
        }
        span {
          text-align: center;
          width: 3.5rem;
        }
      `}</style>
      <Logo />
      <Nav />
      <span>
        <button>Search</button>
      </span>
    </header>
  );
}
