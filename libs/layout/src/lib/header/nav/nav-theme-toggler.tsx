import { useEffect, useState } from 'react';

export function ThemeToggler() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    setIsLight(
      window?.matchMedia?.('(prefers-color-scheme: dark)').matches !== true
    );
  }, []);

  const toggleTheme = () => {
    const classList = document.body.classList;
    const isLightTheme =
      classList.contains('theme-light') ||
      (!classList.contains('theme-dark') && isLight);

    if (isLightTheme) {
      classList.remove('theme-light');
      classList.add('theme-dark');
    } else {
      classList.add('theme-light');
      classList.remove('theme-dark');
    }
  };

  return (
    <>
      <button onClick={toggleTheme} />
      <style jsx>{`
        button {
          cursor: pointer;
          padding: 0.2em 0.5em;
          background: none;
          border: none;
        }

        button::before,
        :global(.theme-light) button::before {
          content: '🌒';
        }

        @media (prefers-color-scheme: dark) {
          button::before {
            content: '☀️';
          }
        }

        :global(.theme-dark) button::before {
          content: '☀️';
        }
      `}</style>
    </>
  );
}
