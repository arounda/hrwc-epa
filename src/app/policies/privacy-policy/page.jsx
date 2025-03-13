import { privacyPolicyContent } from '@/constants/policiesContent';
import s from '../policies.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <h1 className={s.policiesHeading}>Privacy Policy</h1>
      <div className={s.policiesMain}>
        {privacyPolicyContent.map(item => (
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

export default PrivacyPolicy;
