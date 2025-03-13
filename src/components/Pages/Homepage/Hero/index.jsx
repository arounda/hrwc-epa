'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './hero.module.scss';
import heroImg from '@/assets/Homepage/hero-img.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroMain}>
          <h1 className='heading-h1 is-centered'>
            Streamlined I-9 & E-Verify Compliance
          </h1>

          <p className={s.heroText}>
            Stay ahead of the curve with our intuitive platform that makes I-9 and E-Verify easy, efficient, and stress-free. Compliance has never been this simple.
          </p>

          <ButtonPrimary
            text='Get Started'
            link='/contact-us'
            isButtonBlue={true}
          />
        </div>

        <Image
          className={s.heroImg}
          src={heroImg}
          alt=''
          priority
        />
      </div>
    </section>
  )
};

export default Hero;
