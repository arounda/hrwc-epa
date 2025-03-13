import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className='section hero'>
      <div className="container">
        <div className={s.heroMain}>
          <h1 className='heading-h1 is-centered mb-16'>
            Access Your Payroll Documents in a Few Clicks
          </h1>

          <p className='text is-centered'>
            Our easy-to-use SaaS solution gives employees <span className="is-bold">24/7</span> access to retrieve pay stubs and tax forms—whenever you need them.
          </p>
        </div>
      </div>
    </section>
  )
};

export default Hero;
