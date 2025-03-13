import { createTheme, ThemeProvider } from '@mui/material';
import s from './form.module.scss';
import PartnerForm from './PartnerForm/PartnerForm';
import SalesForm from './SalesForm/SalesForm';
import SupportForm from './SupportForm/SupportForm';

const customTheme = createTheme({
  typography: {
  },
  palette: {
    primary: {
      // main: '#2D34FF',
      main: 'rgba(0, 0, 0, 0.6)',
    },
    error: {
      main: '#F00',
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'var(--inter)',
          backgroundColor: '#FAFAFB',
          borderRadius: '12px',

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: '1px',
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: '1px',
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primary)",
            borderWidth: '1px',
          },
          "&.Mui-focused .MuiSelect-select ~ .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: '1px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'var(--font-inter)'
        }
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          border: '1px solid #EBEBEB',
          borderRadius: '8px',
          fontFamily: 'var(--font-inter)',
          fontSize: '1.4rem',
          lineHeight: 'normal',
          color: 'black',
          gap: '.8rem',
          height: '32px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '& .MuiChip-label': {
            paddingInline: '.8rem',
          },
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0px',
          boxShadow: 'none',
          backgroundColor: '#FAFAFB',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
          display: 'flex',
          gap: '.8rem',
          color: 'black',
          fontFamily: 'var(--font-inter)',
          padding: '6px 16px',
          '&.Mui-selected': {
            backgroundColor: 'transparent',
          },
        }
      }
    }
  }
})

const Form = ({
  currentForm,
  setCurrentForm,
  formsState,
  setFormsState,
  formErrors,
}) => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className={s.formWrapper}>
        <div className={s.formContent}>
          <div
            className={s.formCloseIcon}
            onClick={() => setCurrentForm('')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L19 5" stroke="#201B21" strokeWidth="2.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 18L6 5" stroke="#201B21" strokeWidth="2.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {currentForm === 'sales' && (
            <SalesForm
              formsState={formsState}
              setFormsState={setFormsState}
              formErrors={formErrors}
            />
          )}

          {currentForm === 'support' && (
            <SupportForm
              formsState={formsState}
              setFormsState={setFormsState}
              formErrors={formErrors}
            />
          )}

          {currentForm === 'partner' && (
            <PartnerForm
              formsState={formsState}
              setFormsState={setFormsState}
              formErrors={formErrors}
            />
          )}
        </div>

        <div
          className={s.formOverlay}
          onClick={() => setCurrentForm('')}
        />
      </div>
    </ThemeProvider>
  )
};

export default Form;
