import HeaderFooterView from '@/components/Views/HeaderFooterView';

export const metadata = {
  title: "Contact us | HRWORKCYCLES",
};

const ContactLayout = ({ children }) => {
  return (
    <HeaderFooterView>
      {children}
    </HeaderFooterView>
  )
};

export default ContactLayout;
