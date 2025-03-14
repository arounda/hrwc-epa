import s from './access.module.scss';
import Check from './Check';

const Access = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.accessWrapper}>
          <div className={s.accessTop}>
            <h2 className='heading-h2 mb-16'>
              Convenient Access to Pay Information
            </h2>

            <div className={s.accessTopNum}>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.58699 1.30997C7.87436 0.42551 9.12564 0.42551 9.41301 1.30997L10.5296 4.74649C10.6581 5.14203 11.0267 5.40983 11.4426 5.40983H15.056C15.986 5.40983 16.3726 6.59986 15.6203 7.14649L12.697 9.27037C12.3605 9.51483 12.2197 9.94814 12.3482 10.3437L13.4648 13.7802C13.7522 14.6647 12.7399 15.4001 11.9876 14.8535L9.06427 12.7296C8.72781 12.4852 8.27219 12.4852 7.93573 12.7296L5.01245 14.8535C4.26008 15.4001 3.24778 14.6647 3.53516 13.7802L4.65175 10.3437C4.78027 9.94814 4.63948 9.51483 4.30301 9.27037L1.37974 7.14649C0.627372 6.59986 1.01404 5.40983 1.94401 5.40983H5.55738C5.97328 5.40983 6.34187 5.14203 6.47039 4.74649L7.58699 1.30997Z" fill="#2D34FF" />
              </svg>

              <span>24/7 Access</span>
            </div>
          </div>

          <div className={s.accessCards}>
            <div className={s.accessCard}>
              <Check />

              <h3 className={s.accessHeading}>
                Paperless Paystubs
              </h3>

              <p className='text'>
                Secure online access to employee pay information.
              </p>
            </div>

            <div className={s.accessCardsSeparatorMob}></div>

            <div className={s.accessCard}>
              <Check />

              <h3 className={s.accessHeading}>
                Form W-2
              </h3>

              <p className='text'>
                Simplified year-end tax form distribution.
              </p>
            </div>

            <div className={s.accessCardsSeparatorMob}></div>

            <div className={s.accessCard}>
              <Check />

              <h3 className={s.accessHeading}>
                Form 1095-C
              </h3>

              <p className='text'>
                Easy access to ACA compliance documentation.
              </p>
            </div>

            <div className={s.accessCardsSeparatorMob}></div>

            <div className={s.accessCard}>
              <Check />

              <h3 className={s.accessHeading}>
                Form 1099-MISC
              </h3>

              <p className='text'>
                Convenient posting for independent contractor forms.
              </p>
            </div>

            <div className={s.accessCardsSeparator}></div>
            <div className={s.accessCardsSeparatorVertical}></div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Access;
