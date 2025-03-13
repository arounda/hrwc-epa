'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './cta.module.scss';

const CTA = () => {
  return (
    <section className={s.ctaSection}>
      <div className="container">
        <div className={s.ctaWrapper}>
          <h2 className='heading-h2 is-white is-centered'>
            ei9verify for Enterprise
          </h2>

          <ButtonPrimary
            text='Contact Us for Pricing'
            link='/contact-us'
          />
        </div>
      </div>
    </section>
  )
}

export default CTA