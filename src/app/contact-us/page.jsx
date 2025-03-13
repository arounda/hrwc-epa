'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import Form from '@/components/Pages/ContactUs/Form';
import { defalutPartnerFormState, defalutSalesFormState, defalutSupportFormState } from '@/constants/formsConstantsUtils';
import useFormErrorsHook from '@/hooks/formErrorsHook';
import { useState } from 'react';
import s from './contact-us.module.scss';

const ContactUs = () => {
  const [ currentForm, setCurrentForm ] = useState('');
  const [ formsState, setFormsState ] = useState({
    sales: defalutSalesFormState,
    support: defalutSupportFormState,
    partner: defalutPartnerFormState,
  });
  const formErrors = useFormErrorsHook();

  return (
    <>
      <section id={s.contactUs} className='section is-padding-block' >
        <div className='container'>
          <h1 className='heading-h2'>Get in Touch</h1>

          <div className={s.contactUsCards}>
            <div className={s.contactUsCard}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2763_118965)">
                  <rect width="24" height="24" fill="white" />
                  <path d="M10 15L6.92474 18.1137C6.49579 18.548 6.28131 18.7652 6.09695 18.7805C5.93701 18.7938 5.78042 18.7295 5.67596 18.6076C5.55556 18.4672 5.55556 18.162 5.55556 17.5515V15.9916C5.55556 15.444 5.10707 15.0477 4.5652 14.9683V14.9683C3.25374 14.7762 2.22378 13.7463 2.03168 12.4348C2 12.2186 2 11.9605 2 11.4444V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H14.2C15.8802 2 16.7202 2 17.362 2.32698C17.9265 2.6146 18.3854 3.07354 18.673 3.63803C19 4.27976 19 5.11984 19 6.8V11M19 22L16.8236 20.4869C16.5177 20.2742 16.3647 20.1678 16.1982 20.0924C16.0504 20.0255 15.8951 19.9768 15.7356 19.9474C15.5558 19.9143 15.3695 19.9143 14.9969 19.9143H13.2C12.0799 19.9143 11.5198 19.9143 11.092 19.6963C10.7157 19.5046 10.4097 19.1986 10.218 18.8223C10 18.3944 10 17.8344 10 16.7143V14.2C10 13.0799 10 12.5198 10.218 12.092C10.4097 11.7157 10.7157 11.4097 11.092 11.218C11.5198 11 12.0799 11 13.2 11H18.8C19.9201 11 20.4802 11 20.908 11.218C21.2843 11.4097 21.5903 11.7157 21.782 12.092C22 12.5198 22 13.0799 22 14.2V16.9143C22 17.8462 22 18.3121 21.8478 18.6797C21.6448 19.1697 21.2554 19.5591 20.7654 19.762C20.3978 19.9143 19.9319 19.9143 19 19.9143V22Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2763_118965">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className={s.contactUsCardHeading}>Talk to Sales</p>

              <p className='text'>
                Discover the right solutions for your business.
              </p>

              <button onClick={() => setCurrentForm('sales')} >
                <ButtonPrimary
                  text='Contact Us'
                  isButtonBlue={true}
                  isLink={false}
                />
              </button>
            </div>

            <div className={s.contactUsCard}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2763_118975)">
                  <rect width="24" height="24" fill="white" />
                  <path d="M21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V18M5.5 21C4.11929 21 3 19.8807 3 18.5V16.5C3 15.1193 4.11929 14 5.5 14C6.88071 14 8 15.1193 8 16.5V18.5C8 19.8807 6.88071 21 5.5 21ZM18.5 21C17.1193 21 16 19.8807 16 18.5V16.5C16 15.1193 17.1193 14 18.5 14C19.8807 14 21 15.1193 21 16.5V18.5C21 19.8807 19.8807 21 18.5 21Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2763_118975">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className={s.contactUsCardHeading}>Customer Support</p>

              <p className='text'>
                Get assistance with our services and solutions.
              </p>

              <button onClick={() => setCurrentForm('support')}>
                <ButtonPrimary
                  text='Contact Us'
                  isButtonBlue={true}
                  isLink={false}
                />
              </button>
            </div>

            <div className={s.contactUsCard}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2763_118985)">
                  <rect width="24" height="24" fill="white" />
                  <path d="M12 15.0002L9 12.0002M12 15.0002C13.3968 14.469 14.7369 13.799 16 13.0002M12 15.0002V20.0002C12 20.0002 15.03 19.4502 16 18.0002C17.08 16.3802 16 13.0002 16 13.0002M9 12.0002C9.53214 10.6197 10.2022 9.29631 11 8.05025C12.1652 6.18723 13.7876 4.6533 15.713 3.59434C17.6384 2.53538 19.8027 1.98662 22 2.00025C22 4.72025 21.22 9.50025 16 13.0002M9 12.0002H4C4 12.0002 4.55 8.97025 6 8.00025C7.62 6.92025 11 8.00025 11 8.00025M4.5 16.5002C3 17.7602 2.5 21.5002 2.5 21.5002C2.5 21.5002 6.24 21.0002 7.5 19.5002C8.21 18.6602 8.2 17.3702 7.41 16.5902C7.02131 16.2193 6.50929 16.0049 5.97223 15.9883C5.43516 15.9717 4.91088 16.154 4.5 16.5002Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2763_118985">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className={s.contactUsCardHeading}>Partner with Us</p>

              <p className='text'>
                Explore opportunities to collaborate with us.
              </p>

              <button onClick={() => setCurrentForm('partner')} >
                <ButtonPrimary
                  text='Contact Us'
                  isButtonBlue={true}
                  isLink={false}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {currentForm &&
        <Form
          setCurrentForm={setCurrentForm}
          currentForm={currentForm}
          formsState={formsState}
          setFormsState={setFormsState}
          formErrors={formErrors}
        />
      }
    </>
  )
};

export default ContactUs;
