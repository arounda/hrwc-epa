'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './connect.module.scss';

const Connect = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <div className={s.connectWrapper}>
          <h2 className={`heading-h2 is-centered`}>
            Connect with Our APIs
          </h2>

          <p className={`text is-centered ${s.connectSubtitle}`}>
            Designed for growth, our APIs easily scale with your needs.
          </p>

          <ButtonPrimary
            text='Learn More'
            link='/integrations'
            isButtonBlue
          />
        </div>
      </div>
    </section>
  )
};

export default Connect;
