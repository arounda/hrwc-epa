import s from './compliance.module.scss';
import mapMob from '@/assets/Homepage/Compliance/comp-map-mob.png';
import mapDesk from '@/assets/Homepage/Compliance/comp-map-desk.png';
import ct1 from '@/assets/Homepage/Compliance/ct-1.png';
import ct2 from '@/assets/Homepage/Compliance/ct-2.png';
import ct3 from '@/assets/Homepage/Compliance/ct-3.png';
import ct4 from '@/assets/Homepage/Compliance/ct-4.png';
import Image from 'next/image';

const Compliance = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <div className={s.complianceWrapper}>
          <div className={s.complianceTop}>
            <h2 className="heading-h2 is-centered mb-8">
              Compliance, but make it easy.
            </h2>

            <p className="text is-centered">
              A fresh approach to I-9 & E-Verify that actually works for you.
            </p>
          </div>

          <div className={s.complianceImageWrapper}>
            {/* <Image
              className={s.complianceImageMob}
              src={mapMob}
              alt=''
            /> */}

            <Image
              className={s.complianceImageDesk}
              src={mapDesk}
              alt=''
            />
          </div>

          {/* <div className={s.complianceTags}>
            <div className={s.complianceTag}>
              <Image
                src={ct1}
                alt=''
              />
            </div>
            <div className={s.complianceTag}>
              <Image
                src={ct2}
                alt=''
              />
            </div>
            <div className={s.complianceTag}>
              <Image
                src={ct3}
                alt=''
              />
            </div>
            <div className={s.complianceTag}>
              <Image
                src={ct4}
                alt=''
              />
            </div>
          </div> */}

          <div className={s.complianceCards}>
            <div className={s.complianceCard}>
              <h3 className='heading-h5 is-centered'>
                Multi-State Compliance Support
              </h3>
              <p className="text is-dentered">
                Stay compliant with varying I-9 and E-Verify regulations across all 50 states.
              </p>
            </div>

            <div className={s.complianceCard}>
              <h3 className='heading-h5 is-centered'>
                Scalable Solutions for All Businesses
              </h3>
              <p className="text is-dentered">
                Whether you’re a small business or an enterprise, our platform grows with you, ensuring seamless compliance as you expand.
              </p>
            </div>

            <div className={s.complianceCard}>
              <h3 className='heading-h5 is-centered'>
                Real-Time Reporting
              </h3>
              <p className="text is-dentered">
                Access up-to-date compliance insights for your workforce, helping you identify gaps and address them proactively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance