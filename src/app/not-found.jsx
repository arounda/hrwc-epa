'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './notFound.module.scss';
import logo from '@/assets/header-logo-black.svg'
import Image from 'next/image';

const NotFound = () => {
  return (
    <main>
      <Image
        className={s.notFoundLogo}
        src={logo}
        alt=''
      />
      <section
        className='section is-padding-block'
        style={{
          height: '100%'
        }}
      >
        <div
          className="container"
          style={{
            height: '100%'
          }}
        >
          <div className={s.notFoundWrapper}>
            <span className={s.notFoundTitle}>
              404
            </span>

            <span className={s.notFoundSubTitle}>
              Page not Found
            </span>

            <ButtonPrimary
              isButtonBlue={true}
              isHeader={false}
              text='MainPage'
              link='/'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound;
