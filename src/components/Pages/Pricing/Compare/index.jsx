import Image from 'next/image';
import s from './compare.module.scss';
import comaperTablet from '@/assets/Pricing/compareTablet.png';
import comaperLaptop from '@/assets/Pricing/compareLaptop.png';
import comaperDesktop from '@/assets/Pricing/compareDesktop.png';

const Compare = () => {
  return (
    <section className='section'>
      <div className="container">
        <div className={s.compareWrapper}>
          <h2 className='heading-h2 is-centered'>
            Compare Features Across Our Plans
          </h2>

          <div className={s.compareImageWrapper}>
            <Image
              src={comaperTablet}
              alt=''
              className={s.compareTabletImage}
            />

            <Image
              src={comaperLaptop}
              alt=''
              className={s.compareLaptopImage}
            />

            <Image
              src={comaperDesktop}
              alt=''
              className={s.compareDesktopImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compare