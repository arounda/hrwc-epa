import { useState } from 'react';

const useFormErrorsHook = () => {
  const [ isSalesError, setIsSalesError ] = useState({
    submission: false,
    required: false,
    isEmailValid: true,
  });

  const [ isSupportError, setIsSupportError ] = useState({
    submission: false,
    required: false,
    isEmailValid: true,
  });

  const [ isPartnerError, setIsPartnerError ] = useState({
    submission: false,
    required: false,
    isEmailValid: true,
  });

  return {
    salesErrorState: isSalesError,
    setSalesErrorState: setIsSalesError,
    supportErrorState: isSupportError,
    setSupportErrorState: setIsSupportError,
    partnerErrorState: isPartnerError,
    setPartnerErrorState: setIsPartnerError,
  };
};

export default useFormErrorsHook;
