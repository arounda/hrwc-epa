import Image from 'next/image';
import s from './whitelabel.module.scss';
import whitelabelImg from '@/assets/Integrations/whitelabel.png';

const Whitelabel = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <div className={s.whitelabelMain}>
          <div className={s.whitelabelInfo}>
            <h2 className='heading-h2 mb-8'>
              HRWC White-Label Option
            </h2>

            <p className='text'>
              Transform the HRWC system into your own branded solution by utilizing our white-label option. Customize both the employee-facing portal and manager portal to offer a seamless and fully customized HR experience to your clients or internal team.
            </p>
          </div>

          <div className={s.whitelabelImageWrapper}>
            <Image
              className={s.whitelabelImage}
              src={whitelabelImg}
              alt=''
            />
          </div>
        </div>

        <div className={s.whitelabelCards}>
          <div className={s.whitelabelCard}>
            <h3 className="heading-h5 mb-8">
              Real-Time Data Access
            </h3>

            <p className="text">
              Enable seamless data flow between systems, ensuring up-to-date and accurate information across platforms.
            </p>
          </div>

          <div className={s.cardsSeparatorMob}></div>

          <div className={s.whitelabelCard}>
            <h3 className="heading-h5 mb-8">
              Improved User Experience
            </h3>

            <p className="text">
              Deliver a smooth, cohesive experience for employees and managers with integrated systems that work seamlessly together.
            </p>
          </div>

          <div className={s.cardsSeparatorMob}></div>

          <div className={s.whitelabelCard}>
            <h3 className="heading-h5 mb-8">
              Scalability and Customization
            </h3>

            <p className="text">
              Adapt to your organization’s evolving needs with APIs that support tailored workflows and scalable solutions.
            </p>
          </div>

          <div className={s.cardsSeparatorMob}></div>

          <div className={s.whitelabelCard}>
            <h3 className="heading-h5 mb-8">
              Enhanced Efficiency
            </h3>

            <p className="text">
              Automate tasks and reduce manual effort, allowing your team to focus on strategic initiatives
            </p>
          </div>

          <div className={s.cardsSeparator}></div>
          <div className={s.cardsSeparatorVertical}></div>
        </div>
      </div>
    </section>
  )
};

export default Whitelabel;
