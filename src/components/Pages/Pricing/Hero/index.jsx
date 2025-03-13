import { Slider } from '@mui/material';
import s from './hero.module.scss';

const Hero = ({ employeesAmount, setEmployeesAmount }) => {

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroWrapper}>
          <div className={s.heroHeading}>
            <h1 className="heading-h2 is-centered">
              ei9verify Plans & Pricing
            </h1>

            <p className="text is-centered">
              Pracing that adapt to your business requirement.
            </p>
          </div>

          <div className={s.heroProgressWrapper}>
            <h2 className="heading-h5 is-centered">
              Number of Monthly New Hires
            </h2>

            <Slider
              defaultValue={20}
              valueLabelDisplay="on"
              step={10}
              sx={{
                height: '16px',
                width: '90%',
                maxWidth: '800px',
                marginInline: 'auto',
                color: 'var(--primary)',
                padding: '0px',
                '& .MuiSlider-thumb': {
                  '&::before': {
                    boxShadow: 'none',
                  },
                  '&::after': {
                    width: 'auto',
                    height: 'auto',
                    boxShadow: 'none',
                    color: 'white',
                    backgroundColor: 'var(--primary)',
                  },
                  '&.Mui-active': {
                    boxShadow: 'none',
                  },
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#F4F5F7',
                  opacity: 1,
                },
                '& .MuiSlider-valueLabel': {
                  fontSize: '1.6rem',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--white)',
                  borderRadius: '24px',
                  padding: '0.8rem 1.6rem',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  transform: 'translateY(0%) !important',
                  WebkitTransform: 'translateY(0%) !important',
                  '&::before': {
                    display: 'none'
                  }
                },
              }}
              min={10}
              max={100}
              onChange={(e) => setEmployeesAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
