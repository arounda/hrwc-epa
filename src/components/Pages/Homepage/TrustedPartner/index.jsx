import s from './trustedPartner.module.scss';

const TrustedPartner = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.partnerWrapper}>
          <div className={s.parnterMain}>
            <div className={s.partnerMainTop}>
              <h2 className='heading-h2'>
                Why Choose ei9verify?
              </h2>
              <h3 className='heading-h4'>
                Streamlined, Accurate, and Compliance-Ready
              </h3>
              <p className='text'>
                ei9verify simplifies I-9 and E-Verify processes, ensuring your business stays ahead of compliance requirements with a streamlined, secure solution.
              </p>
            </div>

            <div className={s.partnerMainBottom}>
              <div className={s.partnerMetric}>
                <div className={s.partnerMetricNum}>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58699 1.30997C7.87436 0.42551 9.12564 0.42551 9.41301 1.30997L10.5296 4.74649C10.6581 5.14203 11.0267 5.40983 11.4426 5.40983H15.056C15.986 5.40983 16.3726 6.59986 15.6203 7.14649L12.697 9.27037C12.3605 9.51483 12.2197 9.94814 12.3482 10.3437L13.4648 13.7802C13.7522 14.6647 12.7399 15.4001 11.9876 14.8535L9.06427 12.7296C8.72781 12.4852 8.27219 12.4852 7.93573 12.7296L5.01245 14.8535C4.26008 15.4001 3.24778 14.6647 3.53516 13.7802L4.65175 10.3437C4.78027 9.94814 4.63948 9.51483 4.30301 9.27037L1.37974 7.14649C0.627372 6.59986 1.01404 5.40983 1.94401 5.40983H5.55738C5.97328 5.40983 6.34187 5.14203 6.47039 4.74649L7.58699 1.30997Z" fill="#2D34FF" />
                  </svg>

                  <span>2004</span>
                </div>

                <p className="text">E-Verify Web Services Agent</p>
              </div>

              <div className={s.partnerMetric}>
                <div className={s.partnerMetricNum}>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58699 1.30997C7.87436 0.42551 9.12564 0.42551 9.41301 1.30997L10.5296 4.74649C10.6581 5.14203 11.0267 5.40983 11.4426 5.40983H15.056C15.986 5.40983 16.3726 6.59986 15.6203 7.14649L12.697 9.27037C12.3605 9.51483 12.2197 9.94814 12.3482 10.3437L13.4648 13.7802C13.7522 14.6647 12.7399 15.4001 11.9876 14.8535L9.06427 12.7296C8.72781 12.4852 8.27219 12.4852 7.93573 12.7296L5.01245 14.8535C4.26008 15.4001 3.24778 14.6647 3.53516 13.7802L4.65175 10.3437C4.78027 9.94814 4.63948 9.51483 4.30301 9.27037L1.37974 7.14649C0.627372 6.59986 1.01404 5.40983 1.94401 5.40983H5.55738C5.97328 5.40983 6.34187 5.14203 6.47039 4.74649L7.58699 1.30997Z" fill="#2D34FF" />
                  </svg>

                  <span>$9,600</span>
                </div>

                <p className="text">Maximum Credit Amount</p>
              </div>
            </div>
          </div>

          <div className={s.partnerCards}>
            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>
                Automated Compliance
              </h3>

              <p className={s.partnerText}>
                Simplify the entire process with automated workflows that ensure compliance with the latest I-9 and E-Verify regulations.
              </p>
            </div>

            <div className={s.partnerCardsSeparatorMob}></div>

            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18L18 20L22 16M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>
                Real-Time Verification
              </h3>

              <p className={s.partnerText}>
                Validate employee eligibility instantly, minimizing delays and ensuring compliance with confidence.
              </p>
            </div>

            <div className={s.partnerCardsSeparatorMob}></div>

            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>
                Fast, Easy Setup
              </h3>

              <p className={s.partnerText}>
                Get up and running quickly with an intuitive self- service enrollment and guided workflows designed to simplify the process.
              </p>
            </div>

            <div className={s.partnerCardsSeparatorMob}></div>

            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H16.8C15.1198 20 14.2798 20 13.638 19.673C13.0735 19.3854 12.6146 18.9265 12.327 18.362C12 17.7202 12 16.8802 12 15.2V8.8C12 7.11984 12 6.27976 12.327 5.63803C12.6146 5.07354 13.0735 4.6146 13.638 4.32698C14.2798 4 15.1198 4 16.8 4H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM7 12L17 12M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>
                API Integration & Self-Service Models
              </h3>

              <p className={s.partnerText}>
                Choose between seamless API integration for large-scale operations or a user-friendly self-service model to start quickly without extra resources.
              </p>
            </div>

            <div className={s.partnerCardsSeparator}></div>
            <div className={s.partnerCardsSeparatorVertical}></div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default TrustedPartner;
