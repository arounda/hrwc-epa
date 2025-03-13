'use client';

import logoBlack from '@/assets/header-logo-black.svg';
import { clientLoginUrl, newHireLoginUrl } from '@/constants/mainURLs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';
import Burger from './Burger';
import s from './header.module.scss';
import HeaderNavigation from './HeaderNavigation';


const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isHeaderWhite, setIsHeaderWhite ] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsHeaderWhite(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ isHeaderWhite ]);

  function handleScroll() {
    if (window.scrollY < 50) {
      setIsHeaderWhite(false);
    } else {
      setIsHeaderWhite(true);
    }
  }

  function handleMenuOpen(isOpen) {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    setIsMenuOpen(isOpen)
  }

  return (
    <header
      className={s.header}
      style={{
        boxShadow: `
          ${isHeaderWhite
            ? '2px 2px 20px 0px rgba(68, 102, 140, 0.07)'
            : '2px 2px 20px 0px rgba(68, 102, 140, 0)'
          }`
      }}
    >
      <div className="container">
        <div className={s.headerWrapper}>
          <Link href='/'>
            <Image
              className='logoBlack'
              src={logoBlack}
              alt=''
              priority
            />
          </Link>

          <div className={s.headerMain}>
            <HeaderNavigation
              isMenuOpen={isMenuOpen}
              onMenuOpen={handleMenuOpen}
            />

            <div className={s.headerCTAs}>
              <ButtonSecondary
                text='Client Login'
                link={clientLoginUrl}
                isHeader={true}
                istargetBlank={true}
              />

              <ButtonPrimary
                text='Sign In'
                link={newHireLoginUrl}
                isHeader={true}
                istargetBlank={true}
              />
            </div>

            <div className={s.headerBurgerWrapper}>
              <Burger
                isMenuOpen={isMenuOpen}
                onMenuOpen={handleMenuOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
