import { useRouter } from 'next/router';

export function Logo() {
  const router = useRouter();

  const goHome = () => router.push('/');

  return (
    <div>
      <button onClick={goHome}>
        <img src="/images/logo.svg" alt="Logo" />
      </button>
      <style jsx>{`
        div {
          grid-area: logo;
          display: grid;
          place-items: center;
        }
        button {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
