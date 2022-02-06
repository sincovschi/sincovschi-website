import { useState } from 'react';
import { GoogleModal } from './google-modal';

export function Search() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <button onClick={() => setShowSearch(!showSearch)}>
        <img src="/icons/search.svg" alt="Search" />
      </button>
      {showSearch && <GoogleModal />}
      <style jsx>{`
        div {
          grid-area: search;
          display: grid;
          place-items: center;
        }
        button {
          padding: 0;
          width: 50px;
          height: 50px;
          display: flex;
          box-sizing: border-box;
          border-radius: 50%;
          overflow: hidden;
        }
        img {
          margin: 5px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}
