'use client';

import s from './navbuttons.module.scss';

const NavButtons = ({ swiperRef }) => {
  return (
    <div className={`${s.testimonialsNav}`}>
      <button
        className={s.testimonialsNavBtn}
        onClick={() => swiperRef.current.slidePrev()}
      >
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2 6.69844L1 6.69844M1 6.69844L5.95 11.6484M1 6.69844L5.95 1.74844"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={() => swiperRef.current.slideNext()}
        className={s.testimonialsNavBtn}
      >
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3 6.45977L14.5 6.45977M14.5 6.45977L9.55 1.50977M14.5 6.45977L9.55 11.4098"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavButtons;
