import { useState } from 'react';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import s from '../form.module.scss';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import {
  getSupportFormFields,
  handleEmailInputBlur,
  handleFieldInput,
  handleFormSubmit,
  showError,
  supportFormURL
} from '@/constants/formsConstantsUtils';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormErrors from '../FormErrors/FormErrors';

const SalesForm = ({
  formsState,
  setFormsState,
  formErrors,
}) => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const { supportErrorState, setSupportErrorState } = formErrors;

  const formFields = getSupportFormFields(formsState.support);

  return isSubmitted ? (
    <SuccessMessage />
  ) : (
    <>
      <h2 className='heading-h3 mb-8'>
        Customer Support
      </h2>

      <p className="text">
        Our support team will respond as soon as possible.
      </p>

      <Box
        component="form"
        sx={{
          display: 'flex',
          gap: '1.6rem',
          flexDirection: 'column',
          alignItems: 'stretch',
          marginTop: '2.4rem'
        }}
        noValidate
        autoComplete="off"
        onSubmit={(event) => handleFormSubmit(
          event,
          supportFormURL,
          setSupportErrorState,
          setIsSubmitted,
          setFormsState,
          formsState.support,
          'support'
        )}
      >
        {formFields.map(item => (
          <FormControl key={item.name}>
            <InputLabel
              error={showError(item.name, item.value, supportErrorState)}
            >
              {item.label}
            </InputLabel>

            <OutlinedInput
              name={item.name}
              type={item.inputType}
              label={item.label}
              value={item.value}
              onInput={(event) => handleFieldInput(event, setFormsState, 'support')}
              onBlur={(event) => handleEmailInputBlur(event, setSupportErrorState)}
              required={item.name !== 'message'}
              multiline={item.isMultiline}
              inputProps={{ min: 0 }}
            />
          </FormControl>
        ))}

        <div className={s.formBottom}>
          <button type='submit'>
            <ButtonPrimary
              isButtonBlue={true}
              isLink={false}
              text='Submit'
            />
          </button>

          <p className={s.formBottomRequired}>* Required for fill</p>
        </div>
      </Box>

      <FormErrors isError={supportErrorState} />
    </>
  )
};

export default SalesForm;
