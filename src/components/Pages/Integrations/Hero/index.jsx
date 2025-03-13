import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.integrationsHero}>
      <div className="container">
        <div className={s.heroWrapper}>
          <h2 className='heading-h2 mb-8'>
            Seamless integrations start here
          </h2>

          <p className='text mb-32'>
            Our APIs empower your organization to customize workflows, streamline data and reporting, and optimize processes— designed to fit your unique needs.
          </p>

          <div className={s.heroCards}>
            <div className={s.heroCard}>
              <div className={s.heroCardTop}>
                <h3 className='heading-h5 mb-8'>
                  Customizable API Solutions
                </h3>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="#0B0B13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p className='text'>
                Adapt our APIs to fit your unique business workflows and integrate with existing systems.
              </p>
            </div>

            <div className={s.heroCard}>
              <div className={s.heroCardTop}>
                <h3 className='heading-h5 mb-8'>
                  Streamlined Data Flow
                </h3>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2 22C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V10.8C22 10.52 22 10.38 21.9455 10.273C21.8976 10.1789 21.8211 10.1024 21.727 10.0545C21.62 10 21.48 10 21.2 10L18.8 10C18.52 10 18.38 10 18.273 10.0545C18.1789 10.1024 18.1024 10.1789 18.0545 10.273C18 10.38 18 10.52 18 10.8V13.2C18 13.48 18 13.62 17.9455 13.727C17.8976 13.8211 17.8211 13.8976 17.727 13.9455C17.62 14 17.48 14 17.2 14H14.8C14.52 14 14.38 14 14.273 14.0545C14.1789 14.1024 14.1024 14.1789 14.0545 14.273C14 14.38 14 14.52 14 14.8V17.2C14 17.48 14 17.62 13.9455 17.727C13.8976 17.8211 13.8211 17.8976 13.727 17.9455C13.62 18 13.48 18 13.2 18H10.8C10.52 18 10.38 18 10.273 18.0545C10.1789 18.1024 10.1024 18.1789 10.0545 18.273C10 18.38 10 18.52 10 18.8V21.2C10 21.48 10 21.62 10.0545 21.727C10.1024 21.8211 10.1789 21.8976 10.273 21.9455C10.38 22 10.52 22 10.8 22L21.2 22Z" stroke="#0B0B13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.8C10 6.51997 10 6.37996 10.0545 6.273C10.1024 6.17892 10.1789 6.10243 10.273 6.0545C10.38 6 10.52 6 10.8 6H13.2C13.48 6 13.62 6 13.727 6.0545C13.8211 6.10243 13.8976 6.17892 13.9455 6.273C14 6.37996 14 6.51997 14 6.8V9.2C14 9.48003 14 9.62004 13.9455 9.727C13.8976 9.82108 13.8211 9.89757 13.727 9.9455C13.62 10 13.48 10 13.2 10H10.8C10.52 10 10.38 10 10.273 9.9455C10.1789 9.89757 10.1024 9.82108 10.0545 9.727C10 9.62004 10 9.48003 10 9.2V6.8Z" stroke="#0B0B13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12.8C3 12.52 3 12.38 3.0545 12.273C3.10243 12.1789 3.17892 12.1024 3.273 12.0545C3.37996 12 3.51997 12 3.8 12H6.2C6.48003 12 6.62004 12 6.727 12.0545C6.82108 12.1024 6.89757 12.1789 6.9455 12.273C7 12.38 7 12.52 7 12.8V15.2C7 15.48 7 15.62 6.9455 15.727C6.89757 15.8211 6.82108 15.8976 6.727 15.9455C6.62004 16 6.48003 16 6.2 16H3.8C3.51997 16 3.37996 16 3.273 15.9455C3.17892 15.8976 3.10243 15.8211 3.0545 15.727C3 15.62 3 15.48 3 15.2V12.8Z" stroke="#0B0B13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 2.8C2 2.51997 2 2.37996 2.0545 2.273C2.10243 2.17892 2.17892 2.10243 2.273 2.0545C2.37996 2 2.51997 2 2.8 2H5.2C5.48003 2 5.62004 2 5.727 2.0545C5.82108 2.10243 5.89757 2.17892 5.9455 2.273C6 2.37996 6 2.51997 6 2.8V5.2C6 5.48003 6 5.62004 5.9455 5.727C5.89757 5.82108 5.82108 5.89757 5.727 5.9455C5.62004 6 5.48003 6 5.2 6H2.8C2.51997 6 2.37996 6 2.273 5.9455C2.17892 5.89757 2.10243 5.82108 2.0545 5.727C2 5.62004 2 5.48003 2 5.2V2.8Z" stroke="#0B0B13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p className='text'>
                Ensure accurate and automated data syncing across your HR, payroll, and onboarding platforms.
              </p>
            </div>

            <div className={s.heroCard}>
              <div className={s.heroCardTop}>
                <h3 className='heading-h5 mb-8'>
                  Effortless Scalability
                </h3>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 22H6.8M6.8 22C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2M6.8 22H7.2C8.88016 22 9.72024 22 10.362 21.673C10.9265 21.3854 11.3854 20.9265 11.673 20.362C12 19.7202 12 18.8802 12 17.2V16.8C12 15.1198 12 14.2798 11.673 13.638C11.3854 13.0735 10.9265 12.6146 10.362 12.327C9.72024 12 8.88016 12 7.2 12H6.8C5.11984 12 4.27976 12 3.63803 12.327C3.07354 12.6146 2.6146 13.0735 2.32698 13.638C2 14.2798 2 15.1198 2 16.8V17.2M2 17.2V10M10 2H14M22 10V14M18 22C18.93 22 19.395 22 19.7765 21.8978C20.8117 21.6204 21.6204 20.8117 21.8978 19.7765C22 19.395 22 18.93 22 18M22 6C22 5.07003 22 4.60504 21.8978 4.22354C21.6204 3.18827 20.8117 2.37962 19.7765 2.10222C19.395 2 18.93 2 18 2M6 2C5.07003 2 4.60504 2 4.22354 2.10222C3.18827 2.37962 2.37962 3.18827 2.10222 4.22354C2 4.60504 2 5.07003 2 6" stroke="#0B0B13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p className='text'>
                Future-proof your operations with integration solutions designed to grow and adapt with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
