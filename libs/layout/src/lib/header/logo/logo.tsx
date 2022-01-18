export function Logo() {
  return (
    <div id="logo">
      <style jsx>{`
        #logo img {
          width: 150px;
          height: 50px;
          object-fit: cover;
        }
      `}</style>
      <img src="/images/apple-pi-1.jpg" alt="Logo" />
    </div>
  );
}
