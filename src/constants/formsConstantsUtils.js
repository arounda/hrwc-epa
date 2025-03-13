import isEmail from 'validator/lib/isEmail';
import { solutionsTitles } from './solutionsConst';

export const solutionsOptions = Object.values(solutionsTitles);

//#region forms urls
export const salesFormURL = 'https://email9199.hrworkcycles.com/submit-form';
export const supportFormURL = 'https://email9199.hrworkcycles.com/submit-form';
export const partnerFormURL = 'https://email9199.hrworkcycles.com/submit-form';
//#endregion

//#region default forms state
export const defalutSalesFormState = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  numberOfHires: '',
  interested: [],
  message: '',
};

export const defalutSupportFormState = {
  firstName: '',
  lastName: '',
  email: '',
  employerName: '',
  clientID: '',
  message: '',
};

export const defalutPartnerFormState = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  companyWebsite: '',
  opportunities: [],
  message: '',
};
//#endregion

//#region forms fields
export const getSalesFormFields = (values) => {
  const {
    firstName,
    lastName,
    companyName,
    email,
    numberOfHires,
    interested,
    message,
  } = values;

  return [
    {
      label: 'First Name *',
      value: firstName,
      inputType: 'text',
      fieldType: 'text',
      name: 'firstName',
      isMultiline: false
    },
    {
      label: 'Last Name *',
      value: lastName,
      inputType: 'text',
      fieldType: 'text',
      name: 'lastName',
      isMultiline: false
    },
    {
      label: 'Company Name *',
      value: companyName,
      inputType: 'text',
      fieldType: 'text',
      name: 'companyName',
      isMultiline: false
    },
    {
      label: 'Email *',
      value: email,
      inputType: 'emai;',
      fieldType: 'email',
      name: 'email',
      isMultiline: false
    },
    {
      label: 'Number of Hires *',
      value: numberOfHires,
      inputType: 'number',
      fieldType: 'number',
      name: 'numberOfHires',
      isMultiline: false
    },
    {
      label: 'What Are You Interested In? *',
      value: interested,
      inputType: 'text',
      fieldType: 'multi',
      name: 'interested',
      isMultiline: false
    },
    {
      label: 'Message',
      value: message,
      inputType: 'text',
      fieldType: 'text',
      name: 'message',
      isMultiline: true
    },
  ];
}

export const getSupportFormFields = (values) => {
  const {
    firstName,
    lastName,
    email,
    employerName,
    clientID,
    message,
  } = values;

  return [
    {
      label: 'First Name *',
      value: firstName,
      inputType: 'text',
      fieldType: 'text',
      name: 'firstName',
      isMultiline: false
    },
    {
      label: 'Last Name *',
      value: lastName,
      inputType: 'text',
      fieldType: 'text',
      name: 'lastName',
      isMultiline: false
    },
    {
      label: 'Email *',
      value: email,
      inputType: 'emai;',
      fieldType: 'email',
      name: 'email',
      isMultiline: false
    },
    {
      label: 'Employer Name *',
      value: employerName,
      inputType: 'text',
      fieldType: 'text',
      name: 'employerName',
      isMultiline: false
    },
    {
      label: 'Client ID *',
      value: clientID,
      inputType: 'text',
      fieldType: 'text',
      name: 'clientID',
      isMultiline: false
    },
    {
      label: 'How Can We Help?',
      value: message,
      inputType: 'text',
      fieldType: 'text',
      name: 'message',
      isMultiline: true
    },
  ];
}

export const getPartnerFormFields = (values) => {
  const {
    firstName,
    lastName,
    companyName,
    email,
    companyWebsite,
    opportunities,
    message,
  } = values;

  return [
    {
      label: 'First Name *',
      value: firstName,
      inputType: 'text',
      fieldType: 'text',
      name: 'firstName',
      isMultiline: false
    },
    {
      label: 'Last Name *',
      value: lastName,
      inputType: 'text',
      fieldType: 'text',
      name: 'lastName',
      isMultiline: false
    },
    {
      label: 'Email *',
      value: email,
      inputType: 'emai;',
      fieldType: 'email',
      name: 'email',
      isMultiline: false
    },
    {
      label: 'Company Name *',
      value: companyName,
      inputType: 'text',
      fieldType: 'text',
      name: 'companyName',
      isMultiline: false
    },
    {
      label: 'Company Website *',
      value: companyWebsite,
      inputType: 'text',
      fieldType: 'text',
      name: 'companyWebsite',
      isMultiline: false
    },
    {
      label: 'Partnership opportunities *',
      value: opportunities,
      inputType: 'text',
      fieldType: 'multi',
      name: 'opportunities',
      isMultiline: false
    },
    {
      label: 'Message',
      value: message,
      inputType: 'text',
      fieldType: 'text',
      name: 'message',
      isMultiline: true
    },
  ];
}

//#endregion

//#region forms validation and submission

export const handleFieldInput = (event, onSetFormState, formType) => {
  const {
    target: {
      value,
      name
    },
  } = event;

  onSetFormState(prev => {
    return {
      ...prev,
      [ formType ]: {
        ...prev[ formType ],
        [ name ]:
          (name === 'interested')
            ? (typeof value === 'string'
              ? value.split(',')
              : value)
            : value
      }
    }
  });
}

export const handleEmailInputBlur = (event, onSetIsError) => {
  const {
    name,
    value
  } = event.target

  name === 'email'
    && onSetIsError(prev => ({
      ...prev,
      isEmailValid: isEmail(value)
    }))
};

export const showError = (field, value, errorState) => {
  if (field === 'message') {
    return false;
  }

  if (field === 'email') {
    return errorState.required && !value || !errorState.isEmailValid
  }

  return errorState.required && !value;
};

export const handleDeleteFromArray = (value, onSetFormState, key) => {
  onSetFormState(prev => {
    return {
      ...prev,
      sales: {
        ...prev.sales,
        [ key ]: prev.sales.interested.filter((item) => item !== value)
      }
    }
  })
};

const formFieldsAreFilled = (fields) => {
  for (const key in fields) {
    if (key === 'message') continue;

    const fieldValue = fields[ key ];

    if (!fieldValue || !fieldValue.length || fieldValue.length <= 0) {
      return false;
    }
  }

  return true;
};

const getDefaultFormState = (formType) => {
  switch (formType) {
    case 'sales':
      return defalutSalesFormState;

    case 'support':
      return defalutSupportFormState;

    case 'partner':
      return defalutPartnerFormState;
  }
};

const normalizeFormBody = (formState, formType) => {
  if (formType === 'sales') {
    const {
      firstName,
      lastName,
      companyName,
      email,
      numberOfHires,
      interested,
      message,
    } = formState;

    return {
      hrwc_cta_firstName: firstName,
      hrwc_cta_lastName: lastName,
      hrwc_cta_email: email,
      hrwc_cta_company: companyName,
      hrwc_cta_numHires: numberOfHires,
      hrwc_cta_message: message,
      i9_management: false,
      forms_management: interested.includes('Tax Withholding Forms'),
      electronic_payAdvice: interested.includes('Electronic Pay Advice'),
      electronic_onboarding: interested.includes('Electronic Onboarding'),
      tax_credit_management: interested.includes('Tax Credit Services'),
      _everify: interested.includes('I-9 / E-Verify®'),
    }
  }

  if (formType === 'support') {
    const {
      firstName,
      lastName,
      email,
      employerName,
      clientID,
      message,
    } = formState;

    return {
      hrwc_cta_firstName: firstName,
      hrwc_cta_lastName: lastName,
      hrwc_cta_email: email,
      hrwc_cta_company: employerName,
      hrwc_cta_clientID: clientID,
      hrwc_cta_message: message,
    }
  }

  if (formType === 'partner') {
    const {
      firstName,
      lastName,
      email,
      companyName,
      companyWebsite,
      opportunities,
      message,
    } = formState;

    return {
      hrwc_cta_firstName: firstName,
      hrwc_cta_lastName: lastName,
      hrwc_cta_email: email,
      hrwc_cta_company: companyName,
      hrwc_cta_companyWebsite: companyWebsite,
      hrwc_cta_message: message,
      i9_management: false,
      forms_management: opportunities.includes('Tax Withholding Forms'),
      electronic_payAdvice: opportunities.includes('Electronic Pay Advice'),
      electronic_onboarding: opportunities.includes('Electronic Onboarding'),
      tax_credit_management: opportunities.includes('Tax Credit Services'),
      _everify: opportunities.includes('I-9 / E-Verify®'),
    }
  }

  return formState;
};

const setSubmissionError = (isError, onSetIsError, err = null) => {
  onSetIsError(prev => ({
    ...prev,
    submission: isError
  }));
  isError && console.log(err)
};

const setRequiredError = (isError, onSetIsError) => {
  onSetIsError(prev => ({
    ...prev,
    required: isError
  }))
};

export const handleFormSubmit = (
  event,
  formUrl,
  onSetIsError,
  onSetIsSubmitted,
  onSetFormsState,
  formState,
  formType,
) => {
  event.preventDefault();

  setRequiredError(false, onSetIsError);

  setSubmissionError(false, onSetIsError);

  if (!formFieldsAreFilled(formState)) {
    setRequiredError(true, onSetIsError);

    return
  }

  const formBody = normalizeFormBody(formState, formType);

  fetch(formUrl, {
    method: 'POST',
    body: JSON.stringify(formBody),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        onSetIsSubmitted(true);

        onSetFormsState(prev => ({
          ...prev,
          [ formType ]: getDefaultFormState(formType),
        }));
      } else {
        throw new Error('Form Submission Error');
      }
    })
    .catch((error) => {
      setSubmissionError(true, onSetIsError, error)
    })
};

//#endregion
