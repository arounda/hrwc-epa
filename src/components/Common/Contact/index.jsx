'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './contact.module.scss';

const Contact = () => {
  return (
    <section className={`section no-paddings ${s.contact}`}>
      <div className="container">
        <div className={s.contactWrapper}>
          <div className={s.contactMain}>
            <h2
              className={`heading-h2 is-centered is-white`}
              id={s.contactHeading}
            >
              Streamline Your I-9 & E-Verify Process Today
            </h2>

            <p className={`text is-centered is-white ${s.contactSubtitle}`}>
              Let’s get you set up with the easiest compliance platform.
            </p>

            <ButtonPrimary
              text='Get Started Now | Request a Demo'
              link='/contact-us'
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;
