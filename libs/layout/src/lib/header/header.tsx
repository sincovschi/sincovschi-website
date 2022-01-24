import { Logo } from './logo/logo';
import { Nav } from './nav/nav';
import { Search } from './search/search';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <Logo />
      <Nav />
      <Search />
      <style jsx>{`
        header {
          display: grid;
          grid-template: 1fr 1fr / 1fr 1fr;
          grid-template-areas:
            'logo search'
            'nav nav';
          gap: 0.5rem;
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
