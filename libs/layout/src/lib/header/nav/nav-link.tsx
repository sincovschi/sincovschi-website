import { useRouter } from 'next/router';
import { MouseEvent, MouseEventHandler, PropsWithChildren } from 'react';

export interface ActionLinkProps {
  href: string;
}

export function NavLink({
  children,
  href,
}: PropsWithChildren<ActionLinkProps>) {
  const router = useRouter();

  const isActive = router.asPath === href;

  const onClick: MouseEventHandler<HTMLAnchorElement> = (
    e: MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={onClick}>
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
