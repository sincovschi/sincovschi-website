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

  if (isActive) {
    return <span>{children}</span>;
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      <style jsx>{`
        a {
          padding: 0.1rem 0.5rem;
        }
      `}</style>
      {children}
    </a>
  );
}
