import Image from 'next/image';
import { useRouter } from 'next/router';

export function Logo() {
  const router = useRouter();

  const goHome = () => router.push('/');

  return (
    <div>
      <button onClick={goHome}>
        <Image
          src={'/images/me.jpg'}
          alt="logo"
          width={50}
          height={50}
          objectFit={'cover'}
        />
      </button>
      <style jsx>{`
        div {
          grid-area: logo;
          display: grid;
          place-items: center;
        }
        button {
          padding: 0;
          width: 50px;
          height: 50px;
          box-sizing: border-box;
          border-radius: 50%;
          overflow: hidden;
        }
        img {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
