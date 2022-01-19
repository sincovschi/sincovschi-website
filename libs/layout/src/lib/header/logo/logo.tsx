export function Logo() {
  return (
    <div id="logo">
      <style jsx>{`
        #logo {
          padding: 0.1rem;
          width: 3.5rem;
          height: 1.8rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
      <img src="/images/apple-pi-1.jpg" alt="Logo" />
    </div>
  );
}
