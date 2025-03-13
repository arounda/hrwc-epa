import HeaderFooterView from '@/components/Views/HeaderFooterView';

export const metadata = {
  title: "Seamless HR Integrations & APIs | HRWORKCYCLES",
  description: "Connect and streamline your HR systems with HR WorkCycles' seamless integrations and APIs. Our platform easily integrates with your existing tools, enhancing workflow efficiency and ensuring smooth data synchronization.",
};

const IntegrationsLayout = ({ children }) => {
  return (
    <HeaderFooterView>
      {children}
    </HeaderFooterView>
  )
};

export default IntegrationsLayout;
