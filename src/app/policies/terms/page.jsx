import { termsContent } from '@/constants/policiesContent';
import s from '../policies.module.scss';

const Terms = () => {
  return (
    <>
      <h1 className={s.policiesHeading}>Terms & Conditions</h1>
      <div className={s.policiesMain}>
        {termsContent.map(item => (
          <div
            className={s.policiesBlock}
            key={item.id}
          >
            <h2 className='heading-h4 mb-8'>
              {item.heading}
            </h2>
            <p className={`text ${s.policiesText}`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  )
};

export default Terms;
