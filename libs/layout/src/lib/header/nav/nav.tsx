import { NavLink } from './nav-link';

export function Nav() {
  return (
    <nav>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/workshop">Workshop</NavLink>
      <NavLink href="/research">Research</NavLink>
      <style jsx>{`
        nav {
          font-family: 'Noto Sans', sans-serif;
          grid-area: nav;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: row wrap;
        }
      `}</style>
    </nav>
  );
}
