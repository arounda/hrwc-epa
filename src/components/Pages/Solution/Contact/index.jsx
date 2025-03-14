'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './contact.module.scss';

const Contact = () => {
  return (
    <section className='section no-paddings'>
      <div className="container">
        <div className={s.contactWrapper}>
          <h2 className='heading-h2 is-centered mb-8'>
            Start Saving Today
          </h2>

          <p className='text is-centered mb-24'>
            Schedule a demo or contact us to learn how we can help your business thrive.
          </p>

          <ButtonPrimary
            text='Schedule a Free Consultation'
            link='/contact-us'
            isButtonBlue
          />
        </div>
      </div>
    </section>
  )
};

export default Contact;
