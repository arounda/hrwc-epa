import { useState } from 'react';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import s from '../form.module.scss';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import {
  getPartnerFormFields,
  handleDeleteFromArray,
  handleEmailInputBlur,
  handleFieldInput,
  handleFormSubmit,
  partnerFormURL,
  showError,
  solutionsOptions
} from '@/constants/formsConstantsUtils';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { CustomChip } from '../CustomChip/CustomChip';
import FormErrors from '../FormErrors/FormErrors';

const PartnerForm = ({
  formsState,
  setFormsState,
  formErrors,
}) => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const { partnerErrorState, setPartnerErrorState } = formErrors;
  const { partner: { opportunities } } = formsState;

  const formFields = getPartnerFormFields(formsState.partner);

  return isSubmitted ? (
    <SuccessMessage />
  ) : (
    <>
      <h2 className='heading-h3 mb-8'>
        Partner with Us
      </h2>

      <p className="text">
        We’ll reach out to schedule a call.
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
          partnerFormURL,
          setPartnerErrorState,
          setIsSubmitted,
          setFormsState,
          formsState.partner,
          'partner'
        )}
      >
        {formFields.map(item => {
          return item.fieldType === 'multi' ? (
            <FormControl key={item.name}>
              <InputLabel
                error={partnerErrorState.required && opportunities.length <= 0}
              >
                {item.label}
              </InputLabel>

              <Select
                multiple
                required
                name={item.name}
                value={item.value}
                onChange={(event) => handleFieldInput(event, setFormsState, 'partner')}
                input={
                  <OutlinedInput label={item.label} />
                }
                renderValue={(selected) => (
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '.8rem'
                  }}>
                    {selected.map((value) => (
                      <CustomChip
                        key={value}
                        label={value}
                        onDelete={handleDeleteFromArray}
                        arrayKey='opportunities'
                        onSetFormState={setFormsState}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  marginThreshold: null,
                  style: {
                    marginTop: '-10px',
                    overflow: 'scroll',
                    maxHeight: 'auto',
                  }
                }}
              >
                {solutionsOptions.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    <div className={s.checkWrapper}>
                      {opportunities.includes(name) && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="6" fill="#0B0B13" />
                          <path d="M8 11.8889L10.7692 15L17 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <FormControl key={item.name}>
              <InputLabel
                error={showError(item.name, item.value, partnerErrorState)}
              >
                {item.label}
              </InputLabel>

              <OutlinedInput
                name={item.name}
                type={item.inputType}
                label={item.label}
                value={item.value}
                onInput={(event) => handleFieldInput(event, setFormsState, 'partner')}
                onBlur={(event) => handleEmailInputBlur(event, setPartnerErrorState)}
                required={item.name !== 'message'}
                multiline={item.isMultiline}
                inputProps={{ min: 0 }}
              />
            </FormControl>
          )
        })}

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

      <FormErrors isError={partnerErrorState} />
    </>
  )
};

export default PartnerForm;
