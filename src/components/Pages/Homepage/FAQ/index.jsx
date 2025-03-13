'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';
import React from 'react';
import s from './faq.module.scss';
import { faqs } from '@/constants/faqs';

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M3 6.5L6.70454 10.1745C7.14204 10.6085 7.85795 10.6085 8.29545 10.1745L12 6.5" stroke="#0B0B13" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FAQ = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <div className={s.faqWrapper}>
          <div className={s.faqTop}>
            <h2 className="heading-h2 mb-8">
              Frequently Asked Questions
            </h2>

            <p className='text'>
              Address common questions related to accessing and using USPayserv.
            </p>
          </div>

          <div className={s.faqList}>
            {faqs.map((item, i) => (
              <React.Fragment key={item.id}>
                <Accordion
                  sx={{
                    boxShadow: 'none',
                    border: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Arrow />}
                    sx={{
                      paddingInline: '0px',
                      margin: '0px',
                    }}
                  >
                    <div className={s.faqQuestionContainer}>
                      {item.question}
                    </div>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      padding: '0',
                      paddingTop: '2.4rem',
                    }}
                  >
                    <p className="text">
                      {item.answer}
                    </p>
                  </AccordionDetails>
                </Accordion>

                <div className={s.faqItemsDivider}></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}

export default FAQ