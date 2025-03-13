'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './cards.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { pricingFeatures, prices } from '@/constants/pricingPageData';

const Checkmark = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#2D34FF" />
      <path d="M6.56731 12.0859C6.27115 11.7963 5.79631 11.8016 5.50672 12.0978C5.21713 12.394 5.22246 12.8688 5.51862 13.1584L6.56731 12.0859ZM9.86104 16.3555L9.33669 16.8917C9.62816 17.1767 10.0939 17.1767 10.3854 16.8917L9.86104 16.3555ZM18.5673 8.89173C18.8635 8.60215 18.8688 8.1273 18.5792 7.83113C18.2896 7.53497 17.8148 7.52963 17.5186 7.81921L18.5673 8.89173ZM5.51862 13.1584L9.33669 16.8917L10.3854 15.8192L6.56731 12.0859L5.51862 13.1584ZM10.3854 16.8917L18.5673 8.89173L17.5186 7.81921L9.33671 15.8192L10.3854 16.8917Z" fill="#2D34FF" />
    </svg>
  )
}

const Cross = () => {
  return (
    <svg className='cross' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#0B0B13" />
      <path d="M7.47567 15.8192C7.1795 16.1088 7.17416 16.5836 7.46374 16.8798C7.75332 17.176 8.22817 17.1813 8.52433 16.8917L7.47567 15.8192ZM16.7063 8.89173C17.0024 8.60215 17.0078 8.1273 16.7182 7.83113C16.4286 7.53497 15.9538 7.52963 15.6576 7.81921L16.7063 8.89173ZM8.52433 16.8917L16.7063 8.89173L15.6576 7.81921L7.47567 15.8192L8.52433 16.8917Z" fill="#0B0B13" />
      <path d="M8.6261 7.74031C8.33652 7.44415 7.86168 7.43881 7.56551 7.72839C7.26934 8.01797 7.264 8.49282 7.55359 8.78898L8.6261 7.74031ZM15.5536 16.9709C15.8432 17.2671 16.318 17.2724 16.6142 16.9828C16.9103 16.6933 16.9157 16.2184 16.6261 15.9222L15.5536 16.9709ZM7.55359 8.78898L15.5536 16.9709L16.6261 15.9222L8.6261 7.74031L7.55359 8.78898Z" fill="#0B0B13" />
    </svg>
  )
}

const Cards = ({ employeesAmount }) => {
  const [ isPerYear, setIsPerYear ] = useState(false);

  const getPrice = (plan) => {
    const pricePerMonth = prices[plan][employeesAmount];

    const perYear = Number(pricePerMonth) * 12;
    const percent = perYear * 0.1;
    const perYearTotal = perYear - percent;

    return isPerYear ? perYearTotal : pricePerMonth;
  };

  const starterPrice = getPrice('starter');
  const growingPrice = getPrice('growing');

  return (
    <section className={s.pricingCardsSection}>
      <div className="container">
        <div className={s.pricingCardsWrapper}>
          <div className={s.pricingToggle}>
            <div className={s.pricingToggleWrapper}>
              <button
                className={clsx(
                  `${s.pricingToggleBtn}`,
                  isPerYear ? '' : `${s.isActivePrice}`
                )}
                onClick={() => setIsPerYear(false)}
              >
                Pay Monthly
              </button>

              <button
                className={clsx(
                  `${s.pricingToggleBtn}`,
                  isPerYear ? `${s.isActivePrice}` : ''
                )}
                onClick={() => setIsPerYear(true)}
              >
                Pay Yearly
                <span>Save 10%</span>
              </button>
            </div>
          </div>

          <div className={s.pricingCards}>
            <div className={s.pricingCard}>
              <h3 className='heading-h4 is-centered'>
                ei9verify Business Starter
              </h3>

              {isPerYear ? (
                <p className={s.pricingPrice}>
                  {`$${starterPrice}`}
                  <span className={s.pricingPricePer}> per year</span>
                </p>
              ) : (
                <p className={s.pricingPrice}>
                  {`$${starterPrice}`}
                  <span className={s.pricingPricePer}> per month</span>
                </p>
              )}

              <ul className={s.cardList}>
                {pricingFeatures.map(item => (
                  <li
                    key={item.title}
                    className={s.cardListItem}
                    style={{
                      opacity: item.isEnterprise || item.isGrowing ? .5 : 1
                    }}
                  >
                    {!item.isEnterprise && !item.isGrowing
                      ? <Checkmark />
                      : <Cross />
                    }
                    {item.title}
                  </li>
                ))}
              </ul>

              <div className={s.pricingCardBtnWrapper}>
                <ButtonPrimary
                  text='Get Started'
                  link='/contact-us'
                  isButtonBlue
                />
              </div>
            </div>

            <div className={s.pricingCard}>
              <span className={s.pricingCardRecommended}>Recomended</span>
              <h3 className='heading-h4 is-centered'>
                ei9verify Growing Businesses
              </h3>

              {isPerYear ? (
                <p className={s.pricingPrice}>
                  {`$${growingPrice}`}
                  <span className={s.pricingPricePer}> per year</span>
                </p>
              ) : (
                <p className={s.pricingPrice}>
                  {`$${growingPrice}`}
                  <span className={s.pricingPricePer}> per month</span>
                </p>
              )}

              <ul className={s.cardList}>
                {pricingFeatures.map(item => (
                  <li
                    key={item.title}
                    className={s.cardListItem}
                    style={{
                      opacity: item.isEnterprise ? .5 : 1
                    }}
                  >
                    {!item.isEnterprise
                      ? <Checkmark />
                      : <Cross />
                    }
                    {item.title}
                  </li>
                ))}
              </ul>

              <div className={s.pricingCardBtnWrapper}>
                <ButtonPrimary
                  text='Get Started'
                  link='/contact-us'
                />
              </div>
            </div>

            <div className={s.pricingCard}>
              <h3 className='heading-h4 is-centered'>
                ei9verify for Enterprise
              </h3>

              <h4 className={`${s.contactUs} heading-h3 is-centered`}>
                Contact Us for Pricing
              </h4>

              <ul className={s.cardList}>
                {pricingFeatures.map(item => (
                  <li
                    key={item.title}
                    className={s.cardListItem}
                  >
                    <Checkmark />
                    {item.title}
                  </li>
                ))}
              </ul>

              <div className={s.pricingCardBtnWrapper}>
                <ButtonPrimary
                  text='Get Started'
                  link='/contact-us'
                  isButtonBlue
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards