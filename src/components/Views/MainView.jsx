'use client';

import React, { useEffect, useState } from 'react'
import Loading from '@/components/Common/Loading';

const MainView = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, []);

  return (isLoading ?
    <Loading />
   : <>{children}</>
  )
};

export default MainView;
