export function Hamburger() {
  return (
    <>
      <input type="checkbox" id="hamburger" />
      <label htmlFor="hamburger">
        <button type="button">
          <svg id="hamburger-open" fill="currentColor" viewBox="0 0 30 30">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
          <svg id="hamburger-closed" fill="currentColor" viewBox="0 0 400 400">
            <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z" />
          </svg>
        </button>
      </label>

      <style jsx>{`
        input {
          display: none;
        }

        label {
          grid-area: hamburger;
          display: block;
          color: black;
          user-select: none;
          z-index: 1;
        }

        button {
          display: flex;
          pointer-events: none;
          width: 50px;
          height: 50px;
          padding: 5px;
          margin: auto;
          box-sizing: border-box;
          border-radius: 50%;
          overflow: hidden;
        }

        input:checked ~ label #hamburger-open {
          display: none;
        }

        #hamburger-closed {
          display: none;
        }

        input:checked ~ label #hamburger-closed {
          display: block;
        }

        @media screen and (min-width: 768px) {
          label {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
