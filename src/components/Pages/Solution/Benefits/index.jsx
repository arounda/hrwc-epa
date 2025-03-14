import Image from 'next/image';
import s from './benefits.module.scss';
import b1 from '@/assets/b1.png';
import b2 from '@/assets/b2.png';

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
    <path d="M7.08699 0.809968C7.37436 -0.0744901 8.62564 -0.0744897 8.91301 0.809968L10.0296 4.24649C10.1581 4.64203 10.5267 4.90983 10.9426 4.90983H14.556C15.486 4.90983 15.8726 6.09986 15.1203 6.64649L12.197 8.77037C11.8605 9.01483 11.7197 9.44814 11.8482 9.84368L12.9648 13.2802C13.2522 14.1647 12.2399 14.9001 11.4876 14.3535L8.56427 12.2296C8.22781 11.9852 7.77219 11.9852 7.43573 12.2296L4.51245 14.3535C3.76008 14.9001 2.74778 14.1647 3.03516 13.2802L4.15175 9.84368C4.28027 9.44814 4.13948 9.01483 3.80301 8.77037L0.879737 6.64649C0.127372 6.09986 0.514036 4.90983 1.44401 4.90983H5.05738C5.47328 4.90983 5.84187 4.64203 5.97039 4.24649L7.08699 0.809968Z" fill="#2D34FF" />
  </svg>
);

const Benefits = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <div className={s.benefitsWrapper}>
          <div className={s.benefitsBlock}>
            <div className={s.benefitsBlockInfo}>
              <h2>
                Benefits for Employers
              </h2>

              <ul>
                <li>
                  <Star />
                  Eliminate paper distribution costs.
                </li>

                <li>
                  <Star />
                  Reduce administrative workload with automated processes.
                </li>

                <li>
                  <Star />
                  Ensure timely delivery of payroll information.
                </li>
              </ul>
            </div>
            <Image
              className={s.benefitsBlockImage}
              src={b1}
              alt=''
            />
          </div>

          <div className={`${s.benefitsBlock} ${s.is2ndBlock}`}>
            <div className={s.benefitsBlockInfo}>
              <h2>
                Benefits for Employees
              </h2>

              <ul>
                <li>
                  <Star />
                  Instant access to pay statements and tax forms.
                </li>

                <li>
                  <Star />
                  Simplified payroll management from any device.
                </li>

                <li>
                  <Star />
                  Secure, easy-to-use portal for managing records.
                </li>
              </ul>
            </div>

            <Image
              className={`${s.benefitsBlockImage} ${s.isBenefit2Image}`}
              src={b2}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits;
