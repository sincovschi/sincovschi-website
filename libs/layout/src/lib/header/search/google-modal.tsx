import { createRef, useEffect } from 'react';

export function GoogleModal({ onClose }: { onClose: () => void }) {
  const divRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const divTag = document.createElement('div');
    divTag.className = 'gcse-search';
    divRef.current?.insertAdjacentElement('beforeend', divTag);

    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = 'https://cse.google.com/cse.js?cx=f97add8e8ffb1705d';
    divRef.current?.insertAdjacentElement('beforeend', scriptTag);
  }, [divRef]);

  return (
    <div ref={divRef}>
      <span onClick={onClose}>✖</span>
      <style jsx>
        {`
          div {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: hsla(0deg, 0%, 50%, 0.8);
            overflow-y: auto;
            padding: 1rem calc(50% - var(--body-width) / 2);
            display: flex;
            flex-flow: column;
            z-index: 1;
          }
          span {
            align-self: flex-end;
            margin-bottom: 0.5rem;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
