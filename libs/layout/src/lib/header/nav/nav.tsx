import { NavLink } from './nav-link';

export function Nav() {
  return (
    <nav>
      <style jsx>{`
        nav {
          flex: 1;
          text-align: center;
        }
      `}</style>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/workshop">Workshop</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
}
