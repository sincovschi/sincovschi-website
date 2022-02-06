import { createRef, useEffect } from 'react';

export function GoogleModal() {
  const divRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = 'https://cse.google.com/cse.js?cx=f97add8e8ffb1705d';
    const divTag = document.createElement('div');
    divTag.className = 'gcse-search';

    divRef.current?.insertAdjacentElement('afterbegin', scriptTag);
    divRef.current?.insertAdjacentElement('afterbegin', divTag);
  }, []);

  return (
    <div
      id="google-search"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'hsla(0deg, 0%, 50%, 0.8)',
        overflowY: 'auto',
      }}
      ref={divRef}
    ></div>
  );
}
