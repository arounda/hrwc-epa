'use client';

import Contact from '@/components/Common/Contact';
import Cards from '@/components/Pages/Pricing/Cards';
import Compare from '@/components/Pages/Pricing/Compare';
import CTA from '@/components/Pages/Pricing/CTA';
import FAQ from '@/components/Pages/Pricing/FAQ';
import Hero from '@/components/Pages/Pricing/Hero';
import { useState } from 'react';

const Pricing = () => {
  const [ employeesAmount, setEmployeesAmount ] = useState(20);

  return (
    <>
      <Hero
        setEmployeesAmount={setEmployeesAmount}
        employeesAmount={employeesAmount}
      />

      <Cards employeesAmount={employeesAmount} />

      <CTA />

      <Compare />

      <FAQ />

      <Contact />
    </>
  )
};

export default Pricing;
