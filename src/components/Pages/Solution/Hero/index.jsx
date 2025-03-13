import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={`section is-hero ${s.hero}`}>
      <div className="container">
        <h2 className='heading-h2 mb-8'>
          Trusted I-9 / E-Verify Services
        </h2>

        <p className='text mb-32'>
          E-Verify® is a registered trademark of U.S. Department of Homeland Security.
        </p>

        <div className={s.heroCards}>
          <div className={s.heroCard}>
            <div className={s.heroCardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className='heading-h5 mb-8'>
              Seamless I-9/E-Verify® Integration
            </h3>

            <p className='text'>
              Combine I-9 with automated E-Verify processing for a streamlined and fully compliant verification process.
            </p>
          </div>

          <div className={s.heroCard}>
            <div className={s.heroCardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className='heading-h5 mb-8'>
              Comprehensive Remote Verification
            </h3>

            <p className='text'>
              Enable authorized representatives to securely complete Section 2 and 3 verifications for remote hires, ensuring compliance anywhere.
            </p>
          </div>

          <div className={s.heroCard}>
            <div className={s.heroCardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V13M13 17H7M15 13H7M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className='heading-h5 mb-8'>
              Compliance Tracking
            </h3>

            <p className='text'>
              Stay on top of employment eligibility with real-time updates, custom notifications, and audit-ready records.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
