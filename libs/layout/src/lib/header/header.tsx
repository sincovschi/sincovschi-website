import { Hamburger } from './hamburger/hamburger';
import { Logo } from './logo/logo';
import { Nav } from './nav/nav';
import { Search } from './search/search';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <Hamburger />
      <Logo />
      <Nav />
      <Search />
      <style jsx>{`
        header {
          display: grid;
          grid-template: 1fr auto / 1fr 1fr 1fr;
          grid-template-areas: 'hamburger logo search' 'nav nav nav';
          column-gap: 1rem;
          align-content: stretch;
          justify-content: center;
          justify-items: stretch;
          align-items: stretch;
        }

        @media screen and (min-width: 768px) {
          header {
            grid-template: 1fr / 1fr max-content 1fr;
            grid-template-areas: 'logo nav search';
          }
        }
      `}</style>
    </header>
  );
}
