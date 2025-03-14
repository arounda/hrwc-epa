import s from './universal.module.scss';

const Universal = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.universalWrapper}>
          <h2 className='heading-h2 is-centered mb-8'>
            Universal Access
          </h2>
          <p className="text is-centered mb-32">
            USPayServ platform system utilizes many different mechanisms to allow employees access to their pay information.
          </p>

          <div className={s.universalCards}>
            <p className='text is-centered'>
              Web-based payroll documents
            </p>

            <p className='text is-centered'>
              Text Message
            </p>

            <p className='text is-centered'>
              E-mail distribution
            </p>

            <p className='text is-centered'>
              Interactive Voice Response (IVR) access
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Universal;
