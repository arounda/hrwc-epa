'use client';

import React, { useRef, useState } from 'react';
import s from './tour.module.scss';
import { tourTabs } from '@/constants/tourTabs';
import Image from 'next/image';
import clsx from 'clsx';
import NavButtons from '@/components/Common/SliderNavButtons';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Tour = () => {
  const [ activeTab, setActiveTab ] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className='section no-paddings'>
      <div className="container">
        <div className={s.tabs}>
          <div className={s.tabsTop}>
            <h2 className='heading-h2'>
              Your Compliance Solution, Simplified
            </h2>

            <p className={`text ${s.tabsSubHeading}`}>
              Our platform combines advanced technology with an intuitive interface to streamline every step of the I-9 and E-Verify process.
            </p>

            <div className={s.tabsBtns}>
              {tourTabs.map((item, i) => (
                <div
                  className={clsx(
                    `${s.tabsBtn}`,
                    activeTab === i ? `${s.active}` : ''
                  )}
                  key={item.id}
                  onClick={() => {
                    setActiveTab(i);
                  }}
                >
                  <div className={s.tabsBtnInfo}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.tabsContent}>
            {tourTabs.map((item, i) => (
              <Image
                priority
                className={s.tabsImage}
                key={item.id}
                src={item.image}
                alt=''
              />
            )).filter((_, i) => i === activeTab)}
          </div>

          <div className={s.sliderMob}>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {tourTabs.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <div className={s.tabsBtn}>
                    <div className={s.tabsBtnInfo}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>

                      <Image
                        src={item.image}
                        alt=''
                        className={s.tabsImg}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={s.testimonialsNavMobileWrapper}>
              <NavButtons swiperRef={swiperRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Tour;
