import ErrorMessage from '../ErrorMessage/ErrorMessage';
import s from './errors.module.scss';

const FormErrors = ({ isError }) => {
  return (
    <>
      {
        (isError.submission || isError.required || !isError.isEmailValid)
        && <div className={s.errorsTopPad}></div>
      }

      <div className={s.errorsWrapper}>
        {
          isError.submission
          && <ErrorMessage text='Someting went wrong while submit. Please try later.' />
        }

        {
          isError.required
          && <ErrorMessage text='Please fill all required fields.' />
        }

        {
          !isError.isEmailValid
          && <ErrorMessage text='Please enter valid email.' />
        }
      </div>
    </>
  )
};

export default FormErrors;
