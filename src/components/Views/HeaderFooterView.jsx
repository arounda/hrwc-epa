import Footer from '@/components/Common/Footer';
import Header from '@/components/Common/Header';

const HeaderFooterView = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
};

export default HeaderFooterView;
