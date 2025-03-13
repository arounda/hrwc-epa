import HeaderFooterView from '@/components/Views/HeaderFooterView';
import s from './policies.module.scss';

const PoliciesLayout = ({ children }) => {
  return (
    <HeaderFooterView>
      <section
        id={s.policiesSection}
        className='section is-padding-block'
      >
        <div className="container">
          {children}
        </div>
      </section>
    </HeaderFooterView>
  )
};

export default PoliciesLayout;
