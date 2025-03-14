import s from './integrations.module.scss';

const Integrations = () => {
  return (
    <section className={`section ${s.integrations}`}>
      <div className="container">
        <div className={s.integrationsWrapper}>
          <h2 className='heading-h2 is-centered mb-32'>
            Seamless integrations start here
          </h2>

          <div className={s.integrationsCards}>
            <div className={s.integrationsCard}>
              <h3>
                Customizable API Solutions
              </h3>

              <p className='text'>
                Adapt our APIs to fit your unique business workflows and integrate with existing systems.
              </p>
            </div>

            <div className={s.integrationsCard}>
              <h3>
                Streamlined Data Flow
              </h3>

              <p className='text'>
                Adapt our APIs to fit your unique business workflows and integrate with existing systems.
              </p>
            </div>

            <div className={s.integrationsCard}>
              <h3>
                Effortless Scalability
              </h3>

              <p className='text'>
                Future-proof your operations with integration solutions designed to grow and adapt with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations;
