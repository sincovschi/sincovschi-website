import { useRouter } from 'next/router';
import { MouseEvent, PropsWithChildren } from 'react';

export interface ActionLinkProps {
  href: string;
}

export function NavLink({
  children,
  href,
}: PropsWithChildren<ActionLinkProps>) {
  const router = useRouter();

  const isActive = router.asPath === href;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      <style jsx>{`
        a {
          padding: 0.2em 0.5em;
          ${isActive ? 'color: var(--main-accent__active)' : ''}
        }
      `}</style>
      {children}
    </a>
  );
}
