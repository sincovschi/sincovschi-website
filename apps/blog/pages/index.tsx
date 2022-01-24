import Head from 'next/head';

export default function Index() {
  const toggleTheme = () => {
    const isLight = document.body.classList.contains('theme-light');

    if (isLight) {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    }
  };

  return (
    <>
      <Head>
        <title>Wellcome to sincovchi website.</title>
      </Head>
      <h1>Welcome to Sincovschi&apos;s blog 👋</h1>
      <h4>Color theme:</h4>
      <button onClick={toggleTheme}>Theme toggler</button>
      <ul>
        <li style={{ background: 'var(--bg-accent)' }}></li>
        <li style={{ background: 'var(--main-accent)' }}></li>
        <li style={{ background: 'var(--main-accent__active)' }}></li>
        <li style={{ background: 'var(--yellow-accent)' }}></li>
        <li style={{ background: 'var(--red-accent)' }}></li>
        <li style={{ background: 'var(--blue-accent)' }}></li>
      </ul>
      <style jsx>{`
        ul {
          display: flex;
        }
        ul > li {
          display: block;
          width: 150px;
          height: 150px;
          margin: 10px;
        }
      `}</style>
    </>
  );
}
