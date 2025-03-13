import Contact from '@/components/Common/Contact';
import FAQ from '@/components/Pages/Homepage/FAQ';
import Hero from '@/components/Pages/Homepage/Hero';
import UserLogin from '@/components/Pages/Homepage/UserLogin';
import HeaderFooterView from '@/components/Views/HeaderFooterView';

export default function Home() {
  return (
    <HeaderFooterView>
      <Hero />

      <UserLogin />

      <FAQ />
    </HeaderFooterView>
  );
};
