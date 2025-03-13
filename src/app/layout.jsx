import MainView from '@/components/Views/MainView';
import "@/styles/global.scss";
import { gilroy, inter } from '../fonts/fonts';

export const metadata = {
  title: "HRWORKCYCLES | Simplifying HR Solutions for Your Workforce",
  description: 'HRWC offers streamlined HR solutions, including I-9 Management, E-Verify®, Electronic Onboarding, Tax Credit Services, and more. Simplify your HR processes, maintain compliance, and enhance efficiency with our integrated platform.',
  keywords: 'HR solutions, workforce management, I-9 Management, E-Verify®, I-9/E-Verify, Electronic Onboarding, employee onboarding, Tax Credit Management, Tax Credit Services, WOTC, Tax Withholding Forms, Federal W-4, Electronic Pay Advice, workforce compliance, HR automation, HRIS, HCM, HR compliance'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gilroy.variable}`}>
        <MainView>
          {children}
        </MainView>
      </body>
    </html>
  );
};

